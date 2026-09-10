'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavigationItem } from '@/components/molecules/NavigationItem';
import { Icon } from '@/components/atoms/Icon';
import { Typography } from '@/components/atoms/Typography';
import type { NavLink } from '@/types';

/**
 * ORGANISM: HeaderNavigation
 * -----------------------------
 * Usage context: the persistent site header, rendered once in the
 * root layout so it appears on every page. Combines the brand mark,
 * a row of NavigationItem molecules, and a mobile menu toggle button
 * (Icon atom) into one cohesive organism.
 *
 * Responsive logic:
 *  - Mobile (< 768px): nav links are hidden by default behind a
 *    hamburger button; tapping it reveals a full-width dropdown panel
 *    with stacked NavigationItem (variant="mobile") rows.
 *  - Desktop (>= 768px): the hamburger button is hidden entirely and
 *    NavigationItem (variant="desktop") entries render inline in the
 *    header bar — no JS-driven layout needed, so nothing shifts when
 *    JS is slow to hydrate on a throttled connection.
 *
 * Accessibility: the toggle button uses `aria-expanded` and
 * `aria-controls` to describe the menu's open/closed state to
 * assistive tech, and the icon swaps between "menu" and "close" with
 * an accessible label reflecting the action, not just the icon shape.
 */

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Islands', href: '/sites/hundred-islands' },
  { label: 'Landmarks', href: '/sites/bolinao-lighthouse' },
  { label: 'Nature Parks', href: '/sites/balungao-hot-spring' },
];

const MENU_ID = 'primary-mobile-menu';

export function HeaderNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-heritage-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 rounded-sm"
        >
          <Icon name="map-pin" size={22} className="text-heritage-600" />
          <Typography variant="h4" as="span" className="!text-lg">
            Pangasinan Heritage
          </Typography>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex md:items-center md:gap-1"
        >
          {navLinks.map((link) => (
            <NavigationItem key={link.href} link={link} variant="desktop" />
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-heritage-700 hover:bg-heritage-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 md:hidden"
          aria-expanded={isOpen}
          aria-controls={MENU_ID}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((v) => !v)}
        >
          <Icon name={isOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile nav panel */}
      {isOpen && (
        <nav
          id={MENU_ID}
          aria-label="Primary mobile"
          className="border-t border-heritage-100 bg-white md:hidden"
        >
          {navLinks.map((link) => (
            <NavigationItem
              key={link.href}
              link={link}
              variant="mobile"
              onClick={() => setIsOpen(false)}
            />
          ))}
        </nav>
      )}
    </header>
  );
}
