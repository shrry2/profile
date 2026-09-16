import type { FC } from "react";

// タグクラウド風に、語句ごとに文字の大きさを変えて並べる。
// weight は文字の大きさの段階 (1〜5)。サーバーとクライアントで表示がずれないよう乱数は使わない
const words = [
  { text: "SCSI", weight: 5 },
  { text: "前略プロフィール", weight: 3 },
  { text: "魔法のiらんど", weight: 4 },
  { text: "アメーバピグ", weight: 2 },
  { text: "FireWire", weight: 3 },
  { text: "IEEE 1394", weight: 1 },
  { text: "プラグアンドプレイ", weight: 2 },
  { text: "パラレルATA", weight: 4 },
  { text: "KENT WEB", weight: 3 },
  { text: "ゲストブック", weight: 2 },
  { text: ".htaccess", weight: 4 },
  { text: "FFFTP", weight: 2 },
  { text: "CGI", weight: 5 },
  { text: "web拍手", weight: 1 },
  { text: "ニコニコ技術部", weight: 3 },
  { text: "HTML4", weight: 1 },
];

const fontSizes = ["0.85rem", "1rem", "1.25rem", "1.55rem", "1.9rem"];

// サイトの配色 (墨・アクセント) の中で濃淡を変える
const colors = [
  "text-[var(--color-sumi)]",
  "text-[var(--color-accent)]",
  "text-[var(--color-sumi-light)]",
  "text-[var(--color-accent-hover)]",
];

export const Nostalgic: FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>ノスタルジック</h2>
      <p>
        懐かしい言葉、好きな言葉を並べています。これらについて語り合える方を探しています!
      </p>

      <ul className="not-prose list-none flex flex-wrap justify-center items-baseline gap-x-5 gap-y-3 m-0 px-6 py-8 bg-[var(--color-card)] border border-[var(--color-washi-border)] rounded-xl leading-tight">
        {words.map((word, index) => (
          <li
            key={word.text}
            className={`m-0 p-0 ${colors[index % colors.length]}`}
            style={{
              fontSize: fontSizes[word.weight - 1],
              fontWeight: word.weight >= 4 ? 600 : 400,
            }}
          >
            {word.text}
          </li>
        ))}
      </ul>
    </section>
  );
};
