/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F5C82',
          dark: '#08344A',
          light: '#4A8DAE',
        },
        secondary: {
          DEFAULT: '#E08D3C',
          dark: '#B96F26',
        },
        accent: '#2AA198',
        neutral: {
          900: '#1A1A1A',
          600: '#5A5A5A',
          300: '#C9C4BC',
          100: '#F5F3EF',
        },
      },
      fontFamily: {
        heading: ['"Segoe UI"', 'system-ui', 'sans-serif'],
        body: ['system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
};
