import { FC } from 'react';

import { LinkList } from '../components/LinkList';
import { History } from '~/features/profile/components/History';
import { Skills } from '~/features/profile/components/Skills';
import { Awards } from '~/features/profile/components/Awards';
import { Favorites } from '~/features/profile/components/Favorites';
import { CurrentStatus } from '~/features/profile/components/CurrentStatus';
import { Contact } from '~/features/profile/components/Contact';

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
        <CurrentStatus />

        <Contact />

        <History />

        <Skills />

        <Awards />

        <Favorites />
      </div>
    </div>
  );
};
