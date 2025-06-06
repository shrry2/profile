import type { FC } from "react";

export const History: FC = () => {
  return (
    <section>
      <h2>略歴</h2>
      <ul>
        <li>2000年1月: 香川県坂出市生まれ</li>
        <li>2018年4月: 長崎大学多文化社会学部入学</li>
        <li>2021年1月: 個人事業主として開業（屋号: ひつじインクリメント）</li>
        <li>2022年3月: 長崎大学多文化社会学部卒業</li>
        <li>2022年4月: Web 系事業会社に入社</li>
        <li>2023年7月: フリーランスエンジニアに戻る</li>
        <li>2025年3月: 友人が起業したスタートアップに参画</li>
      </ul>
      <details className="border border-gray-300 bg-gray-100 rounded-lg overflow-hidden">
        <summary className="cursor-pointer font-medium bg-gray-50 p-4 hover:bg-gray-200 transition-colors">
          昔話 (クリックして開閉)
        </summary>
        <div className="p-4">
          <p>
            なぜ比較的若い私が「個人ホームページ」の時代を知っているのか、なぜWeb開発を仕事にしたのか。すこし語らせてください。
          </p>

          <h3>2006~ キズネ倶楽部との出会い & 個人ホームページ開設</h3>
          <p>
            私が小学生1年生の頃（2006年頃）インターネットの大海原には
            <strong>「キズネ倶楽部」</strong>
            という子ども向けネット掲示板が存在しました。
          </p>
          <p>
            たまたまネットサーフィン中にそれを発見した私は即座に登録&どハマり。そこにいた愉快な仲間たちはみんなパソコンに強く、HTMLを手打ちして個人ホームページを作成してプロフィール代わりにしていたのです。
            当然そのような環境に強く影響をうけた私はすぐさま自分のホームページを作り、謎の小説などを執筆しました（黒歴史）
            とほほのWWW入門 や HTMLクイックリファレンス
            などを参考にさせていただいて、たしか FC2
            の無料サーバーを使っていました。
          </p>
          <p>
            それを掲示板で紹介して、仲間たちと相互リンクを張ったり、小説の感想を言い合ったり、ゲストブックを書いたり…
            今でも思い出すと涙が出そうになるほどキラキラした思い出です。
          </p>

          <h3> 2008~ プログラミングを勉強してみる</h3>
          <p>
            その数年後、テレビで iPhone 3G
            が国内で発売されるというニュースを目にした私は
            <strong>「オイオイオイこれは世界変わるぞ!!!」</strong>
            と大興奮するとともに
            モバイルアプリ開発で一攫千金をしてみたくなりました。
          </p>
          <p>
            なんとか親に頼み込んで家族共用の iMac を購入してもらい Objective-C
            を勉強…をする前に
            <strong>『苦しんで覚えるC言語』</strong>
            でC言語を勉強しました。一番印象的だったのは、for
            文の概念（変数初期化、終了条件、インクリメント）です。なお2回ほど挫折しています。
          </p>
          <p>
            結局親に Apple
            の開発者登録（当時18歳未満はできなかった。今も?）を許可してもらえず、開発した
            iPhone アプリはシミュレーターから出せませんでした。
            とはいえ、ここでプログラミングの基礎概念を学べたことは今でも大変役立っています。
          </p>

          <h3>2010~ ニコニコ動画と電子工作にハマる</h3>
          <p>
            小学校高学年くらい（2010年頃）になると当時大きな盛り上がりを見せていたニコニコ動画のカテゴリのひとつ
            <strong>「ニコニコ技術部」</strong>
            に触発されて電子工作、とりわけマイコンにハマります。
          </p>
          <p>
            おもに AVR
            というマイコンを使って7セグメントLEDをピカピカ光らせたりして楽しんでいました。AVR
            といえば今は Arduino が有名ですが、当時はまだ ATTINY2313
            とかを使うのが主流でした。お金もなかったので Arduino
            は高級品という感覚がいまだにあります(笑)
          </p>
          <p>
            秋葉原や大阪日本橋を訪れて秋月電子通商やマルツなどを覗くのはずっと大好きです。東京や大阪を訪れて、行きたいところといえば電気街くらいしか思いつきません…笑
          </p>

          <h3>2015~ Webサービス開発にハマる</h3>
          <p>
            高校に上がり1年生の夏休みに <strong>Life is Tech!</strong>{" "}
            という大学で行われるITキャンプに参加して、Web 開発に目覚めます。
          </p>
          <p>
            それ以前にも趣味でいろんなサイトを細々と開発していたのですが、ここで出会った友人に大規模開発のアイデアを持ちかけられ一念発起。MySQL
            や PHP や jQuery といった2010年代の黄金技術スタックでいろいろ Web
            サービスを作っては閉鎖してを繰り返しました。
          </p>
          <p>
            作ったサービスを公開するために、本当はクラウドを使いたいところでしたが当然お金がないので
            VPS を何台か借りて複数のアプリを同居させるなど頑張っていました。
          </p>

          <h3>2020~ Web 開発で生計を立てる</h3>

          <p>
            大学3年生の中盤くらいから就活を通じて知り合った方々からお仕事をいただいてフリーランスエンジニアを名乗ってみたり、
            友人とベンチャー企業のようなものをやってみたりしました。
          </p>
          <p>
            その後大学を卒業し1年と少し、学生時代からお世話になっていた会社で正社員として働いた後、再度フリーランスに戻っています。
            <br />
            今は主に数社のWebサービス　(ECサイトが主)　の開発を請け負う傍ら、細々と個人開発をしています。早いところ自社サービスだけで生計を立てたいなあと思っています。
          </p>
        </div>
      </details>
    </section>
  );
};
