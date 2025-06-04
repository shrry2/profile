import { FC } from 'react';

const copyrightYear =
  new Date().getFullYear() === 2015
    ? '2015'
    : `2015-${new Date().getFullYear()}`;

export const Footer: FC = () => {
  return (
    <footer className="p-8">
      <p className="text-gray-600">&copy; {copyrightYear} Takaki Takeuchi</p>
    </footer>
  );
};
