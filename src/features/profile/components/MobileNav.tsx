"use client";

import { Menu } from "lucide-react";
import type { FC } from "react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { navigationItems } from "../constants/navigation";

export const MobileNav: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <div className="lg:hidden fixed top-4 right-4 z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            className="p-3 bg-washi border border-[--color-washi-border] shadow-md hover:bg-[#ebe7dc] transition-colors"
            aria-label="メニューを開く"
          >
            <Menu className="h-6 w-6 text-[--color-sumi]" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px]">
          <SheetHeader>
            <SheetTitle className="text-left">
              <div>
                <h2 className="text-lg font-medium text-[--color-sumi] tracking-wide">
                  竹内 貴紀
                </h2>
                <p className="text-sm text-[--color-sumi-light] mt-1 font-normal">
                  Takaki Takeuchi
                </p>
              </div>
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-8 space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleClick(item.id)}
                  className="w-full flex items-center gap-3 px-3 py-3 text-sm text-[--color-sumi] hover:bg-[#ebe7dc] transition-colors rounded-sm"
                >
                  <Icon className="h-4 w-4 text-[--color-sumi-light]" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
