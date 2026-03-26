"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { navigationItems } from "../constants/navigation";

const navItems = navigationItems.filter((item) => item.showInPill);

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navigationItems.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -70% 0px" },
    );

    for (const el of elements) {
      observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  const handleClick = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-lg bg-[--color-washi]/85" : ""
      }`}
    >
      <div className="mx-auto px-8 sm:px-12 lg:px-16 flex items-center justify-between h-14">
        <button
          type="button"
          onClick={scrollToTop}
          className="text-sm font-medium text-[--color-sumi] tracking-wide shrink-0"
        >
          T. Takeuchi
        </button>

        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleClick(item.id)}
              className={`relative px-3 py-1.5 text-xs sm:text-sm rounded-full transition-colors whitespace-nowrap ${
                activeSection === item.id
                  ? "text-[--color-accent-hover]"
                  : "text-[--color-sumi-light] hover:text-[--color-sumi]"
              }`}
            >
              {item.pillLabel}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[--color-accent] rounded-full" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
