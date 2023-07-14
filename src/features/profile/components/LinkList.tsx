import { FC } from 'react';

type LinkItem = {
  href: string;
  label: string;
};

const linkItems: LinkItem[] = [
  {
    href: 'https://twitter.com/shrry2',
    label: 'Twitter',
  },
  {
    href: 'https://www.facebook.com/takaki.tekeuchi/',
    label: 'Facebook',
  },
  {
    href: 'https://instagram.com/shrry22',
    label: 'Instagram',
  },
  {
    href: 'https://www.wantedly.com/id/takaki_takeuchi',
    label: 'Wantedly',
  },
  {
    href: 'https://bookmeter.com/users/286400',
    label: '読書メーター',
  },
  {
    href: 'https://myanimelist.net/animelist/shrry2',
    label: 'MyAnimeList',
  },
];

export const LinkList: FC = () => {
  return (
    <section className="not-prose">
      <ul className="flex items-center gap-4 flex-wrap">
        {linkItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
