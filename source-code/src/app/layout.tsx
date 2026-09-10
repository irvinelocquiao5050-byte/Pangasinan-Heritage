import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { HeaderNavigation } from '@/components/organisms/HeaderNavigation';
import { Footer } from '@/components/organisms/Footer';
import { SITE_URL } from '@/lib/utils';
import './globals.css';

/**
 * next/font self-hosts Google Fonts at build time: no request to
 * fonts.googleapis.com at runtime, no render-blocking @import, and
 * no layout shift from a late-swapping web font — all of which feed
 * directly into the Performance score. `display: 'swap'` keeps text
 * visible with the fallback font while the real one loads.
 */
const heading = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-heading',
});

const body = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const description =
  "Discover Pangasinan's iconic heritage sites — Hundred Islands, Cape Bolinao Lighthouse, and Balungao Hot Spring — in one fast, accessible digital showcase.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Pangasinan Heritage Digital Showcase',
    template: '%s | Pangasinan Heritage Digital Showcase',
  },
  description,
  keywords: [
    'Pangasinan',
    'Hundred Islands',
    'Cape Bolinao Lighthouse',
    'Balungao Hot Spring',
    'Philippines heritage tourism',
  ],
  authors: [{ name: 'Pangasinan Provincial Tourism Office' }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: SITE_URL,
    siteName: 'Pangasinan Heritage Digital Showcase',
    title: 'Pangasinan Heritage Digital Showcase',
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pangasinan Heritage Digital Showcase',
    description,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#476837',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col font-body antialiased">
        {/* Accessibility: first tab stop lets keyboard users skip
            the header and jump straight to page content (WCAG 2.4.1). */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <HeaderNavigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
