import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['image.tmdb.org'],
    unoptimized: true,
  },
};

export default nextConfig;
