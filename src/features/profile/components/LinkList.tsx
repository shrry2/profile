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
      <h2 className="text-xl font-semibold mb-6 text-center text-blue-800">
        Links
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {linkItems.map((item) => (
          <div key={item.href} className="group">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 hover:bg-blue-800 border border-gray-200 rounded-lg p-3 text-center transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-gray-700 group-hover:text-white transition-colors">
                {item.label}
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
