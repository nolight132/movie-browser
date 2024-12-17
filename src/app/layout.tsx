import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
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
        <footer className="text-white p-4 mt-10 text-center">
          <div className="flex justify-center items-center space-x-2">
            <Image src="tmdb-logo.svg" alt="TMDb Logo" width={64} height={8} />
            <p>
              This product uses the TMDB API but is not endorsed or certified by
              TMDB
            </p>
          </div>
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}
