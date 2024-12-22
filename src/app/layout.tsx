import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/components/theme-provider';
import Image from 'next/image';
import Navbar from './components/Navbar';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} font-geist-sans text-sm antialiased p-0 m-0`}
      suppressHydrationWarning
    >
      <head>
        <title>Movie Browser</title>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-10">{children}</main>
          <footer className="p-4 mt-10 text-center pb-2">
            <div className="flex flex-col gap-2 lg:flex-row justify-center items-center">
              <Image
                src="tmdb-logo.svg"
                alt="TMDb Logo"
                width={64}
                height={8}
              />
              <p>
                This product uses the TMDB API but is not endorsed or certified
                by TMDB
              </p>
            </div>
          </footer>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
