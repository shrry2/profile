import { FC } from 'react';

export const LongList: FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>願い</h2>
      <ul>
        <li>フェリーで北海道に行ってみたい</li>
        <li>透けてるイカ刺し食べてみたい</li>
        <li>名古屋で味噌カツ食べてみたい</li>
        <li>Vim を使いこなせるようになりたい</li>
        <li>推しのガチプレゼン大会をやりたい</li>
        <li>髪の毛ピンクに染めてみたい</li>
        <li>ブロッコリーを完璧なゆで加減で食べたい</li>
        <li>貧乏ゆすりで発電したい</li>
        <li>ずっと飲んでる薬を徐々に減らしたい</li>
        <li>月イチくらいで気の抜けた KPT 大会をやりたい</li>
        <li>海辺の古民家改装したい</li>
        <li>改装した古民家でカフェをやりたい</li>
        <li>クリエイティブな仕事を支える仕事をしたい</li>
        <li>ありえないくらい僻地で2年くらい暮らしてみたい</li>
        <li>でかいふわふわのものを抱きしめたい</li>
        <li>結局人生とは何だったのかを知りたい</li>
        <li>
          まだ鑑賞できていない名作・人気作を一気に鑑賞したい
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title">たとえば...</div>
            <div className="collapse-content">
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
          </div>
        </li>
      </ul>
    </section>
  );
};
