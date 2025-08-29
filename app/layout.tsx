import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Poll App",
  description: "A simple polling application",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-surface text-foreground">
        <div className="bg-grid">
          <div className="bg-radial" />
        </div>
        <header className="bg-elevated border-b border-separator sticky top-0 z-20 backdrop-blur">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-bold">
              📊 Poll App
            </Link>
            <nav className="flex items-center gap-3">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/polls" className="nav-link">
                Polls
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/create" className="btn btn-primary">
                Create
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main className="relative z-10">{children}</main>
        <footer className="mt-12 py-6 text-center muted">
          Built with Next.js • © 2025
        </footer>
      </body>
    </html>
  );
}
