/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: '/about', destination: '/', permanent: true },
      { source: '/blog/:path*', destination: '/', permanent: true },
      { source: '/docs/:path*', destination: '/', permanent: true },
      { source: '/pricing', destination: '/', permanent: true },
      { source: '/ai-examples/:path*', destination: '/', permanent: true },
    ];
  },
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
