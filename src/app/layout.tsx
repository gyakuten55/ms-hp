import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "MS-Wip | 清掃管理サービス | 東京・埼玉・千葉・神奈川",
  description: "MS-Wipは清掃管理全般を幅広く対応する専門企業です。マンション・オフィス・店舗・駐車場など多様な物件に日常清掃・定期清掃・巡回清掃・臨時清掃サービスを提供しています。",
  keywords: "清掃, 管理, マンション清掃, オフィス清掃, 店舗清掃, 駐車場清掃, MS-Wip",
  authors: [{ name: "MS-Wip" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJP.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
