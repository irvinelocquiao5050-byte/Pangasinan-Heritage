'use client';

import { FormEvent, useState } from 'react';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';

export interface SearchFormProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

/**
 * SearchForm — molecule (Icon + Button atoms). Lets visitors filter
 * the Heritage Grid by site name or municipality. Kept as its own
 * molecule (rather than baked into HeritageGrid) so it can be reused
 * on other listing pages later, e.g. an events page.
 */
export default function SearchForm({ onSearch, placeholder = 'Search heritage sites...' }: SearchFormProps) {
  const [query, setQuery] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch(query.trim());
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="flex w-full max-w-xl gap-2">
      <label htmlFor="site-search" className="sr-only">
        Search heritage sites
      </label>
      <div className="relative flex-1">
        <Icon
          name="search"
          size={20}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600"
        />
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-sm border border-neutral-300 bg-white py-2.5 pl-10 pr-3 font-body text-base text-neutral-900 focus:border-primary"
        />
      </div>
      <Button type="submit" variant="primary" size="md">
        Search
      </Button>
    </form>
  );
}
