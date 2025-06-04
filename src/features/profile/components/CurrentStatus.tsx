import type { FC } from "react";

export const CurrentStatus: FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>いまやっていること</h2>
      <ul>
        <li>スタートアップ企業のリードエンジニア</li>
        <li>
          個人開発
          <ul>
            <li>広告配信プラットフォーム</li>
            <li>星占い</li>
          </ul>
        </li>
        <li>
          システムの受託開発・技術サポート (個人事業)
          <ul>
            <li>CtoC マーケットプレイス</li>
            <li>医療系マッチングサービス</li>
          </ul>
        </li>
        <li>
          資格の勉強
          <ul>
            <li>宅地建物取引士</li>
            <li>日商簿記2級</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
