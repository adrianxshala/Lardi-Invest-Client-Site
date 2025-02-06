/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export mode
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during builds
  },
  images: {
    unoptimized: true, // Disable Image Optimization API (required for `output: 'export'`)
    domains: ['images.unsplash.com'], // Allow images from Unsplash
  },
};

module.exports = nextConfig;