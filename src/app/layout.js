import './globals.css';

export const metadata = {
  title: 'WM Farm',
  description: '안녕하세요. WM Farm입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
