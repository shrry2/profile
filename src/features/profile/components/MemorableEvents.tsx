import type { FC } from "react";

const events = [
  {
    title: "夏休みの朝",
    description:
      "小学生の夏休み、早朝のラジオ体操から帰宅してリビングの座椅子に座り、扇風機にあたりながらZIP!を見つつ、うたた寝していたときの心地よさ",
  },
  {
    title: "深夜の京都サイクリング",
    description:
      "大学時代の友人と、夜中の2時に初夏の京都で出町柳から京都駅まで自転車で爆走したとき。さわやかな夜風と静寂に包まれた古都の街並みを駆け抜ける爽快感が忘れられない",
  },
  {
    title: "ハッピーシンセサイザの発見",
    description:
      "ニコニコ動画に投稿された直後の「ハッピーシンセサイザ」を発見して即座に友だちにメールで送ったところ「最高」という返信が返ってきてアツくなった",
  },
  {
    title: "初めての被リンク",
    description:
      "小学生の時、初めて開設した個人サイトを掲示板で宣伝し、同年代の管理人さんから相互リンクを貼ってもらえたとき。インターネット上で誰かとつながれた実感があってとても嬉しかった",
  },
  {
    title: "自作SNSへの感想",
    description:
      "中学生の時に自宅サーバーで運営していたSNS (MyNETS) を使ってくれた友人から「最近君のSNSが楽しくなってきた」と言ってもらったとき。コミュニティインフラを作るの楽しいと思った",
  },
];

export const MemorableEvents: FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>印象に残っている瞬間</h2>
      <ul>
        {events.map((event) => (
          <li key={event.title}>
            <strong>{event.title}</strong>
            <br />
            {event.description}
          </li>
        ))}
      </ul>
    </section>
  );
};
