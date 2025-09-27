/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['console.apify.com', 'api.apify.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  
  // 安全头配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  // 重定向配置
  async redirects() {
    return [
      // 处理常见的重复内容问题
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  
  // 生成站点地图和robots.txt
  trailingSlash: false,
}

module.exports = nextConfig 