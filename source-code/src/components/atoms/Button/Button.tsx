import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * ATOM: Button
 * ------------
 * Usage context: any single, discrete user action (submit a search,
 * navigate to a site detail page, open a gallery). Not used for
 * navigation between top-level sections — see NavigationItem (molecule)
 * for that.
 *
 * Responsive logic: fills its container width below the `sm` breakpoint
 * (thumb-friendly full-width tap target on mobile) and reverts to
 * inline sizing at `sm` and above.
 *
 * Accessibility: renders a native <button> or <a> (via `href`) so
 * screen readers and keyboard navigation get correct semantics for
 * free. Focus state uses a visible 2px ring meeting WCAG 2.1 AA
 * non-text contrast (1.4.11).
 */

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  fullWidthOnMobile?: boolean;
}

interface ButtonAsButton
  extends BaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-heritage-600 text-white hover:bg-heritage-700 active:bg-heritage-800',
  secondary:
    'bg-sand-100 text-sand-800 hover:bg-sand-200 active:bg-sand-300',
  ghost:
    'bg-transparent text-heritage-700 hover:bg-heritage-50 active:bg-heritage-100',
};

const sizeClasses: Record<Size, string> = {
  sm: 'text-sm px-3 py-1.5 rounded-md',
  md: 'text-base px-4 py-2.5 rounded-lg',
  lg: 'text-lg px-6 py-3.5 rounded-lg',
};

function classesFor(
  variant: Variant,
  size: Size,
  fullWidthOnMobile: boolean,
  className?: string
) {
  return cn(
    'inline-flex items-center justify-center font-semibold transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    variantClasses[variant],
    sizeClasses[size],
    fullWidthOnMobile ? 'w-full sm:w-auto' : '',
    className
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = 'primary',
      size = 'md',
      fullWidthOnMobile = true,
      className,
      ...rest
    } = props as ButtonAsButton & { className?: string };

    if ('href' in props && props.href) {
      const { href, children } = props as ButtonAsLink;
      return (
        <Link
          href={href}
          className={classesFor(variant, size, fullWidthOnMobile, className)}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classesFor(variant, size, fullWidthOnMobile, className)}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  }
);
