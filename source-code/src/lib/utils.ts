/**
 * Canonical production URL. Used to build metadataBase, canonical
 * links, Open Graph URLs, and the sitemap/robots routes. Falls back
 * to localhost during local development.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function categoryLabel(category: string): string {
  const labels: Record<string, string> = {
    island: 'Island',
    landmark: 'Landmark',
    nature: 'Nature Park',
  };
  return labels[category] ?? category;
}
