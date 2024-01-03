import "./globals.css";
import { Noto_Sans_KR } from "next/font/google"; // @next/font will be removed in next14

const notoSansKr = Noto_Sans_KR({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "더블유엠팜 식물재배기",
  description: "신선한 도시, 즐거운 농장",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/icons/favicon.ico" />
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
