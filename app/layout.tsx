import type { Metadata } from 'next';
import './globals.css';
import HeaderNavigation from './components/organisms/HeaderNavigation';
import Typography from './components/atoms/Typography';

export const metadata: Metadata = {
  title: 'Pangasinan Heritage Digital Showcase',
  description:
    'Discover Pangasinan\u2019s iconic heritage sites: Hundred Islands, Cape Bolinao Lighthouse, and Balungao Hot Spring.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-white focus:px-4 focus:py-2 focus:shadow"
        >
          Skip to main content
        </a>
        <HeaderNavigation />
        <main id="main-content">{children}</main>
        <footer className="border-t border-neutral-300 bg-white py-8">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <Typography variant="caption">
              &copy; {new Date().getFullYear()} Pangasinan Provincial Tourism Office. Built as an academic
              exercise for Activity 1.1.
            </Typography>
          </div>
        </footer>
      </body>
    </html>
  );
}
