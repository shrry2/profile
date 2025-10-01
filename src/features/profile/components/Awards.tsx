import type { FC } from "react";

export const Awards: FC = () => {
  return (
    <section>
      <h2>資格・受賞歴</h2>
      <ul>
        <li>基本情報技術者 (2014年9月)</li>
        <li>
          経済産業省商務情報政策局長賞・豆蔵ホールディングス賞 (2016年10月{" "}
          <a
            href="https://u22procon.com/2016/report/"
            target="_blank"
            rel="noopener noreferrer"
          >
            U-22プログラミング・コンテスト2016
          </a>
          にて）
        </li>
        <li>応用情報技術者 (2023年4月)</li>
        <li>TOEIC 公開テスト 970点 (2024年9月)</li>
        <li>日商簿記3級 (2025年1月)</li>
        <li>
          情報処理安全確保支援士 (2025年7月)
          <ul>
            <li>登録番号: 第031496号</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
