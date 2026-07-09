import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이리저리 해보는 중",
  description: "AI, 정보, 게임까지 — 이것저것 해보며 남기는 기록",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
