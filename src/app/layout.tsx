import type { Metadata } from "next";
import type { ReactNode } from "react";

import "~/styles/globals.css";
import { Footer } from "~/components/Footer";

export const metadata: Metadata = {
  title: "Takaki Takeuchi - Web Engineer Portfolio",
  description:
    "竹内貴紀（たけうち たかき）のポートフォリオサイト。フリーランスWebエンジニアとしてのスキル、経歴、実績をご紹介します。",
  keywords:
    "Takaki Takeuchi, 竹内貴紀, Web Engineer, フリーランス, React, Next.js, TypeScript",
  authors: [{ name: "Takaki Takeuchi" }],
  creator: "Takaki Takeuchi",
  openGraph: {
    title: "Takaki Takeuchi - Web Engineer Portfolio",
    description: "フリーランスWebエンジニア 竹内貴紀のポートフォリオサイト",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Takaki Takeuchi - Web Engineer Portfolio",
    description: "フリーランスWebエンジニア 竹内貴紀のポートフォリオサイト",
    creator: "@shrry2",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1 w-full px-6 sm:px-8 py-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
