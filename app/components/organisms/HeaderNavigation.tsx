'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '../atoms/Icon';
import Typography from '../atoms/Typography';
import NavigationItem from '../molecules/NavigationItem';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#sites', label: 'Heritage Sites' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

/**
 * HeaderNavigation — organism (NavigationItem molecules + Icon atom).
 *
 * Responsive logic:
 * - < 768px (mobile): logo + hamburger button only; NAV_LINKS render
 *   in a full-width slide-down panel toggled by the hamburger.
 * - >= 768px (tablet/desktop): hamburger is hidden; NAV_LINKS render
 *   inline in a horizontal row next to the logo.
 * The panel toggle is keyboard-operable and exposes aria-expanded so
 * assistive tech tracks its open/closed state (WCAG 2.1 AA).
 */
export default function HeaderNavigation({ activePath = '/' }: { activePath?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-300 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Typography variant="h4" as="span" className="text-primary">
            Pangasinan Heritage
          </Typography>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:flex md:items-center md:gap-1">
          {NAV_LINKS.map((link) => (
            <NavigationItem key={link.href} {...link} isActive={activePath === link.href} />
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-sm text-neutral-900 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Icon name={isOpen ? 'close' : 'menu'} size={28} />
        </button>
      </div>

      {/* Mobile nav panel */}
      {isOpen && (
        <nav
          id="mobile-nav-panel"
          aria-label="Primary"
          className="flex flex-col gap-1 border-t border-neutral-300 bg-white px-4 py-3 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <NavigationItem key={link.href} {...link} isActive={activePath === link.href} />
          ))}
        </nav>
      )}
    </header>
  );
}
