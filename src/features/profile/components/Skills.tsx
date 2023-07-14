import { FC } from 'react';

export const Skills: FC = () => {
  return (
    <section>
      <h2>スキル</h2>
      <ul>
        <li>
          言語: TypeScript, JavaScript, Ruby, PHP, HTML, CSS (趣味程度: C, Go,
          Rust, Solidity)
        </li>
        <li>
          フレームワーク: React, Next.js, Gatsby, Vue.js, Ruby on Rails,
          Sinatra, Laravel, CodeIgniter
        </li>
        <li>
          インフラ: GCP, Docker, Terraform, GitHub Actions, 自宅サーバー/VPS
          (Ubuntu, CentOS), Vercel, Netlify, Heroku, Firebase
        </li>
        <li>
          その他: Git, GitHub, Bitbucket, Slack, Discord, Notion, Figma, Adobe
          XD, Photoshop, Illustrator, Monorepo (Turborepo, Lerna), GraphQL,
          MySQL, PostgreSQL, WordPress
        </li>
      </ul>
    </section>
  );
};
