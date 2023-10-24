import Link from "next/link";
import "./globals.css";
import LoginBtn from "./LoginBtn";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import LogoutBtn from "./LogoutBtn";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <body>
        <div className="navbar">
          <Link href="/" className="logo">
            Appleforum
          </Link>
          <Link href="/list">List</Link>
          <Link href="/write">Write</Link>

          {!session ? (
            <LoginBtn />
          ) : (
            <>
              <img style={{ width: "30px" }} src={session.user.image} alt="" />
              <LogoutBtn />
            </>
          )}
        </div>
        {children}
      </body>
    </html>
  );
}