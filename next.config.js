/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    formats: ['image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
  },
};

module.exports = nextConfig;
