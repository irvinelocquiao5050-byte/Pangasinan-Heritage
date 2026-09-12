import Link from 'next/link';
import { ReactNode } from 'react';

export interface NavigationItemProps {
  href: string;
  label: string;
  isActive?: boolean;
  icon?: ReactNode;
}

/**
 * NavigationItem — molecule (wraps a link, optionally an Icon atom).
 * Used inside HeaderNavigation for both the desktop nav bar and the
 * mobile slide-down menu, so active/hover states only need to be
 * defined once.
 */
export default function NavigationItem({ href, label, isActive = false, icon }: NavigationItemProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={`flex items-center gap-2 rounded-sm px-3 py-2 font-body text-base font-medium transition-colors ${
        isActive ? 'text-primary' : 'text-neutral-900 hover:text-primary'
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
