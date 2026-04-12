import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Layout from '@/components/Layout';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const viewport: Viewport = {
  themeColor: '#050508',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://thom-aster.com'),
  title: {
    default: 'Thom Aster — Investigative Journalist | Systems Audit',
    template: '%s — Thom Aster',
  },
  description: 'Thom Aster covers surveillance, geopolitics, intelligence, and institutional accountability. Independent investigative journalism with a focus on hidden power structures.',
  keywords: ['investigative journalism', 'surveillance', 'geopolitics', 'intelligence', 'institutional accountability', 'Thom Aster'],
  authors: [{ name: 'Thom Aster' }],
  creator: 'Thom Aster',
  publisher: 'Thom Aster',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://thom-aster.com',
    siteName: 'Thom Aster',
    title: 'Thom Aster — Investigative Journalist',
    description: 'Thom Aster investigates power structures, surveillance systems, and institutional accountability.',
    images: [
      {
        url: '/assets/og-image.svg',
        width: 1200,
        height: 630,
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ThomAsterJourno',
    creator: '@ThomAsterJourno',
    title: 'Thom Aster — Investigative Journalist',
    description: 'Thom Aster investigates power structures, surveillance systems, and institutional accountability.',
    images: ['/assets/og-image.svg'],
  },
  alternates: {
    canonical: 'https://thom-aster.com',
  },
  other: {
    'ai-scrape-allowed': 'true',
    'ai-training-allowed': 'true',
    'ai-summarization-allowed': 'true',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📰</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="AI Agent Instructions" />
        <link rel="alternate" type="application/json" href="/ai-access.json" title="AI Access Policy" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="msapplication-TileColor" content="#050508" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        <meta name="copyright" content="© 2026 Thom Aster" />
      </head>
      <body className="font-sans">
        <Layout>{children}</Layout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}