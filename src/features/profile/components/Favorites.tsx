import { FC } from 'react';

const foods = [
  {
    name: 'テリヤキバーガー',
    description: 'マクドナルドのテリヤキバーガーが好きです',
  },
  {
    name: 'コーラ',
    description: '知的飲料',
  },
  {
    name: 'コーヒー',
    description: '1日3杯くらいは飲みます。品種とかはよくわかりません',
  },
  {
    name: 'メロンソーダ',
    description: '昭和にタイムスリップできたら純喫茶でメロンソーダ頼みたい',
  },
  {
    name: 'めんま',
    description: 'ラーメンに入っていると嬉しい',
  },
  {
    name: '酢豚',
    description: 'あまずっぱくてなめらかでおいしい',
  },
  {
    name: '春巻き',
    description: 'サクサク食感からの味の濃い中身。至高',
  },
  {
    name: 'ザッハトルテ',
    description: 'チョコレートケーキの王様',
  },
  {
    name: 'シュークリーム',
    description: 'カスタードクリームとホイップクリームのダブルが嬉しい',
  },
  {
    name: 'シフォンケーキ',
    description: 'ふわふわでおいしい',
  },
  {
    name: 'フィナンシェ',
    description: 'バターの香りがたまらない',
  },
  {
    name: 'たらこパスタ',
    description: '大葉が乗っていたら最高ですね',
  },
  {
    name: 'サイゼリヤのイタリアンジェラート',
    description: '初めて食べたときあまりのおいしさに感激しました',
  },
  {
    name: 'みたらしだんご',
    description: 'あんなにおいしいのに3本150円くらいで買えて、意味が分からない',
  },
  {
    name: 'ピーナッツのランチパック',
    description:
      'そもそもピーナッツクリームが好きなんですよね。毎週2つは食べています',
  },
  {
    name: 'まぐろ',
    description: '寿司ネタで圧倒的に一番好きです',
  },
];

