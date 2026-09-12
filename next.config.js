/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local SVG illustrations only — no external image domains needed.
    formats: ['image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
  },
};

module.exports = nextConfig;
