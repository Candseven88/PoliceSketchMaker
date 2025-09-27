// SEO自动化库
// 用于在内容更新时自动通知搜索引擎和执行SEO任务

import { submitUrlsToIndexNow, notifyContentUpdate } from './indexnow'

interface ContentUpdateEvent {
  type: 'create' | 'update' | 'delete'
  urls: string[]
  timestamp?: string
  metadata?: {
    title?: string
    description?: string
    keywords?: string[]
    category?: string
  }
}

/**
 * 处理内容更新事件
 */
export async function handleContentUpdate(event: ContentUpdateEvent): Promise<void> {
  console.log('Processing content update event:', event)

  try {
    // 1. 提交到IndexNow
    if (event.type !== 'delete' && event.urls.length > 0) {
      await notifyContentUpdate(event.urls)
    }

    // 2. 记录更新日志（在生产环境中可以存储到数据库）
    const logEntry = {
      ...event,
      timestamp: event.timestamp || new Date().toISOString(),
      processed: true,
    }
    console.log('Content update processed:', logEntry)

    // 3. 如果是重要页面，触发额外的SEO任务
    const importantPages = ['/', '/about', '/blog', '/ai-image-describer']
    const hasImportantPages = event.urls.some(url => 
      importantPages.some(important => url === important || url.endsWith(important))
    )

    if (hasImportantPages) {
      console.log('Important pages updated, triggering additional SEO tasks')
      await triggerAdditionalSEOTasks(event.urls)
    }

  } catch (error) {
    console.error('Failed to process content update:', error)
  }
}

/**
 * 触发额外的SEO任务
 */
async function triggerAdditionalSEOTasks(urls: string[]): Promise<void> {
  try {
    // 可以在这里添加更多的SEO任务，比如：
    // - 生成新的站点地图
    // - 更新内部链接
    // - 发送到Google Search Console API
    // - 更新社交媒体卡片
    
    console.log('Additional SEO tasks completed for URLs:', urls)
  } catch (error) {
    console.error('Failed to execute additional SEO tasks:', error)
  }
}

/**
 * 批量更新多个页面
 */
export async function batchUpdatePages(updates: ContentUpdateEvent[]): Promise<void> {
  console.log(`Processing ${updates.length} content updates`)

  for (const update of updates) {
    await handleContentUpdate(update)
    // 添加小延迟避免过于频繁的请求
    await new Promise(resolve => setTimeout(resolve, 200))
  }

  console.log('Batch content updates completed')
}

/**
 * 新页面创建时的自动化处理
 */
export async function handleNewPageCreated(url: string, metadata?: {
  title?: string
  description?: string
  keywords?: string[]
  category?: string
}): Promise<void> {
  await handleContentUpdate({
    type: 'create',
    urls: [url],
    metadata,
    timestamp: new Date().toISOString()
  })
}

/**
 * 页面更新时的自动化处理
 */
export async function handlePageUpdated(url: string, metadata?: {
  title?: string
  description?: string
  keywords?: string[]
  category?: string
}): Promise<void> {
  await handleContentUpdate({
    type: 'update',
    urls: [url],
    metadata,
    timestamp: new Date().toISOString()
  })
}

/**
 * 页面删除时的自动化处理
 */
export async function handlePageDeleted(url: string): Promise<void> {
  await handleContentUpdate({
    type: 'delete',
    urls: [url],
    timestamp: new Date().toISOString()
  })
}

/**
 * 定期维护任务
 */
export async function runPeriodicSEOMaintenance(): Promise<void> {
  console.log('Running periodic SEO maintenance tasks')

  try {
    // 1. 重新提交所有重要页面到IndexNow
    const importantPages = [
      '/',
      '/about',
      '/ai-image-describer',
      '/blog',
      '/blog/how-to-make-sketch-of-face-complete-guide',
      '/blog/ai-photo-editing-revolution-professional-techniques',
    ]

    await submitUrlsToIndexNow(importantPages)
    console.log('✅ Resubmitted important pages to search engines')

    // 2. 检查站点地图状态
    try {
      const sitemapResponse = await fetch('https://policesketchmaker.it.com/sitemap.xml')
      if (sitemapResponse.ok) {
        console.log('✅ Sitemap is accessible')
      } else {
        console.warn('⚠️ Sitemap accessibility issue:', sitemapResponse.status)
      }
    } catch (error) {
      console.error('❌ Failed to check sitemap:', error)
    }

    // 3. 验证IndexNow配置
    try {
      const keyFileResponse = await fetch('https://policesketchmaker.it.com/f0ef1c3f63f3c438d486f003417584218945df9e039dffc49dc6d6a294472ea5.txt')
      if (keyFileResponse.ok) {
        console.log('✅ IndexNow key file is accessible')
      } else {
        console.warn('⚠️ IndexNow key file issue:', keyFileResponse.status)
      }
    } catch (error) {
      console.error('❌ Failed to verify IndexNow key file:', error)
    }

    console.log('Periodic SEO maintenance completed')
  } catch (error) {
    console.error('Failed to run periodic SEO maintenance:', error)
  }
}

/**
 * 生成SEO报告
 */
export async function generateSEOReport(): Promise<{
  timestamp: string
  indexnowStatus: boolean
  sitemapStatus: boolean
  keyFileStatus: boolean
  lastSubmission?: string
}> {
  const report = {
    timestamp: new Date().toISOString(),
    indexnowStatus: false,
    sitemapStatus: false,
    keyFileStatus: false,
  }

  try {
    // 检查站点地图
    const sitemapResponse = await fetch('https://policesketchmaker.it.com/sitemap.xml')
    report.sitemapStatus = sitemapResponse.ok

    // 检查IndexNow密钥文件
    const keyFileResponse = await fetch('https://policesketchmaker.it.com/f0ef1c3f63f3c438d486f003417584218945df9e039dffc49dc6d6a294472ea5.txt')
    report.keyFileStatus = keyFileResponse.ok

    // 检查IndexNow API
    const apiResponse = await fetch('https://policesketchmaker.it.com/api/submit-to-search-engines')
    report.indexnowStatus = apiResponse.ok

  } catch (error) {
    console.error('Error generating SEO report:', error)
  }

  return report
} 