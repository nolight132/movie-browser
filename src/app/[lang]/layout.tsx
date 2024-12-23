import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/components/theme-provider';
import Image from 'next/image';
import Navbar from './components/Navbar';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { i18n, type Locale } from '../../i18n-config';
import { getDictionary } from '@/get-dictionary';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { children } = props;
  return (
    <html
      lang={params.lang}
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
          <Navbar dictionary={(await getDictionary(params.lang)).nav} />
          <main className="pt-10">{children}</main>
          <footer className="p-4 mt-10 text-center pb-2">
            <div className="flex flex-col gap-2 lg:flex-row justify-center items-center">
              <Image
                src="/static/tmdb-logo.svg"
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
