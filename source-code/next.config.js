/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export is supported for JAMstack-style deployment
  // (e.g. Netlify, Vercel, GitHub Pages). Uncomment to build a
  // fully static site:
  // output: 'export',
  images: {
    // next/image handles responsive, lazy-loaded, compressed images
    // out of the box — key to the "Lightning-Fast" requirement.
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
