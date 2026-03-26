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
      <h2 className="text-xl font-medium mb-6 text-[--color-sumi] tracking-wide">
        Links
      </h2>
      <div className="flex flex-wrap gap-3">
        {linkItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-[--color-accent-light] border border-[--color-washi-border] rounded-full px-4 py-2 text-sm text-[--color-sumi] transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
};
