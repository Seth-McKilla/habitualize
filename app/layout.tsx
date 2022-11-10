import "./globals.css";
import Link from "next/link";
import { Inter } from "@next/font/google";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <nav className="sticky top-0 z-50 flex items-center justify-between p-4 text-white bg-violet-600">
          <Link href="/" className="text-2xl font-bold">
            Habitualize
          </Link>
          <Link href="/login">
            <button className="p-2 text-white border-2 rounded bg-violet-600">
              Login
            </button>
          </Link>
        </nav>

        <div className="container relative max-w-4xl px-4 py-8 mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
