import Link from 'next/link';
import { Image } from '@/components/atoms/Image';
import { Typography } from '@/components/atoms/Typography';
import { Icon, IconName } from '@/components/atoms/Icon';
import type { HeritageSite } from '@/types';
import { categoryLabel } from '@/lib/utils';

/**
 * MOLECULE: HeritageCard
 * -----------------------
 * Usage context: the Heritage Card is used exclusively for displaying
 * tourist site previews in a responsive heritage-site grid (see the
 * HeritageGrid organism). It combines the Image, Typography, and Icon
 * atoms into a single reusable preview unit — never used standalone
 * for full site detail (that's the /sites/[slug] page template).
 *
 * Responsive logic:
 *  - Mobile (< 640px): full-width card, image height 200px, stacked layout.
 *  - Tablet (>= 640px): card sits in a 2-column grid (set by the parent
 *    HeritageGrid), image height grows to 220px.
 *  - Desktop (>= 1024px): 3-column grid, image height 240px, hover
 *    state (scale + shadow) becomes active since a mouse is assumed.
 *  All sizing is driven by the `sizes` prop passed to the Image atom
 *  so the correct image resolution downloads per breakpoint.
 *
 * Accessibility: the entire card is a single focusable link with one
 * accessible name (the site name); the category icon is decorative
 * and hidden from assistive tech since the text label repeats the
 * same information.
 */

const categoryIcon: Record<string, IconName> = {
  island: 'island',
  landmark: 'landmark',
  nature: 'nature',
};

interface HeritageCardProps {
  site: HeritageSite;
  priority?: boolean;
}

export function HeritageCard({ site, priority = false }: HeritageCardProps) {
  return (
    <Link
      href={`/sites/${site.slug}`}
      className="group block overflow-hidden rounded-xl border border-heritage-100 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 focus-visible:ring-offset-2"
    >
      <div className="relative h-[200px] sm:h-[220px] lg:h-[240px] w-full overflow-hidden">
        <Image
          src={site.heroImage.src}
          alt={site.heroImage.alt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="transition-transform duration-300 group-hover:scale-105"
          rounded={false}
          priority={priority}
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-heritage-800 backdrop-blur">
          <Icon name={categoryIcon[site.category]} size={14} />
          {categoryLabel(site.category)}
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <Typography variant="caption" className="text-sand-600">
          {site.municipality}
        </Typography>
        <Typography variant="h4" as="h3" className="mt-1">
          {site.name}
        </Typography>
        <Typography variant="bodySmall" className="mt-2 line-clamp-3">
          {site.shortDescription}
        </Typography>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ocean-600 group-hover:gap-2 transition-all">
          Explore
          <Icon name="chevron-right" size={16} />
        </span>
      </div>
    </Link>
  );
}
