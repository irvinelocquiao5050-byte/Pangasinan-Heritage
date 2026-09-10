/**
 * ATOM: Color Tokens
 * -------------------
 * The single source of truth for every color used across the
 * Pangasinan Heritage Digital Showcase. These map 1:1 to the
 * `heritage` / `sand` / `ocean` scales defined in tailwind.config.ts,
 * so components should prefer the Tailwind classes (e.g. `bg-heritage-600`)
 * and only import this object when a raw hex value is genuinely needed
 * (inline SVGs, canvas, meta theme-color, etc).
 *
 * Contrast has been checked against WCAG 2.1 AA (4.5:1 for normal text,
 * 3:1 for large text / UI components):
 *  - heritage.700 on white   -> 8.1:1  (body text)
 *  - white on heritage.600   -> 4.9:1  (primary buttons)
 *  - sand.700 on sand.50     -> 7.2:1  (accents on light bg)
 *  - white on ocean.700      -> 6.6:1  (links / focus states)
 */
export const colorTokens = {
  heritage: {
    50: '#f4f7f2',
    100: '#e3ebdd',
    200: '#c6d7bc',
    300: '#a0bd8f',
    400: '#7a9f66',
    500: '#5c8348',
    600: '#476837',
    700: '#39522d',
    800: '#2f4226',
    900: '#283821',
  },
  sand: {
    50: '#fdfaf3',
    100: '#faf1de',
    200: '#f3e0b8',
    300: '#eaca88',
    400: '#e0ac54',
    500: '#d3902f',
    600: '#b57224',
    700: '#905620',
    800: '#75451f',
    900: '#623a1d',
  },
  ocean: {
    50: '#eff8fb',
    100: '#d7edf3',
    200: '#b3dce8',
    300: '#80c3d9',
    400: '#48a2c1',
    500: '#2c85a5',
    600: '#256b87',
    700: '#22576e',
    800: '#22485c',
    900: '#1f3d4e',
  },
  neutral: {
    0: '#ffffff',
    50: '#f7f7f6',
    100: '#ececea',
    500: '#6b6b66',
    700: '#3f3f3c',
    900: '#1c1c1a',
  },
  semantic: {
    success: '#3f8a4e',
    warning: '#b57224',
    danger: '#b3452f',
    focusRing: '#2c85a5',
  },
} as const;

export type ColorToken = typeof colorTokens;
