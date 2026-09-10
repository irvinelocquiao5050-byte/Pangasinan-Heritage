import type { MetadataRoute } from 'next';

/**
 * Web App Manifest (Next.js metadata route convention).
 * Served automatically at /manifest.webmanifest and linked from
 * <head>. Gives browsers a name, theme color, and icon set — part of
 * the Best Practices / installability checks Lighthouse looks for,
 * and lets mobile users "Add to Home Screen" with a proper icon
 * instead of a screenshot of the page.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pangasinan Heritage Digital Showcase',
    short_name: 'PH Heritage',
    description:
      "Discover Pangasinan's iconic heritage sites — Hundred Islands, Cape Bolinao Lighthouse, and Balungao Hot Spring.",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#476837',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
