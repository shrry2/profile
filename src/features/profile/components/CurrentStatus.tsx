import { FC } from 'react';

export const CurrentStatus: FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>いまやっていること</h2>
      <ul>
        <li>
          小さい会社の経営とサービス開発
          <ul>
            <li>広告配信プラットフォーム (Next.js, AWS)</li>
          </ul>
        </li>
        <li>
          個人で Web サービス開発
          <ul>
            <li>工数管理ツール (Next.js, Vercel)</li>
            <li>割り勘アプリ (Next.js, Vercel, Expo)</li>
          </ul>
        </li>
        <li>
          システムの受託開発・技術サポート (個人事業)
          <ul>
            <li>NFTマーケットプレイス (Next.js, Firebase, Vercel, GCP)</li>
            <li>
              メディアプラットフォーム (Next.js, Hasura, Firebase, Vercel, GCP)
            </li>
            <li>ECサイト (Ruby on Rails, Next.js, AWS)</li>
            <li>社内業務支援ツール (Laravel)</li>
          </ul>
        </li>
        <li>
          資格の勉強
          <ul>
            <li>日商簿記3級</li>
            <li>情報処理安全確保支援士</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
