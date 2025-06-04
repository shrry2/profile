import type { FC } from "react";

const copyrightYear =
  new Date().getFullYear() === 2015
    ? "2015"
    : `2015-${new Date().getFullYear()}`;

export const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-gray-600 text-sm">
          &copy; {copyrightYear} Takaki Takeuchi.
        </p>
      </div>
    </footer>
  );
};
