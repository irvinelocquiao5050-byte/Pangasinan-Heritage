/**
 * Design Tokens — single source of truth for the Pangasinan Heritage
 * Digital Showcase design system. Mirrors the CSS variables declared
 * in app/globals.css and tailwind.config.js so JS/TS code (e.g.
 * inline styles, chart libraries) can reference the same values.
 */
export const colorTokens = {
  primary: '#0F5C82',
  primaryDark: '#08344A',
  primaryLight: '#4A8DAE',
  secondary: '#E08D3C',
  secondaryDark: '#B96F26',
  accent: '#2AA198',
  neutral900: '#1A1A1A',
  neutral600: '#5A5A5A',
  neutral300: '#C9C4BC',
  neutral100: '#F5F3EF',
} as const;

export const spacingTokens = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  6: '24px',
  8: '32px',
  12: '48px',
  16: '64px',
} as const;

export const radiusTokens = {
  sm: '8px',
  card: '16px',
} as const;

export type ColorTokenName = keyof typeof colorTokens;

/**
 * ColorSwatch — a tiny presentational atom used only in the design
 * system documentation to render each color token with its name and
 * hex value. Not used in production pages.
 */
export function ColorSwatch({ name, hex }: { name: string; hex: string }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <div
        className="h-16 w-16 rounded-card border border-neutral-300"
        style={{ backgroundColor: hex }}
        aria-hidden="true"
      />
      <span className="font-body text-sm text-neutral-900">{name}</span>
      <span className="font-body text-xs text-neutral-600">{hex}</span>
    </div>
  );
}
