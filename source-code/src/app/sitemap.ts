import type { MetadataRoute } from 'next';
import { heritageSites } from '@/data/heritageSites';
import { SITE_URL } from '@/lib/utils';

/**
 * Served automatically at /sitemap.xml (Next.js metadata route
 * convention). Lists the homepage plus every statically-generated
 * heritage site page, so search engines can discover and index all
 * routes without depending solely on crawled links.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteEntries: MetadataRoute.Sitemap = heritageSites.map((site) => ({
    url: `${SITE_URL}/sites/${site.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...siteEntries,
  ];
}
