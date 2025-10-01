import type { FC } from "react";

export const LongList: FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>願い</h2>
      <ul>
        <li>フェリーで北海道に行ってみたい</li>
        <li>透けてるイカ刺し食べてみたい</li>
        <li>Vim を使いこなせるようになりたい</li>
        <li>推しのガチプレゼン大会をやりたい</li>
        <li>ブロッコリーを完璧なゆで加減で食べたい</li>
        <li>海辺の古民家改装したい</li>
        <li>改装した古民家でカフェをやりたい</li>
        <li>ありえないくらい僻地で2年くらい暮らしてみたい</li>
        <li>でかいふわふわのものを抱きしめたい</li>
        <li>
          まだ鑑賞できていない名作・人気作を一気に鑑賞したい
          <details className="border border-[--color-washi-border] bg-[--color-washi] overflow-hidden mt-2">
            <summary className="cursor-pointer font-medium bg-[#ebe7dc] p-4 hover:bg-[#e0dbd0] transition-colors text-[--color-sumi]">
              たとえば...
            </summary>
            <div className="p-4 bg-[--color-washi]">
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
            </div>
          </details>
        </li>
      </ul>
    </section>
  );
};
