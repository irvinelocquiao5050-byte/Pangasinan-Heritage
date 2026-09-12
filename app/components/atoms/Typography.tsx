import { ReactNode } from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption';

const variantClassMap: Record<Variant, string> = {
  h1: 'font-heading text-4xl md:text-5xl font-bold leading-tight text-neutral-900',
  h2: 'font-heading text-3xl md:text-4xl font-bold leading-tight text-neutral-900',
  h3: 'font-heading text-2xl md:text-3xl font-semibold leading-snug text-neutral-900',
  h4: 'font-heading text-xl md:text-2xl font-semibold leading-snug text-neutral-900',
  body: 'font-body text-base leading-relaxed text-neutral-900',
  caption: 'font-body text-sm leading-normal text-neutral-600',
};

const variantElementMap: Record<Variant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  caption: 'span',
};

export interface TypographyProps {
  variant?: Variant;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
}

/**
 * Typography — atom. Centralizes every heading/body/caption style so
 * font sizing, weight, and color always come from the design tokens
 * instead of being re-declared page by page.
 */
export default function Typography({
  variant = 'body',
  as,
  className = '',
  children,
}: TypographyProps) {
  const Component = as ?? variantElementMap[variant];
  return (
    <Component className={`${variantClassMap[variant]} ${className}`.trim()}>
      {children}
    </Component>
  );
}
