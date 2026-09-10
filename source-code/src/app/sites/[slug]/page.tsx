import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Typography } from '@/components/atoms/Typography';
import { Image } from '@/components/atoms/Image';
import { Icon } from '@/components/atoms/Icon';
import { Button } from '@/components/atoms/Button';
import { heritageSites, getHeritageSiteBySlug } from '@/data/heritageSites';
import { SITE_URL } from '@/lib/utils';

interface SitePageProps {
  params: { slug: string };
}

/**
 * Pre-renders every heritage site at build time (Static Site
 * Generation) — pages ship as plain HTML/CSS with no server round
 * trip needed at request time, matching the "static or JAMstack-style
 * deployment" requirement.
 */
export function generateStaticParams() {
  return heritageSites.map((site) => ({ slug: site.slug }));
}

export function generateMetadata({ params }: SitePageProps): Metadata {
  const site = getHeritageSiteBySlug(params.slug);
  if (!site) return {};
  return {
    title: site.name,
    description: site.shortDescription,
    alternates: {
      canonical: `/sites/${site.slug}`,
    },
    openGraph: {
      title: site.name,
      description: site.shortDescription,
      type: 'article',
      url: `/sites/${site.slug}`,
      images: [{ url: site.heroImage.src }],
    },
    twitter: {
      card: 'summary_large_image',
      title: site.name,
      description: site.shortDescription,
      images: [site.heroImage.src],
    },
  };
}

export default function SiteDetailPage({ params }: SitePageProps) {
  const site = getHeritageSiteBySlug(params.slug);
  if (!site) notFound();

  /**
   * TouristAttraction structured data: gives search engines an
   * unambiguous, machine-readable summary of the page (name,
   * description, image, location) which can surface as a rich
   * result — a real SEO enhancement with no runtime cost, since it's
   * inlined at build time from data already on the page.
   */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: site.name,
    description: site.shortDescription,
    image: `${SITE_URL}${site.heroImage.src}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.municipality,
      addressRegion: 'Pangasinan',
      addressCountry: 'PH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.coordinates.lat,
      longitude: site.coordinates.lng,
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative h-[280px] w-full sm:h-[360px] md:h-[440px]">
        <Image
          src={site.heroImage.src}
          alt={site.heroImage.alt}
          fill
          sizes="100vw"
          priority
          rounded={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 sm:px-6 sm:pb-10 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-heritage-800">
              <Icon name="map-pin" size={14} />
              {site.municipality}
            </span>
            <Typography
              variant="display"
              as="h1"
              className="mt-2 !text-white !text-3xl sm:!text-4xl md:!text-5xl"
            >
              {site.name}
            </Typography>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Typography variant="body" className="text-lg">
          {site.fullDescription}
        </Typography>

        <section aria-labelledby="highlights-heading" className="mt-10">
          <Typography variant="h3" id="highlights-heading">
            Highlights
          </Typography>
          <ul className="mt-3 space-y-2">
            {site.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Icon
                  name="chevron-right"
                  size={16}
                  className="mt-1 flex-shrink-0 text-heritage-600"
                />
                <Typography variant="body">{item}</Typography>
              </li>
            ))}
          </ul>
        </section>

        {site.gallery.length > 0 && (
          <section aria-labelledby="gallery-heading" className="mt-10">
            <Typography variant="h3" id="gallery-heading">
              Gallery
            </Typography>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {site.gallery.map((image) => (
                <div
                  key={image.src}
                  className="relative h-[200px] w-full overflow-hidden rounded-xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, 50vw"
                    rounded={false}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="tips-heading" className="mt-10">
          <Typography variant="h3" id="tips-heading">
            Travel Tips
          </Typography>
          <ul className="mt-3 space-y-2">
            {site.travelTips.map((tip) => (
              <li key={tip} className="flex items-start gap-2">
                <Icon
                  name="chevron-right"
                  size={16}
                  className="mt-1 flex-shrink-0 text-sand-600"
                />
                <Typography variant="body">{tip}</Typography>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12">
          <Button href="/" variant="secondary" size="md">
            ← Back to all heritage sites
          </Button>
        </div>
      </div>
    </article>
  );
}
