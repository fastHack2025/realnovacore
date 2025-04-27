/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 🔥 Autorise toutes les sources HTTPS (peut être affiné plus tard)
      },
    ],
  },
};

module.exports = nextConfig;
