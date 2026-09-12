'use client';

import { useMemo, useState } from 'react';
import HeritageCard from '../molecules/HeritageCard';
import SearchForm from '../molecules/SearchForm';
import Typography from '../atoms/Typography';
import type { HeritageSite } from '../../data/heritageSites';

export interface HeritageGridProps {
  sites: HeritageSite[];
}

/**
 * HeritageGrid — organism (SearchForm molecule + HeritageCard
 * molecules).
 *
 * Responsive logic:
 * - Mobile (< 640px): 1 column, cards stacked full-width.
 * - Tablet (>= 640px): 2 columns.
 * - Desktop (>= 1024px): 3 columns.
 * Filtering happens client-side against already-fetched data, so no
 * extra network round-trip is needed on slow mobile connections.
 */
export default function HeritageGrid({ sites }: HeritageGridProps) {
  const [query, setQuery] = useState('');

  const filteredSites = useMemo(() => {
    if (!query) return sites;
    const q = query.toLowerCase();
    return sites.filter(
      (site) => site.title.toLowerCase().includes(q) || site.municipality.toLowerCase().includes(q)
    );
  }, [query, sites]);

  return (
    <section id="sites" className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="mb-8 flex flex-col gap-4">
        <Typography variant="h2">Explore the Heritage Sites</Typography>
        <SearchForm onSearch={setQuery} />
      </div>

      {filteredSites.length === 0 ? (
        <Typography variant="body" className="text-neutral-600">
          No heritage sites match &quot;{query}&quot;. Try another search term.
        </Typography>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSites.map((site, index) => (
            <HeritageCard key={site.slug} {...site} priority={index === 0} />
          ))}
        </div>
      )}
    </section>
  );
}
