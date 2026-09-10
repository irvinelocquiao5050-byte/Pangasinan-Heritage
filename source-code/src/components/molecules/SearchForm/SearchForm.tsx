'use client';

import { FormEvent, useId, useState } from 'react';
import { Icon } from '@/components/atoms/Icon';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/lib/utils';

/**
 * MOLECULE: SearchForm
 * ----------------------
 * Usage context: placed in the HeaderNavigation organism and at the
 * top of the heritage grid on the homepage, letting visitors filter
 * sites by name or municipality (e.g. "Bolinao", "hot spring").
 *
 * Responsive logic:
 *  - Mobile (< 640px): input and button stack full-width, input
 *    label is visually hidden (icon + placeholder communicate purpose)
 *    to save vertical space.
 *  - Tablet/desktop (>= 640px): input and button sit inline in a
 *    single row with a fixed-width button.
 *
 * Accessibility: uses a real <label> (visually hidden via `sr-only`,
 * never `display:none`) tied to the input via `htmlFor`/`id`, so
 * screen reader users get an accessible name even though sighted
 * users rely on the icon + placeholder. Icon is decorative
 * (`aria-hidden`) since the label already conveys "search".
 */

interface SearchFormProps {
  onSearch?: (query: string) => void;
  className?: string;
  placeholder?: string;
}

export function SearchForm({
  onSearch,
  className,
  placeholder = 'Search heritage sites, e.g. "Bolinao"',
}: SearchFormProps) {
  const [query, setQuery] = useState('');
  const inputId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch?.(query.trim());
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={cn('flex w-full flex-col gap-2 sm:flex-row', className)}
    >
      <label htmlFor={inputId} className="sr-only">
        Search heritage sites
      </label>
      <div className="relative flex-1">
        <Icon
          name="search"
          size={18}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
        />
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch?.(e.target.value.trim());
          }}
          placeholder={placeholder}
          className="w-full rounded-lg border border-heritage-200 bg-white py-2.5 pl-10 pr-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500"
        />
      </div>
      <Button type="submit" variant="primary" size="md" fullWidthOnMobile>
        Search
      </Button>
    </form>
  );
}
