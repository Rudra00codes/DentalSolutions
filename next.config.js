/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization with mobile-first strategy
  images: {
    formats: ['image/webp', 'image/avif'],
    // Mobile-first device sizes
    deviceSizes: [320, 375, 425, 640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 90, // 90 days for better caching
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // React 19 & Next.js 16 optimizations
  reactStrictMode: true,
  
  // Package import optimizations
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'react-icons',
      '@emotion/react',
      '@mui/material',
    ],
  },

  // Performance optimizations
  compress: true,
  trailingSlash: false,
  poweredByHeader: false, // Remove X-Powered-By header

  // Core Web Vitals optimization
  productionBrowserSourceMaps: false,
  async headers() {
    return [
      // Static assets caching strategy
      {
        source: '/assets/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Next.js static assets
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Security headers for all routes except API
      {
        source: '/:path((?!api).*)*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://unpkg.com; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:; font-src 'self' data:; connect-src 'self' https:; frame-src 'self' https://www.google.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'",
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

// Development server page buffer settings
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  // Bundle analyzer in development
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      if (process.env.NODE_ENV === 'development') {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            openAnalyzer: false,
          })
        )
      }
      return config
    },
  }),
}

module.exports = nextConfig