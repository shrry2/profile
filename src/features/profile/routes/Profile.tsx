import type { FC } from "react";

import { Awards } from "~/features/profile/components/Awards";
import { Contact } from "~/features/profile/components/Contact";
import { CurrentStatus } from "~/features/profile/components/CurrentStatus";
import { Favorites } from "~/features/profile/components/Favorites";
import { History } from "~/features/profile/components/History";
import { LongList } from "~/features/profile/components/LongList";
import { MemorableEvents } from "~/features/profile/components/MemorableEvents";
import { Skills } from "~/features/profile/components/Skills";
import { LinkList } from "../components/LinkList";

export const Profile: FC = () => {
  return (
    <div className="p-8 pb-0 flex flex-col gap-6">
      <section className="flex flex-col gap-4">
        <span className="sr-only">名前</span>
        <h1 className="text-3xl font-bold">Takaki Takeuchi</h1>
        <p>竹内 貴紀 (たけうち たかき)</p>
        <p>フリーランスの Web エンジニアです</p>
      </section>

      <LinkList />

      <div className="prose prose-sm max-w-none">
        <CurrentStatus />

        <LongList />

        <Contact />

        <History />

        <Skills />

        <Awards />

        <Favorites />

        <MemorableEvents />
      </div>
    </div>
  );
};
