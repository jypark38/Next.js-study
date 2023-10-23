import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="navbar">
          <Link href="/">홈</Link>
          <Link href="/list">목록</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
