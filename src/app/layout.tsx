'use client';

import './globals.css';
import Image from 'next/image';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

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
        <Navbar />
        <main className="pt-10">{children}</main>
        <footer className="text-white p-4 mt-10 text-center pb-2">
          <div className="flex flex-col gap-2 lg:flex-row justify-center items-center">
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
