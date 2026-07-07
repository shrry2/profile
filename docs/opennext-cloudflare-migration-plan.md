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

## 4. `/opengraph-image` (edge runtime) の扱い ✅ 対応済み

当初の動的 `next/og` ルート (`opengraph-image.tsx`, `runtime = "edge"`) は
**廃止し、静的画像に置換済み**。

- gpt-image-2 で和モダン・ミニマルの OG カードを 1 枚生成 → 1200×630 に加工し
  `src/app/opengraph-image.png` として配置(Next.js の静的 opengraph-image 規約)。
- 未使用になった `Inter-SemiBold.ttf` は削除。
- `layout.tsx` に `metadataBase` を設定し、`og:image` が絶対 URL
  (`https://takaki.takeu.ch/opengraph-image.png`) に解決されることを確認。
- **結果: 動的ルートがゼロになり、サイトは完全静的化**。workerd 上でのフォント
  fetch 問題も原理的に消滅した。

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

### 実施済み (このブランチ `chore/deps-update-and-opennext-plan`)

- [x] 依存を最新へ更新 (next 16.2.10 / react 19.2.7 ほか)
- [x] `@opennextjs/cloudflare` の Next.js 16 対応を確認 (1.20.1 が `>=16.2.6` 対応)
- [x] OG 画像を静的化 (gpt-image-2 生成 → `opengraph-image.png`)、動的ルート撤廃
- [x] `metadataBase` 設定
- [x] `@opennextjs/cloudflare` + `wrangler` インストール
- [x] `wrangler.jsonc` / `open-next.config.ts` 作成 (最小構成)
- [x] `package.json` scripts / `biome.json` 除外 / `.gitignore` 整備
- [x] `opennextjs-cloudflare build` 成功
- [x] ローカル workerd (`wrangler dev`) で全ルート検証済み

### 実施済み (続き)

- [x] `wrangler login` (takaki.personal@gmail.com)
- [x] `pnpm run deploy` → https://shrry2-profile.takaki-takeuchi.workers.dev で本番同等確認
      (全ルート 200 / redirect / og:image 絶対URL 確認済み)
- [x] `takeu.ch` は既に Cloudflare ゾーン (ネームサーバー移管は不要)

### 実施済み (続き)

- [x] **カットオーバー完了**: Vercel CNAME 削除 → `custom_domain` route 有効化 →
      `pnpm run deploy`。`takaki.takeu.ch` が Worker で稼働、SSL・全ルート本番検証済み
      (server: cloudflare / ssl_verify OK)

### 実施済み (続き)

- [x] CI/CD: GitHub Actions `.github/workflows/deploy.yml` を追加
      (main push / 手動実行で `pnpm run deploy`)。`CLOUDFLARE_ACCOUNT_ID` secret 設定済み

### 残り ⬇️

- [ ] Cloudflare API Token を発行し `CLOUDFLARE_API_TOKEN` secret を登録 (ユーザー操作)
- [ ] 本番 PR をマージ (`chore/deps-update-and-opennext-plan` → `main`) → 初回自動デプロイ確認
- [ ] 数日安定を確認後に Vercel プロジェクト削除 (それまではロールバック用に温存)
