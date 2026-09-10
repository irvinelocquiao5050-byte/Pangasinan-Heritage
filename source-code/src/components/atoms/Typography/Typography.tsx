import { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * ATOM: Typography
 * -----------------
 * Usage context: every piece of text on the site should go through
 * this component (or its exported helpers) rather than raw <p>/<h1>
 * tags, so type scale, line-height, and color stay consistent as the
 * design system grows.
 *
 * Responsive logic: heading sizes step down on small screens using
 * Tailwind's responsive prefixes (e.g. text-3xl on mobile, text-5xl
 * from `md` up) so headings never overflow narrow viewports.
 *
 * Accessibility: `as` controls the rendered element independently of
 * visual size, so a component can *look* like an H4 while remaining
 * an H2 in the outline — keeping the document heading hierarchy
 * correct for screen-reader navigation regardless of visual design.
 */

type Variant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'bodySmall'
  | 'caption';

const variantStyles: Record<Variant, string> = {
  display:
    'font-heading font-bold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-heritage-900',
  h1: 'font-heading font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-heritage-900',
  h2: 'font-heading font-bold text-2xl sm:text-3xl leading-snug text-heritage-900',
  h3: 'font-heading font-semibold text-xl sm:text-2xl leading-snug text-heritage-800',
  h4: 'font-heading font-semibold text-lg sm:text-xl leading-snug text-heritage-800',
  body: 'font-body text-base leading-relaxed text-neutral-700',
  bodySmall: 'font-body text-sm leading-relaxed text-neutral-700',
  caption: 'font-body text-xs uppercase tracking-wide text-neutral-500',
};

const defaultElement: Record<Variant, ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  bodySmall: 'p',
  caption: 'span',
};

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: Variant;
  as?: ElementType;
  children: ReactNode;
}

export function Typography({
  variant = 'body',
  as,
  className,
  children,
  ...rest
}: TypographyProps) {
  const Component = as ?? defaultElement[variant];
  return (
    <Component className={cn(variantStyles[variant], className)} {...rest}>
      {children}
    </Component>
  );
}
