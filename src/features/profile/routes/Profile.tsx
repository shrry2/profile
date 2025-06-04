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
    <div className="flex flex-col gap-0">
      <header className="bg-gradient-to-br from-blue-800 to-blue-600 text-white rounded-2xl p-12 mb-8 text-center shadow-xl">
        <span className="sr-only">名前</span>
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight">
          Takaki Takeuchi
        </h1>
        <p className="text-white/90 text-lg mb-2">
          竹内 貴紀 (たけうち たかき)
        </p>
        <p className="text-white/90 text-lg">フリーランスの Web エンジニア</p>
      </header>

      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-6 hover:shadow-md transition-all duration-200">
        <LinkList />
      </div>

      <div className="prose prose-gray max-w-none prose-p:text-gray-800 prose-li:text-gray-800">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-6 hover:shadow-md transition-all duration-200">
          <CurrentStatus />
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-6 hover:shadow-md transition-all duration-200">
          <LongList />
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-6 hover:shadow-md transition-all duration-200">
          <Contact />
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-6 hover:shadow-md transition-all duration-200">
          <History />
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-6 hover:shadow-md transition-all duration-200">
          <Skills />
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-6 hover:shadow-md transition-all duration-200">
          <Awards />
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-6 hover:shadow-md transition-all duration-200">
          <Favorites />
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-6 hover:shadow-md transition-all duration-200">
          <MemorableEvents />
        </div>
      </div>
    </div>
  );
};
