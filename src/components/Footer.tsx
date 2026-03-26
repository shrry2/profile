import type { FC } from "react";

const copyrightYear =
  new Date().getFullYear() === 2015
    ? "2015"
    : `2015-${new Date().getFullYear()}`;

export const Footer: FC = () => {
  return (
    <footer className="border-t border-[--color-washi-border]">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 py-8">
        <p className="text-center text-[--color-sumi-light] text-sm tracking-wide">
          &copy; {copyrightYear} Takaki Takeuchi.
        </p>
      </div>
    </footer>
  );
};
