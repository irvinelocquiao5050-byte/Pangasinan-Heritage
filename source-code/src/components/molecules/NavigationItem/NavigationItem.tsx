'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { NavLink } from '@/types';

/**
 * MOLECULE: NavigationItem
 * --------------------------
 * Usage context: a single entry inside the HeaderNavigation organism's
 * primary nav list. Combines a Next.js Link with active-state styling
 * derived from the current route — not meant to be used outside a
 * <nav> list.
 *
 * Responsive logic:
 *  - Mobile (< 768px): rendered as a full-width row inside the slide
 *    down mobile menu (larger tap target, left-aligned).
 *  - Desktop (>= 768px): rendered inline in the header bar (compact
 *    padding, underline-on-hover instead of a background fill).
 *  The component itself is layout-agnostic; HeaderNavigation supplies
 *  the `variant` prop so the same molecule works in both contexts.
 *
 * Accessibility: sets `aria-current="page"` on the active link so
 * screen readers announce the current location, matching the visual
 * active indicator.
 */

interface NavigationItemProps {
  link: NavLink;
  variant?: 'desktop' | 'mobile';
  onClick?: () => void;
}

export function NavigationItem({
  link,
  variant = 'desktop',
  onClick,
}: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  const desktopClasses =
    'px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-heritage-500';
  const mobileClasses =
    'block w-full px-4 py-3 text-base font-medium border-l-4 border-transparent hover:bg-heritage-50';

  return (
    <Link
      href={link.href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 rounded-sm',
        variant === 'desktop' ? desktopClasses : mobileClasses,
        isActive
          ? variant === 'desktop'
            ? 'border-heritage-600 text-heritage-800'
            : 'border-heritage-600 bg-heritage-50 text-heritage-800'
          : 'text-neutral-700'
      )}
    >
      {link.label}
    </Link>
  );
}
