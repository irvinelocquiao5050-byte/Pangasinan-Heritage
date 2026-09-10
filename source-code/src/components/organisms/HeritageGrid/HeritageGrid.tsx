'use client';

import { useMemo, useState } from 'react';
import { HeritageCard } from '@/components/molecules/HeritageCard';
import { SearchForm } from '@/components/molecules/SearchForm';
import { Typography } from '@/components/atoms/Typography';
import type { HeritageSite } from '@/types';

/**
 * ORGANISM: HeritageGrid
 * ------------------------
 * Usage context: the main content section of the homepage — combines
 * the SearchForm molecule with a responsive grid of HeritageCard
 * molecules. This is the organism-level composition the brief asks
 * for: molecules (Heritage Card, Search Form) assembled into a
 * coherent section of the page.
 *
 * Responsive logic:
 *  - Mobile (< 640px): 1 column, cards stacked full-width.
 *  - Tablet (>= 640px, < 1024px): 2 columns.
 *  - Desktop (>= 1024px): 3 columns.
 *  Grid gap tightens on mobile (1rem) and opens up on desktop (1.5rem)
 *  to keep density appropriate for the viewport. Filtering happens
 *  client-side (small, static dataset) so results update instantly
 *  with no network round-trip — consistent with the "Lightning-Fast"
 *  requirement for a JAMstack-style deployment.
 *
 * Accessibility: the results count is rendered in an `aria-live`
 * region so screen reader users are told how many sites match as
 * they type, without needing to re-navigate the list.
 */

interface HeritageGridProps {
  sites: HeritageSite[];
}

export function HeritageGrid({ sites }: HeritageGridProps) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sites;
    return sites.filter(
      (site) =>
        site.name.toLowerCase().includes(q) ||
        site.municipality.toLowerCase().includes(q) ||
        site.shortDescription.toLowerCase().includes(q)
    );
  }, [sites, query]);

  return (
    <section aria-labelledby="heritage-grid-heading" className="py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Typography variant="h2" id="heritage-grid-heading">
              Explore the Heritage Sites
            </Typography>
            <Typography variant="body" className="mt-1 max-w-xl">
              Islands, landmarks, and nature parks across Pangasinan —
              search by name or municipality.
            </Typography>
          </div>
          <SearchForm onSearch={setQuery} className="sm:max-w-xs" />
        </div>

        <p aria-live="polite" className="mt-4 text-sm text-neutral-500">
          {filtered.length} site{filtered.length === 1 ? '' : 's'} found
        </p>

        {filtered.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {filtered.map((site, index) => (
              <HeritageCard key={site.slug} site={site} priority={index === 0} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-dashed border-heritage-200 p-8 text-center">
            <Typography variant="body">
              No heritage sites match your search. Try a different keyword.
            </Typography>
          </div>
        )}
      </div>
    </section>
  );
}
