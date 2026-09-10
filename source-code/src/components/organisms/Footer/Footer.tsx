import { Typography } from '@/components/atoms/Typography';

/**
 * ORGANISM: Footer
 * ------------------
 * Simple closing section rendered once in the root layout. Not part
 * of the required deliverable list, but included so every page has
 * complete, realistic chrome above and below the main content.
 */
export function Footer() {
  return (
    <footer className="mt-16 border-t border-heritage-100 bg-heritage-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Typography variant="bodySmall">
          Pangasinan Heritage Digital Showcase — a Provincial Tourism
          Office initiative.
        </Typography>
        <Typography variant="caption" className="mt-2 block">
          Built with Next.js 14 · Atomic Design System
        </Typography>
      </div>
    </footer>
  );
}
