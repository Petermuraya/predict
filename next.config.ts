import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Optional: enables React strict mode
  swcMinify: true, // Optional: enables the SWC minifier for faster builds
  experimental: {
    // Optional: enable experimental features if needed
    // Removed 'appDir' as it is not a valid property of 'ExperimentalConfig'
  },
  async redirects() {
    return [
      {
        source: '/old-route', // the route that should be redirected
        destination: '/new-route', // where it should redirect
        permanent: true, // use `true` for a permanent redirect (301), or `false` for a temporary one (302)
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:slug',
        destination: 'https://api.example.com/:slug', // Proxy API requests to a remote server
      },
    ];
  },
  headers() {
    return Promise.resolve([
      {
        source: '/(.*)', // Match all routes
        headers: [
          {
            key: 'X-Custom-Header', // Add custom headers to all routes
            value: 'My custom header value',
          },
        ],
      },
    ]);
  },
};

export default nextConfig;
