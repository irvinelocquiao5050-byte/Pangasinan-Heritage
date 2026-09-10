import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens — see src/components/atoms/tokens/colors.ts
        // for the single source of truth (Atom: Color Tokens).
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
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
