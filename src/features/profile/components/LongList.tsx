import { FC } from 'react';

export const LongList: FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>今後やりたいこと</h2>
      <ul>
        <li>Vim を使いこなせるようになる</li>
        <li>
          まだ鑑賞できていない名作・人気作を一気に鑑賞する。現在の候補は以下:
          <ul>
            <li>
              小説
              <ul>
                <li>1984年</li>
                <li>夏への扉</li>
              </ul>
            </li>

            <li>
              マンガ・アニメ
              <ul>
                <li>鬼滅の刃</li>
                <li>呪術廻戦</li>
                <li>ハイキュー!!</li>
                <li>ワンピース</li>
                <li>進撃の巨人</li>
                <li>コードギアス</li>
                <li>ソードアート・オンライン</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          推しガチプレゼン
          <br />
          推しのアイドル、小説等をガチプレゼンする
        </li>
        <li>貧乏ゆすりで発電する</li>
      </ul>
    </section>
  );
};
