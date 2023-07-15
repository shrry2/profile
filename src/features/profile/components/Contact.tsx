import { FC } from 'react';

export const Contact: FC = () => {
  return (
    <section>
      <h2>連絡先</h2>
      <p>
        お仕事のご依頼やご相談は、以下のメールアドレスまでお願いします。
        <br />
        <code>takaki (at) takeu.ch</code>
      </p>
      <p>
        PGP公開鍵は{' '}
        <a
          href="https://keybase.io/shrry2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Keybase
        </a>{' '}
        にて取得できます。
        <br />
        フィンガープリント:{' '}
        <code>AE77 D202 8FD9 4D8D 61A1 5CAD BF35 5E69 1312 3608</code>
      </p>
    </section>
  );
};
