import { FC } from 'react';

export const CurrentStatus: FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>いまやっていること</h2>
      <ul>
        <li>
          Web サービス開発 (個人事業)
          <ul>
            <li>フリーランスエンジニア向け工数管理サービス (Next.js)</li>
            <li>フィットネス特化型マッチングプラットフォーム</li>
          </ul>
        </li>
        <li>
          受託開発 (フリーランス)
          <ul>
            <li>NFTマーケットプレイス (Next.js + Firebase, GCP)</li>
            <li>メディアプラットフォーム (Next.js, Hasura, Firebase, GCP)</li>
            <li>ECサイト (Ruby on Rails, Next.js, AWS)</li>
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
