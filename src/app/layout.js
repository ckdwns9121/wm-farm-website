import "./globals.css";

export const metadata = {
  title: "WM Farm",
  description: "안녕하세요. WM Farm입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>
          <a href="/">WEB</a>
        </h1>
        <ol>
          <li>
            <a href="/read/1">about</a>
            <a href="/read/2">product</a>
            <a href="/read/3">contact</a>
          </li>
        </ol>
        {children}
        <ul>
          <li>
            <a href="/create">create</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/update">update</a>
          </li>
        </ul>
      </body>
    </html>
  );
}
