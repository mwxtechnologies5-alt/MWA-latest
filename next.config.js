/** @type {import('next').NextConfig} */
const path = require('node:path');

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.(jsx|tsx)$/,
        use: [
          {
            loader: LOADER,
          },
        ],
      });
    }
    return config;
  },
};

module.exports = nextConfig;