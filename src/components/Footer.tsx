import type { FC } from "react";

const copyrightYear =
  new Date().getFullYear() === 2015
    ? "2015"
    : `2015-${new Date().getFullYear()}`;

export const Footer: FC = () => {
  return (
    <footer className="bg-[--color-washi] border-t border-[--color-washi-border] mt-16">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-8">
        <p className="text-center text-[--color-sumi-light] text-sm tracking-wide">
          &copy; {copyrightYear} Takaki Takeuchi.
        </p>
      </div>
    </footer>
  );
};
