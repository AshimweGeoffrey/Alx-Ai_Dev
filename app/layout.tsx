import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Poll App",
  description: "A simple polling application",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              📊 Poll App
            </Link>
            <nav className="flex items-center gap-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/polls" className="text-gray-700 hover:text-blue-600">Polls</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link href="/create" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors">Create</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-12 py-6 text-center text-gray-600">
          Built with Next.js • © 2025
        </footer>
      </body>
    </html>
  );
}
