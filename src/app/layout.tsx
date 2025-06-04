import type { Metadata } from "next";
import type { ReactNode } from "react";

import "~/styles/globals.css";
import { Footer } from "~/components/Footer";

export const metadata: Metadata = {
  title: "Takaki Takeuchi",
  description: "My profile",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
