/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['console.apify.com', 'api.apify.com'],
  },
}

module.exports = nextConfig 