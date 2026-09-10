/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  basePath: '/Pangasinan--Heritage',   // needed for GitHub Pages subpath
  images: {
    unoptimized: true,           // GitHub Pages can't run Next's image optimizer
  },
  trailingSlash: true,           // avoids 404s on GitHub Pages routing
};

module.exports = nextConfig;