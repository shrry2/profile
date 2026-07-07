# Vercel → OpenNext × Cloudflare Workers 移行計画

このドキュメントは、本プロフィールサイト (Next.js 16 / App Router) を
Vercel から [OpenNext](https://opennext.js.org/cloudflare) 経由で
Cloudflare Workers へ移行するための計画。

作成日: 2026-07-08 / 対象: `@shrry2/profile`

---

## 1. 現状分析

| 項目 | 状態 |
| --- | --- |
| フレームワーク | Next.js **16.2.10** (App Router, Turbopack build) |
| ランタイム | 静的中心。動的ルートは `/opengraph-image` のみ (`runtime = "edge"`) |
| ルート | `/` (static), `/robots.txt` (static), `/sitemap.xml` (static), `/opengraph-image` (dynamic) |
| データ層 | なし (DB / ISR / On-demand Revalidation / Server Actions / API Routes すべて不使用) |
| `next/image` | **不使用** → Cloudflare Images (`IMAGES` binding) は不要 |
| `next.config.js` | `/posts/:path*` → `https://shrry2.me/posts/:path*` の redirect のみ |
| デプロイ設定 | `vercel.json` なし。Vercel の Git 連携によるゼロコンフィグ運用 |
| 環境変数 | `.env*` なし |

### 移行難易度: **低**

ISR・On-demand Revalidation・Server Actions・DB を一切使っていないため、
OpenNext Cloudflare で本来必要になる **R2 (incremental cache) / Durable Objects (queue・tag cache)**
といったキャッシュインフラは**不要**。最小構成の Worker + 静的アセットで完結する。

---

## 2. 移行後アーキテクチャ

```
Cloudflare Workers
├── Worker (.open-next/worker.js)     ← Next.js サーバー (workerd 上で動作)
│   └── /opengraph-image を動的生成 (next/og)
└── Workers Static Assets (.open-next/assets)
    └── /, /robots.txt, /sitemap.xml, _next/static/* を配信
```

- 全ルートが Cloudflare のグローバルネットワーク (workerd) 上で実行される。
- 静的アセットは Workers Static Assets が直接返し、Worker 起動を経由しない。
- Vercel の Fluid Compute / Edge Functions に相当する処理は不要。

---

## 3. 前提条件・事前確認 (着手前に潰す)

1. **Next.js 16 の OpenNext Cloudflare 対応バージョン確認 ⚠️ 最重要**
   `@opennextjs/cloudflare` の対応 Next.js バージョンを
   [対応表](https://opennext.js.org/cloudflare) / GitHub リリースで確認する。
   Next 16 は比較的新しいため、未対応なら以下いずれかで対応:
   - 対応済みの `@opennextjs/cloudflare` 最新版を使う (推奨)
   - 一時的に Next 15 系へダウングレードして移行 → 後日 16 へ

2. **Cloudflare アカウント / Wrangler 認証**
   `pnpm dlx wrangler login` でログイン。無料プラン (Workers Free) で
   本サイト規模なら十分だが、Workers 有料プランの方が CPU 時間・リクエスト上限に余裕あり。

3. **`compatibility_date` / フラグ要件**
   `compatibility_date >= 2024-09-23`、`nodejs_compat` 必須
   (計画では `2024-12-30` を採用)。

4. **カスタムドメインの現状把握**
   現在のドメインの DNS/ネームサーバーがどこにあるか (Vercel / 外部レジストラ) を確認。
   移行時に Cloudflare 側でルーティングする必要がある (§6)。

---

## 4. `/opengraph-image` (edge runtime) の扱い ⚠️

現状 `src/app/opengraph-image.tsx` は `export const runtime = "edge"` を宣言し、
`next/og` の `ImageResponse` と `fetch(new URL("./Inter-SemiBold.ttf", import.meta.url))`
でフォントを読み込んでいる。

- OpenNext Cloudflare では**全ルートが workerd 上で動く**ため、`edge` 宣言は原則不要。
- **対応方針**: `export const runtime = "edge"` を**削除**し、デフォルトランタイムで動かす。
  `next/og` は OpenNext Cloudflare でサポートされているが、フォントの
  `fetch(import.meta.url)` 読み込みが workerd で解決されるかを **preview で必ず実機確認**する。
- リスク: フォント fetch が失敗する場合、フォントを Base64 で埋め込む /
  静的アセット URL から取得する等に切り替える。→ §5 のステップ5で検証。

---

## 5. 移行ステップ

> ブランチを切って作業 (worktree 運用: 空きレーンで `git switch -c feat/opennext-cloudflare origin/main`)。
> Vercel は移行完了・DNS 切替まで**現行のまま残す**(ロールバック経路確保)。

### Step 1. OpenNext 自動セットアップ
```bash
pnpm dlx @opennextjs/cloudflare@latest migrate
```
`migrate` コマンドが以下を自動生成/更新する:
- `wrangler.jsonc` / `open-next.config.ts` / `.dev.vars`
- `package.json` の scripts (preview/deploy/upload/cf-typegen)
- 静的アセットのキャッシュヘッダ設定・`.gitignore` 追記
- (R2 が有効なら) キャッシュ用 R2 バケット作成 — **本サイトでは不要なのでスキップ可**

> 自動化を使わず手動で入れる場合:
> ```bash
> pnpm add @opennextjs/cloudflare@latest
> pnpm add -D wrangler@latest
> ```

### Step 2. `wrangler.jsonc` (最小構成)
本サイトは ISR/キャッシュ不要のため、R2・Durable Objects は**入れない**。
```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "main": ".open-next/worker.js",
  "name": "shrry2-profile",
  "compatibility_date": "2024-12-30",
  "compatibility_flags": [
    "nodejs_compat",
    "global_fetch_strictly_public"
  ],
  "assets": {
    "directory": ".open-next/assets",
    "binding": "ASSETS"
  },
  "services": [
    { "binding": "WORKER_SELF_REFERENCE", "service": "shrry2-profile" }
  ]
  // R2 (NEXT_INC_CACHE_R2_BUCKET) / durable_objects / images は不要なので省略
}
```

### Step 3. `open-next.config.ts` (デフォルトで可)
```ts
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // ISR/On-demand revalidation を使わないため incrementalCache 等の追加設定は不要
});
```

### Step 4. `package.json` scripts 追加
```jsonc
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
    "deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy",
    "cf-typegen": "wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts"
  }
}
```
Biome の lint 対象に `.open-next` / `.wrangler` が入らないよう
`biome.json` の `files.includes` に除外 (`"!**/.open-next"`, `"!**/.wrangler"`) を追加。
`.gitignore` にも同様に追記 (`migrate` が自動でやる場合あり)。

### Step 5. ローカル検証 (workerd 実機)
```bash
pnpm preview        # opennextjs-cloudflare build + wrangler dev で workerd 実行
```
確認項目:
- [ ] `/` が正しくレンダリングされる
- [ ] `/robots.txt`, `/sitemap.xml` が返る
- [ ] **`/opengraph-image` が画像を返す (§4 のフォント fetch 検証)**
- [ ] `/posts/foo` → `https://shrry2.me/posts/foo` の redirect が効く
- [ ] コンソール/ネットワークに致命的エラーがない

### Step 6. `metadataBase` の設定 (移行の good timing)
現状 build 時に
`metadataBase property in metadata export is not set` の warning が出ている。
OG 画像等の絶対 URL 解決のため、`src/app/layout.tsx` の `metadata` に
`metadataBase: new URL("https://<本番ドメイン>")` を設定しておく。

### Step 7. Cloudflare へデプロイ (preview URL)
```bash
pnpm deploy
```
`*.workers.dev` の URL で本番同等環境を確認。カスタムドメインはまだ当てない。

---

## 6. DNS / ドメイン切替 (カットオーバー)

1. Cloudflare Workers 側でカスタムドメイン (Custom Domain) を設定
   (ドメインが Cloudflare 管理下にある必要 → 未登録ならまず Cloudflare にサイト追加 & ネームサーバー移管)。
2. preview URL で最終確認が取れたら、DNS を Cloudflare Workers に向ける。
3. 反映後、旧 Vercel デプロイを**すぐ削除しない**。数日〜1週間は残してロールバック経路を確保。
4. 問題なければ Vercel プロジェクトを削除 / Git 連携を解除。

---

## 7. CI/CD

- Vercel の Git 自動デプロイがなくなるため、代替を用意する:
  - **推奨**: [Cloudflare Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/)
    (GitHub 連携で push 時に `pnpm deploy` 相当を実行) または
  - GitHub Actions で `cloudflare/wrangler-action` を使い `pnpm deploy`。
- Secrets: `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` を CI に登録。

---

## 8. リスクと対策

| リスク | 影響 | 対策 |
| --- | --- | --- |
| Next.js 16 が `@opennextjs/cloudflare` 未対応 | 移行ブロック | §3-1 で事前確認。未対応なら 15 系へ一時ダウングレード |
| `next/og` フォント fetch が workerd で失敗 | OG 画像が壊れる | §4: `runtime=edge` 削除 + Base64 埋め込み等にフォールバック |
| DNS 切替時のダウンタイム | 一時的な到達不能 | preview URL で完全検証 → 低 TTL で切替 → Vercel 温存 |
| Turbopack build 出力の非互換 | build 失敗 | 発生時は `next build` の webpack fallback を検討 |
| キャッシュ挙動の差異 | 体感差 | 静的中心のため影響小。CF のキャッシュヘッダを Step4 で確認 |

## 9. ロールバック

DNS を Vercel に戻すだけで即時復旧可能 (Vercel プロジェクトを削除するまでは常に安全)。
そのため **Vercel の削除はカットオーバー成功を数日確認してから**行う。

---

## 10. チェックリスト (サマリ)

- [ ] `@opennextjs/cloudflare` の Next.js 16 対応を確認
- [ ] `wrangler login` / Cloudflare アカウント準備
- [ ] `migrate` 実行 → `wrangler.jsonc` / `open-next.config.ts` 生成
- [ ] `package.json` scripts / `biome.json` 除外 / `.gitignore` 整備
- [ ] `opengraph-image.tsx` の `runtime=edge` 削除・OG 画像実機検証
- [ ] `metadataBase` 設定
- [ ] `pnpm preview` でローカル workerd 検証
- [ ] `pnpm deploy` → `*.workers.dev` で本番同等確認
- [ ] Cloudflare Custom Domain 設定 / DNS 切替
- [ ] CI/CD (Workers Builds or GitHub Actions) 構築
- [ ] 数日安定後に Vercel プロジェクト削除
