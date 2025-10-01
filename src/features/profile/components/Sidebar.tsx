"use client";

import type { FC } from "react";
import { navigationItems } from "../constants/navigation";

export const Sidebar: FC = () => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="hidden lg:block fixed left-0 top-0 h-screen w-64 bg-[--color-washi] border-r border-[--color-washi-border] overflow-y-auto">
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-lg font-medium text-[--color-sumi] tracking-wide">
            竹内 貴紀
          </h2>
          <p className="text-sm text-[--color-sumi-light] mt-1">
            Takaki Takeuchi
          </p>
        </div>

        <nav className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleClick(item.id)}
                className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[--color-sumi] hover:bg-[#ebe7dc] transition-colors rounded-sm"
              >
                <Icon className="h-4 w-4 text-[--color-sumi-light]" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
