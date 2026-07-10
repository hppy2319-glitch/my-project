import type { Metadata } from "next";
import { Gowun_Batang, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

const display = Gowun_Batang({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

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
    <html
      lang="ko"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--page-bg)] text-[var(--page-text)]">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
