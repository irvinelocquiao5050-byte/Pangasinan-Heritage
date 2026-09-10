import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/utils';

/**
 * Served automatically at /robots.txt (Next.js metadata route
 * convention). Points crawlers at the sitemap and allows the whole
 * site — a small, real SEO win (crawlable, indexable) with zero
 * runtime cost since it's generated at build time.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
