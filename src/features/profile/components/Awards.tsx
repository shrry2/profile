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
        <li>TOEIC 公開テスト 910点 (2018年11月)</li>
        <li>応用情報技術者 (2023年4月)</li>
      </ul>
    </section>
  );
};
