import './globals.css';
import { Noto_Sans_KR } from 'next/font/google'; // @next/font will be removed in next14

const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'WM Farm',
  description: '안녕하세요. WM Farm입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
