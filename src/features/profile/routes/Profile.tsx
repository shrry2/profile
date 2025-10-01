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
import { MobileNav } from "../components/MobileNav";
import { Sidebar } from "../components/Sidebar";

export const Profile: FC = () => {
  return (
    <>
      <Sidebar />
      <MobileNav />

      <div className="lg:ml-64">
        <div className="flex flex-col gap-0 max-w-4xl mx-auto">
          <header className="text-center mb-12 pb-8 border-b border-[--color-washi-border]">
            <span className="sr-only">名前</span>
            <h1 className="text-4xl font-medium mb-3 tracking-wide text-[--color-sumi]">
              竹内 貴紀
            </h1>
            <p className="text-base text-[--color-sumi-light] mb-1">
              たけうち たかき
            </p>
            <p className="text-base text-[--color-sumi-light]">
              Takaki Takeuchi
            </p>
            <p className="text-sm text-[--color-sumi-light] mt-4">
              フリーランスの Web エンジニア
            </p>
          </header>

          <div
            id="links"
            className="bg-[--color-washi] p-8 mb-8 border-y border-[--color-washi-border] shadow-sm scroll-mt-4"
          >
            <LinkList />
          </div>

          <div className="prose prose-gray max-w-none">
            <div
              id="current-status"
              className="bg-[--color-washi] p-8 mb-6 border-y border-[--color-washi-border] shadow-sm scroll-mt-4"
            >
              <CurrentStatus />
            </div>

            <div
              id="wishes"
              className="bg-[--color-washi] p-8 mb-6 border-y border-[--color-washi-border] shadow-sm scroll-mt-4"
            >
              <LongList />
            </div>

            <div
              id="contact"
              className="bg-[--color-washi] p-8 mb-6 border-y border-[--color-washi-border] shadow-sm scroll-mt-4"
            >
              <Contact />
            </div>

            <div
              id="history"
              className="bg-[--color-washi] p-8 mb-6 border-y border-[--color-washi-border] shadow-sm scroll-mt-4"
            >
              <History />
            </div>

            <div
              id="skills"
              className="bg-[--color-washi] p-8 mb-6 border-y border-[--color-washi-border] shadow-sm scroll-mt-4"
            >
              <Skills />
            </div>

            <div
              id="awards"
              className="bg-[--color-washi] p-8 mb-6 border-y border-[--color-washi-border] shadow-sm scroll-mt-4"
            >
              <Awards />
            </div>

            <div
              id="favorites"
              className="bg-[--color-washi] p-8 mb-6 border-y border-[--color-washi-border] shadow-sm scroll-mt-4"
            >
              <Favorites />
            </div>

            <div
              id="memorable-events"
              className="bg-[--color-washi] p-8 mb-6 border-y border-[--color-washi-border] shadow-sm scroll-mt-4"
            >
              <MemorableEvents />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
