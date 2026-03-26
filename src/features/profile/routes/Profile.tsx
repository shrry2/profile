import type { FC } from "react";

import { Awards } from "~/features/profile/components/Awards";
import { Contact } from "~/features/profile/components/Contact";
import { CurrentStatus } from "~/features/profile/components/CurrentStatus";
import { Favorites } from "~/features/profile/components/Favorites";
import { History } from "~/features/profile/components/History";
import { LongList } from "~/features/profile/components/LongList";
import { MemorableEvents } from "~/features/profile/components/MemorableEvents";
import { Skills } from "~/features/profile/components/Skills";
import { FloatingNav } from "../components/FloatingNav";
import { HeroSection } from "../components/HeroSection";
import { LinkList } from "../components/LinkList";

export const Profile: FC = () => {
  return (
    <>
      <FloatingNav />
      <HeroSection />

      <div className="max-w-2xl mx-auto px-6 sm:px-8">
        <div className="prose prose-gray max-w-none">
          <section id="links" className="py-16 lg:py-24 scroll-mt-24">
            <LinkList />
          </section>

          <section
            id="current-status"
            className="py-16 lg:py-24 border-t border-[--color-washi-border] scroll-mt-24"
          >
            <CurrentStatus />
          </section>

          <section
            id="wishes"
            className="py-16 lg:py-24 border-t border-[--color-washi-border] scroll-mt-24"
          >
            <LongList />
          </section>

          <section
            id="contact"
            className="py-16 lg:py-24 border-t border-[--color-washi-border] scroll-mt-24"
          >
            <Contact />
          </section>

          <section
            id="history"
            className="py-16 lg:py-24 border-t border-[--color-washi-border] scroll-mt-24"
          >
            <History />
          </section>

          <section
            id="skills"
            className="py-16 lg:py-24 border-t border-[--color-washi-border] scroll-mt-24"
          >
            <Skills />
          </section>

          <section
            id="awards"
            className="py-16 lg:py-24 border-t border-[--color-washi-border] scroll-mt-24"
          >
            <Awards />
          </section>

          <section
            id="favorites"
            className="py-16 lg:py-24 border-t border-[--color-washi-border] scroll-mt-24"
          >
            <Favorites />
          </section>

          <section
            id="memorable-events"
            className="py-16 lg:py-24 border-t border-[--color-washi-border] scroll-mt-24"
          >
            <MemorableEvents />
          </section>
        </div>
      </div>
    </>
  );
};
