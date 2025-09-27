import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // 使用正确的域名，与实际部署的域名保持一致
  const baseUrl = 'https://policesketchmaker.it.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-09-27'),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/ai-image-describer`,
      lastModified: new Date('2025-09-27'),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2025-09-27'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2025-09-27'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/how-to-make-sketch-of-face-complete-guide`,
      lastModified: new Date('2025-09-27'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ai-photo-editing-revolution-professional-techniques`,
      lastModified: new Date('2025-09-27'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
} 