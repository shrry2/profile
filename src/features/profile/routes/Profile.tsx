import { FC } from 'react';

import { LinkList } from '../components/LinkList';
import { History } from '~/features/profile/components/History';
import { Skills } from '~/features/profile/components/Skills';
import { Awards } from '~/features/profile/components/Awards';
import { Favorites } from '~/features/profile/components/Favorites';

export const Profile: FC = () => {
  return (
    <div className="p-8 pb-0 flex flex-col gap-6">
      <section className="flex flex-col gap-4">
        <span className="sr-only">名前</span>
        <h1 className="text-3xl font-bold">Takaki Takeuchi</h1>
        <p>竹内 貴紀 (たけうち たかき)</p>
      </section>

      <LinkList />

      <div className="prose prose-sm max-w-none">
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
                <li>
                  メディアプラットフォーム (Next.js, Hasura, Firebase, GCP)
                </li>
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

        <History />

        <Skills />

        <Awards />

        <Favorites />
      </div>
    </div>
  );
};
