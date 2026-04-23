/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Optimisations pour les performances mobile
  compiler: {
    // Supprimer console.log en production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Optimisation des images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Optimisation du bundle
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Optimiser les animations pour mobile
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Séparer framer-motion dans son propre chunk
            framerMotion: {
              name: 'framer-motion',
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              priority: 40,
              reuseExistingChunk: true,
            },
            // Chunk pour les composants premium
            premium: {
              name: 'premium',
              test: /[\\/]components[\\/]premium[\\/]/,
              priority: 30,
              reuseExistingChunk: true,
            },
          },
        },
      }
    }
    return config
  },

  // Headers pour améliorer les performances
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
