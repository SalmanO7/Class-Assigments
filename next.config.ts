import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables all ESLint checks during builds
  },
};

export default nextConfig;