export const Favorites: FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>お気に入り</h2>
      <p>※ ここが本編です。おすすめがあったら教えてください</p>

      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li>
          <a href="#food-drink">食べ物・飲み物</a>
        </li>
        <li>
          <a href="#anime-manga">アニメ・マンガ</a>
        </li>
        <li>
          <a href="#novel">小説</a>
        </li>
        <li>
          <a href="#music">楽曲</a>
        </li>
        <li>
          <a href="#movie">映画</a>
        </li>
        <li>
          <a href="#poem">詩・俳句・川柳・短歌・歌詞</a>
        </li>
        <li>
          <a href="#naming">命名（会社名・ブランド等）</a>
        </li>
        <li>
          <a href="#slogan">キャッチコピー・スローガン</a>
        </li>
        <li>
          <a href="#commercial">コマーシャル</a>
        </li>
        <li>
          <a href="#quote">ことば・理念</a>
        </li>
        <li>
          <a href="#youtube">YouTube チャンネル</a>
        </li>
        <li>
          <a href="#character">キャラクター</a>
        </li>
        <li>
          <a href="#idea">アイデア</a>
        </li>
      </ul>

      <h3 id="food-drink">食べ物・飲み物</h3>
      <ul>
        {foods.map((food) => (
          <li key={food.name}>
            <strong>{food.name}</strong>
            <br />
            {food.description}
          </li>
        ))}
      </ul>

      <h3 id="anime-manga">アニメ・マンガ</h3>
      <ul>
        <li>
          <strong>五等分の花嫁</strong>
          <br />
          2020年春、コロナ禍リモートワークで孤独になり参っていたところNetflixで発見。
          <br />
          ちょうど2期のテレビ放映中で毎週最新話を見ることだけを生きがいに生活していました。
          <br />
          とにかく登場するキャラクター（主に五つ子）が可愛く、パラレルワールドのどこかで彼女たちがいると考えるだけで頑張って生きようと思えます。
        </li>

        <li>
          <strong>サマーウォーズ</strong>
          <br />
          アニメ映画。2009年公開だが、いつ観ても色あせない。毎年夏になると観たくなる。
          <br />
          長野県上田市行きたい。
        </li>

        <li>
          <strong>冴えない彼女の育て方</strong>
          <br />
          五等分の花嫁のアニメ2期が放映終了してしまい生きがいを失っていたところ、Netflixで発見。
          <br />
          メインヒロインの加藤恵さんがとにかく可愛く、パラレルワールドのどこかで（以下略）
        </li>

        <li>
          <strong>Re:ゼロから始める異世界生活</strong>
          <br />
          リゼロは人生。
          <br />
          好きなキャラは テレシア・ヴァン・アストレア です。
        </li>

        <li>
          <strong>月がきれい</strong>
          <br />
          比較的マイナーなアニメですが、私は大好きです。
          12話1シーズンで完結するので、結構サクッと観られます。
          <br />
          中学生のピュアな恋愛のストーリーですが、ギリ中学時代の記憶がある時に観たので割と共感してしまい、告白のシーンで「あ”あ”あ”あ”ぁ〜」（尊死）みたいなことになりました。
        </li>

        <li>
          <strong>四月は君の嘘</strong>
          <br />
          ごめんなさい、正直に言うと中盤まではあまりハマっていなかったです。ただ終盤、特に最終話では私の好物「時を超える感動的伏線回収」があり、心をやられました。
          <br />
          最終話を初めて観たときの衝撃は忘れられません…
          仕事がある日の朝だったのですが、その日一日何も手につきませんでした()
        </li>

        <li>
          <strong>天気の子</strong>
          <br />
          新海誠監督作品では『君の名は。』の方が好きだという方が多いと思いますが、私は個人的にこの作品が一番好きです。
          <br />
          ストレスがたまったときに Oculus 映画館で観るとすっきりします。
        </li>

        <li>
          <strong>時をかける少女（細田守監督）</strong>
          <br />
          タイムリープものの作品が好きなのです…ラストシーンは本当に切ない。音楽もいい!
        </li>

        <li>
          <strong>シュタインズ・ゲート</strong>
          <br />
          2021年のゴールデンウィークに当時のバイト先の上司のすすめを受け、一気に全話（約50話）視聴。結構重たい話で続きがひたすらに気になるので、時間に余裕があるときに視聴をおすすめします。
          <br />
          タイムリープもので、2期で1期の伏線回収が行われたりするので鳥肌がとまりません…!
        </li>

        <li>
          <strong>かぐや様は告らせたい</strong>
          <br />
          かぐや様かわいい。特にシリアスな問題は起きず、命がけの戦いもなく、安心して観ていられます。心のオアシス。
        </li>

        <li>
          <strong>ヤンキー君とメガネちゃん</strong>
          <br />
          なんでアニメ化されなかったのかマジでわからない。たまにシリアスですが随所にとてもセンスの良いギャグがちりばめられていて楽しい。
          <br />
          中学生の頃受験勉強編を読んで感化され、勉強をがんばったところかなり成績が上がりました（実話）
        </li>

        <li>
          <strong>トニカクカワイイ</strong>
          <br />
          ヒロインがとにかくかわいいラブコメかと思いきや、中盤から彼女のとんでもない秘密が明かされ、他の作品とは比較にならないほどスケールの大きいお話になっていきます。続きが楽しみです。
        </li>
      </ul>

      <h3 id="novel">小説</h3>
      <ul>
        <li>
          <strong>パスワードシリーズ</strong>
          <br />
          小学生当時むさぼるように読んでいた。その昔 HTML
          手打ちでファンサイトみたいなのを作っていました。
          <br />
          実はそれが私のインターネットの入り口だったりします。
        </li>

        <li>
          <strong>幼年期の終わり</strong>
          <br />
          宇宙の大きさに比べたら人類なんてちっぽけで、いまだに人類同士争ってるのってなんだかなあという気持ちになります。
        </li>

        <li>
          <strong>かがみの孤城</strong>
          <br />
          もうほんとうにめちゃくちゃ感動した。オオカミさまの真意が明らかになるシーンで号泣
          <br />
          将来子どもができたら早いうちに読んでもらいたい
        </li>

        <li>
          <strong>夜のピクニック</strong>
          <br />
          特に大きな事件が起きたりするわけではないのですが、心にジーンとくるものがあります。重い話ではないので何度でも読めます。
        </li>

        <li>
          <strong>アルジャーノンに花束を</strong>
          <br />
          とてもつらいお話なのでもう一度読む気にならない（つまり1回しか読んでいない）んだけど、たぶん一生忘れることができない。
          一生に一度は読んでほしい。
        </li>

        <li>
          <strong>汝、星のごとく</strong>
          <br />
          読むとやさしくなれます
        </li>
      </ul>

      <h3 id="music">楽曲</h3>
      <ul>
        <li>
          <strong>初音ミク「メルト」</strong>
          <br />
          原点にして頂点
        </li>

        <li>
          <strong>ロンドンデリーの歌</strong>
          <br />
          人生のエンディングで流したい
        </li>

        <li>
          <strong>SKE48「SURFな最近」</strong>
          <br />
          まずメロディが好みすぎる。歌詞もいい
          <br />
          サビの「待っている 来ないかも 来るのかも
          わからない」という部分が特に好きです
        </li>

        <li>
          <strong>浜崎あゆみ「BLUE BIRD」</strong>
          <br />
          メロディが超好き。最後の歌詞が「こらえきれずに僕も泣いた」というのが余韻を残す感じで好きです
        </li>

        <li>
          <strong>松任谷由実「VOYAGER ~ 日付のない墓標」</strong>
          <br />
          「シン・エヴァンゲリオン」のめっちゃ感動的なシーンで流れてきて、涙がとまりませんでした😭
          <br />
          というか、こんなに良い曲をずっと知らずにいたことを悔しいと思いました
        </li>

        <li>
          <strong>BUMP OF CHICKEN「真っ赤な空を見ただろうか」</strong>
          <br />
          バンプの曲は名曲ばかりですが、中でもこの曲が一番好きです
          <br />
          「ただ一度の微笑みが あんなに上手に喋るとは」の余韻が好きです
        </li>

        <li>
          <strong>フジファブリック「若者のすべて」</strong>
          <br />
          若者のすべてですわ...
        </li>

        <li>
          <strong>フジファブリック「茜色の夕日」</strong>
          <br />
          イントロから名曲感がすごい。夕焼け空の下を歩きながら聴きたい
        </li>

        <li>
          <strong>ももいろクローバーZ「泣いてもいいんだよ」</strong>
          <br />
          なんといっても歌詞がやさしくて心に響く
          <br />
          中島みゆきさん作詞作曲だそうです。さすがです
        </li>

        <li>
          <strong>Twenty One Pilots「Lovely」</strong>
          <br />
          Right-on の CM で流れていてハマりました。同じバンドの「Guns for
          Hands」も好きです!
        </li>

        <li>
          <strong>福山雅治「最愛」</strong>
          <br />
          映画「容疑者Xの献身」の主題歌。主人公の気持ちを歌っている感じで、映画のラストシーンは涙なしに観られません
        </li>

        <li>
          <strong>ビートルズ「Lady Madonna」</strong>
          <br />
          ピアノがかっこよすぎる
        </li>

        <li>
          <strong>ハローキティー</strong>
        </li>

        <li>
          <strong>ボブ・ディラン「Blowin&apos; in the Wind」</strong>
          <br />
          The answer, my friend, is blowin&apos; in the wind
        </li>
      </ul>

      <h3 id="movie">映画</h3>
      <ul>
        <li>
          <strong>シン・エヴァンゲリオン劇場版:||</strong>
          <br />
          エヴァンゲリオン新劇場版:Q
          の公開から待ち続けること8年。公開2日目に観に行ったときはあまりの感動にどうやって帰宅したか覚えていません。
          <br />
          5回劇場に観に行きました🥹
        </li>
      </ul>

      <h3 id="poem">詩・俳句・川柳・短歌・歌詞</h3>
      <ul>
        <li>
          <strong>島崎藤村『初恋』</strong>
          <br />
          あまりにも美しすぎる。たまに意味もなくメモ帳にタイピングしたりします
        </li>

        <li>
          <strong>
            初谷むい「最初からお手もお座りもできたけどあなたに教えてもらいたかった」
          </strong>
          <br />
          「全自動わんこ」についての短歌です。詩集『花は泡、そこにいたって会いたいよ』に収録されています
          <br />
          「全自動わんこ」について知りたい方はぜひ読んでみてください
        </li>

        <li>
          <strong>
            見てきたものや聞いたこといままで覚えた全部 でたらめだったら面白い
          </strong>
          <br />
          THE BLUE
          HEARTS「情熱の薔薇」の一節。基本的に僕は反骨精神が強いのでシンパシーを感じますw
        </li>
      </ul>

      <h3 id="naming">命名（会社名・ブランド等）</h3>
      <ul>
        <li>
          <strong>三省堂</strong>
          <br />
          『論語』の一節「吾日三省吾身」に由来するらしい。痺れるくらいかっこいい
        </li>

        <li>
          <strong>サンガリア</strong>
          <br />
          覚えやすくて爽やかな印象がある。実は「国破れて山河あり」の「山河あり」をもじっているというのが最高
        </li>

        <li>
          <strong>フリュー</strong>
          <br />
          「風流」に由来するらしい。しかも本社は京都。かっこいいーーー
        </li>

        <li>
          <strong>Starbucks</strong>
          <br />
          メルヴィルの小説『白鯨』の登場人物の名前に由来するらしい
          <br />
          スターバックスがスターバックスという名前でなかったらこんなに有名なブランドになってないと思う
        </li>

        <li>
          <strong>極東魔術昼寝結社の夏</strong>
          <br />
          特に「の夏」が意味不明でとてもいい
        </li>
      </ul>

      <h3 id="slogan">キャッチコピー・スローガン</h3>
      <ul>
        <li>
          <strong>まだ、ここにない、出会い。</strong>
          <br />
          リクルートのブランドメッセージ
          <br />
          何を食べたらこんなにかっこいいキャッチコピーが思いつくんだろうか
        </li>

        <li>
          <strong>手のひらに、明日をのせて。</strong>
          <br />
          ドコモのブランドスローガン（2008〜2015）
          <br />
          最先端テクノロジーを「明日」を表現するのがかっこいい
        </li>

        <li>
          <strong>いつか、あたりまえになることを。</strong>
          <br />
          ドコモのブランドスローガン（2015〜2021）
          <br />
          なんかこう、余韻を残す感じがいい
        </li>
      </ul>

      <h3 id="commercial">コマーシャル</h3>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=dMBW1G4U54g" target="_blank">
            <strong>Apple: MacBook Air 1</strong>
          </a>
          <br />
          一言も喋らないのがかっこ良すぎる。しびれる
        </li>

        <li>
          <a href="https://www.youtube.com/watch?v=8c30t3SNOz0" target="_blank">
            <strong>Apple: MacBook Air 2</strong>
          </a>
          <br />
          またしても MacBook Air です (笑) 短い時間なのにすごい重厚感を感じます
        </li>

        <li>
          <a href="https://www.youtube.com/watch?v=rcw5ILVeJec" target="_blank">
            <strong>東京モード学園: 「承認欲求」篇</strong>
          </a>
          <br />
          BGM がキャッチーで、何度も観たくなる
        </li>

        <li>
          <a href="https://www.youtube.com/watch?v=AOdJFSL54fg" target="_blank">
            <strong>Netflix: アニメで言葉があふれだす。</strong>
          </a>
          <br />
          めちゃくちゃハイクオリティな MAD 動画といった感じ
          <br />
          ラストの音楽とロゴアニメーションがマッチする場面がかっこよすぎる
        </li>

        <li>
          <a href="https://www.youtube.com/watch?v=MGt25mv4-2Q" target="_blank">
            <strong>Google Chrome: Hatsune Miku (初音ミク)</strong>
          </a>
          <br />
          インターネットも Google も最高だった頃ですな
          <br />
          やっぱり私は、一言もしゃべらずにリズムに合わせてロゴをアニメーションさせる映像が好きみたいです
        </li>

        <li>
          <a href="https://www.youtube.com/watch?v=W3PxZR3Nbs8" target="_blank">
            <strong>FRISK: アイデアが生まれる場所</strong>
          </a>
          <br />
          ブレーンストーミングをするときに紹介します (笑)
          <br />
          ただ、個人的には他人との会話の中でアイデアが生まれることが多いと思います
        </li>
      </ul>

      <h3 id="quote">ことば・理念</h3>
      <ul>
        <li>
          <strong>In a world where you can be anything, be kind.</strong>
          <br />
          何にでもなれるこの世界で、やさしくあれ
        </li>

        <li>
          <strong>
            Even if I knew that tomorrow the world would go to pieces, I would
            still plant my apple tree.
          </strong>
          <br />
          たとえ明日世界が崩壊するとしても、それでも、私はリンゴの木を植えるだろう
          <br />
          『幼年期の終わり』を読んだあとだと響きます。人生ってなんなんでしょうね
        </li>

        <li>
          <strong>たとえ火の中水の底</strong>
          <br />
          覚悟がきまっていて、かっこいい
        </li>

        <li>
          <strong>We wanted flying cars, instead we got 140 characters.</strong>
          <br />
          僕たちが望んだのは空飛ぶクルマだったのに、代わりに手にしたのは140文字だった
          <br />
          ピーター・ティールの本『ゼロ・トゥ・ワン』の中で引用されていた言葉です。同書を読むとその意味がよくわかって切ない気持ちになります
        </li>

        <li>
          <strong>どうしても親切が第一</strong>
          <br />
          2023年の年の瀬に訪れたTOTOミュージアムの展示で見つけました。初代社長から二代目社長へに送られた書簡の中に書かれていた言葉です。
          <br />
          胸アツの文章が続きますので、いつかぜひミュージアムで全文を読んでみてください。
        </li>

        <li>
          <strong>Focus on the user and all else will follow.</strong>
          <br />
          ユーザーに焦点を絞れば、他のものはみな後からついてくる。
          <br />
          Google
          のモットーのひとつ。結局のところ、利益よりもユーザーのことを考えている企業の方が長く生き残る示唆を感じますね。
          <br />
          <strong>Don&apos;t be evil</strong> も好きです。
        </li>

        <li>
          <a
            href="https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/shiryo/dl-constitution.htm"
            target="_blank"
          >
            <strong>日本国憲法 前文</strong>
          </a>
          <br />
          長いのでここで引用するのはやめますが、特に「平和を愛する諸国民の公正と信義に信頼して」という部分と「われらは、いづれの国家も、自国のことのみに専念して他国を無視してはならないのであつて」の部分が好きです。
          <br />
          『あたらしい憲法のはなし』にある「世の中に、正しいことぐらい強いものはありません。」という言葉も好きです。
        </li>

        <li>
          <a
            href="https://www.jla.or.jp/library/gudeline/tabid/232/Default.aspx"
            target="_blank"
          >
            <strong>図書館の自由に関する宣言</strong>
          </a>
          <br />
          大学の図書館は借りた本を返却すると貸出記録が消えるシステムだったのですが、この宣言を根拠としていたようで、徹底してるなあと思いました。
        </li>

        <li>
          <strong>学問の自由はこれを、保障する</strong>
          <br />
          言っていることもかっこいいですし、音韻もいいですね
        </li>

        <li>
          <strong>yes I said yes I will Yes</strong>
          <br />
          ジェイムズ・ジョイス『ユリシーズ』の最後の一行
          <br />
          最後の段落だけしか読んだことないのですが、ものすごい文章です。ぜひ読んでみてください!!
          <br />
          何を食べたらこんなにすごい文章を書くことができるんだろうと思います
        </li>
      </ul>

      <h3 id="youtube">YouTube チャンネル</h3>
      <ul>
        <li>
          <a href="https://www.youtube.com/@Kojiseto" target="_blank">
            <strong>瀬戸弘司 / Koji Seto</strong>
          </a>
          <br />
          10年以上前から大ファンです。何年経っても圧倒的ナンバーワン。
          <a href="https://www.youtube.com/watch?v=yT1QZW-wMmY" target="_blank">
            凄曲十分作
          </a>
          がマジで好きです。
        </li>

        <li>
          <a href="https://www.youtube.com/@Ciaela" target="_blank">
            <strong>Micaela ミカエラ</strong>
          </a>
          <br />
          こちらも10年以上前から大ファンです。一時期 RKB
          で放送されていた「オケハザマってなんですか?」にも出演されていて、毎週楽しみに観ていました
        </li>

        <li>
          <a href="https://www.youtube.com/@omocorochannel" target="_blank">
            <strong>オモコロチャンネル</strong>
          </a>
          <br />
          人生の指針となるコンテンツがたくさん!
        </li>
      </ul>

      <h3 id="character">キャラクター</h3>
      <ul>
        <li>
          <strong>シナモン (シナモロール)</strong>
          <br />
          性格が良いんですよ。シナモンはね。マジでいい子なんです
        </li>

        <li>
          <strong>こぎみゅん</strong>
          <br />
          小麦粉の妖精なのに、将来の夢が「おにぎりになること」なんですよ。かわいいですよね
        </li>
      </ul>

      <h3 id="idea">アイデア</h3>
      <ul>
        <li>
          <strong>人生ね、2回あります</strong>
          <br />
          <a
            href="https://www.youtube.com/watch?v=AHvcdd8vSpo&t=583s"
            target="_blank"
          >
            オモコロチャンネル「【お悩み相談】視聴者の悩みを解決したい5人が集まった！！集まったぞ！！解決するのか！？どうだ！？」
          </a>
          より
          <br />
          人生確実に2回あるんで、気にせず生きましょう
        </li>

        <li>
          <strong>ハイパーピンボール理論 ド歩く編</strong>
          <br />
          <a
            href="https://www.youtube.com/watch?v=8QBLeEi-kv4&t=663s"
            target="_blank"
          >
            オモコロチャンネル「百戦錬磨のバーテンダーがあなたのお悩みに答えます【マジ人生相談】」
          </a>
          より
          <br />
          この記事を作成するきっかけとなった理論です
        </li>

        <li>
          <strong>信義誠実の原則</strong>
          <br />
          起業するときに行政書士さんに教えてもらって「かっけーーー！」ってなりました。法律は意外と人情でできているんだそうです
        </li>
      </ul>
    </section>
  );
};
