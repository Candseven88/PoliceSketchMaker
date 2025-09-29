import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 主要搜索引擎爬虫规则
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/_next/static/',
          '/_next/image/',
          '/admin/',
          '/*.woff',
          '/*.woff2',
          '/*.ttf',
          '/*.eot',
          '/*.otf',
          '/favicon.ico',
          '/icon.png',
          '/apple-icon.png',
          '/*.txt'
        ],
        crawlDelay: 1, // 1秒延迟，对服务器友好
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/_next/static/',
          '/_next/image/',
          '/admin/',
          '/*.woff',
          '/*.woff2',
          '/*.ttf',
          '/*.eot',
          '/*.otf',
          '/favicon.ico',
          '/icon.png',
          '/apple-icon.png',
          '/*.txt'
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/_next/static/',
          '/_next/image/',
          '/admin/',
          '/*.woff',
          '/*.woff2',
          '/*.ttf',
          '/*.eot',
          '/*.otf',
          '/favicon.ico',
          '/icon.png',
          '/apple-icon.png',
          '/*.txt'
        ],
        crawlDelay: 2, // Yandex稍微慢一些
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/_next/static/',
          '/_next/image/',
          '/admin/',
          '/*.woff',
          '/*.woff2',
          '/*.ttf',
          '/*.eot',
          '/*.otf',
          '/favicon.ico',
          '/icon.png',
          '/apple-icon.png',
          '/*.txt'
        ],
        crawlDelay: 3, // 百度爬虫较慢
      },
      // 其他所有爬虫的默认规则
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/_next/static/',
          '/_next/image/',
          '/admin/',
          '/*.woff',
          '/*.woff2',
          '/*.ttf',
          '/*.eot',
          '/*.otf',
          '/favicon.ico',
          '/icon.png',
          '/apple-icon.png',
          '/*.txt'
        ],
        crawlDelay: 5, // 其他爬虫更慢的延迟
      }
    ],
    sitemap: [
      'https://policesketchmaker.it.com/sitemap.xml'
    ],
    host: 'https://policesketchmaker.it.com', // 指定首选域名
  }
} 