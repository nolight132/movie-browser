import './globals.css';
import Link from 'next/link';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Movie Browser</title>
      </head>
      <body>
        <nav className="p-4">
          <ul className="flex space-x-6 justify-center text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/movies">Movies</Link>
            </li>
            <li>
              <Link href="/tv-show">TV Shows</Link>
            </li>
            <li>
              <Link href="/search">Search</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
