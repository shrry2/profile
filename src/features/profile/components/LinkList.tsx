import type { FC } from "react";

type LinkItem = {
  href: string;
  label: string;
};

const linkItems: LinkItem[] = [
  {
    href: "https://shrry2.me",
    label: "Blog",
  },
  {
    href: "https://keybase.io/shrry2",
    label: "Keybase",
  },
  {
    href: "https://twitter.com/shrry2",
    label: "Twitter",
  },
  {
    href: "https://www.facebook.com/takaki.tekeuchi/",
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/in/takaki-takeuchi/",
    label: "LinkedIn",
  },
  {
    href: "https://www.wantedly.com/id/takaki_takeuchi",
    label: "Wantedly",
  },
  {
    href: "https://bookmeter.com/users/286400",
    label: "読書メーター",
  },
  {
    href: "https://myanimelist.net/animelist/shrry2",
    label: "MyAnimeList",
  },
];

export const LinkList: FC = () => {
  return (
    <section className="not-prose">
      <h2 className="text-xl font-medium mb-6 text-center text-[--color-sumi] tracking-wide border-b border-[--color-washi-border] pb-3">
        Links
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {linkItems.map((item) => (
          <div key={item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-transparent hover:bg-[#ebe7dc] border border-[--color-washi-border] p-3 text-center transition-colors duration-200"
            >
              <span className="text-sm font-normal text-[--color-sumi]">
                {item.label}
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
