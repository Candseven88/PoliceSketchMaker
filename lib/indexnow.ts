// IndexNow客户端库
// 支持Bing、Yandex等搜索引擎的快速索引

const INDEXNOW_API_KEY = 'f0ef1c3f63f3c438d486f003417584218945df9e039dffc49dc6d6a294472ea5'
const SITE_HOST = 'policesketchmaker.it.com'

// IndexNow支持的搜索引擎端点
const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow', // 通用端点
  'https://www.bing.com/indexnow',      // Bing
  'https://yandex.com/indexnow',        // Yandex
]

interface IndexNowSubmission {
  host: string
  key: string
  keyLocation?: string
  urlList: string[]
}

/**
 * 向IndexNow提交单个URL
 */
export async function submitUrlToIndexNow(url: string): Promise<boolean> {
  return submitUrlsToIndexNow([url])
}

/**
 * 向IndexNow提交多个URL
 */
export async function submitUrlsToIndexNow(urls: string[]): Promise<boolean> {
  if (!urls.length) {
    console.log('No URLs to submit to IndexNow')
    return true
  }

  // 确保所有URL都是完整的绝对URL
  const fullUrls = urls.map(url => {
    if (url.startsWith('http')) {
      return url
    }
    return `https://${SITE_HOST}${url.startsWith('/') ? '' : '/'}${url}`
  })

  const submission: IndexNowSubmission = {
    host: SITE_HOST,
    key: INDEXNOW_API_KEY,
    keyLocation: `https://${SITE_HOST}/${INDEXNOW_API_KEY}.txt`,
    urlList: fullUrls
  }

  console.log('Submitting to IndexNow:', {
    urlCount: fullUrls.length,
    urls: fullUrls
  })

  let successCount = 0
  const errors: string[] = []

  // 向所有支持的搜索引擎端点提交
  for (const endpoint of INDEXNOW_ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'PoliceSketchMaker-IndexNow/1.0',
        },
        body: JSON.stringify(submission),
      })

      if (response.ok) {
        successCount++
        console.log(`✅ Successfully submitted to ${endpoint}`)
      } else {
        const errorText = await response.text().catch(() => 'Unknown error')
        errors.push(`${endpoint}: ${response.status} - ${errorText}`)
        console.warn(`⚠️  Failed to submit to ${endpoint}: ${response.status}`)
      }
    } catch (error) {
      errors.push(`${endpoint}: ${error instanceof Error ? error.message : 'Unknown error'}`)
      console.error(`❌ Error submitting to ${endpoint}:`, error)
    }

    // 添加小延迟避免过于频繁的请求
    await new Promise(resolve => setTimeout(resolve, 100))
  }

  if (errors.length > 0) {
    console.warn('IndexNow submission errors:', errors)
  }

  return successCount > 0
}

/**
 * 提交网站所有重要页面到IndexNow
 */
export async function submitAllPagesToIndexNow(): Promise<boolean> {
  const importantPages = [
    '/',
    '/about',
    '/ai-image-describer',
    '/blog',
    '/blog/how-to-make-sketch-of-face-complete-guide',
    '/blog/ai-photo-editing-revolution-professional-techniques',
  ]

  return submitUrlsToIndexNow(importantPages)
}

/**
 * 当内容更新时自动提交到IndexNow
 */
export async function notifyContentUpdate(updatedUrls: string[]): Promise<void> {
  try {
    await submitUrlsToIndexNow(updatedUrls)
    console.log('Content update notification sent to search engines')
  } catch (error) {
    console.error('Failed to notify search engines of content update:', error)
  }
}

/**
 * 验证IndexNow配置是否正确
 */
export async function verifyIndexNowSetup(): Promise<boolean> {
  try {
    // 验证密钥文件是否可访问
    const keyFileUrl = `https://${SITE_HOST}/${INDEXNOW_API_KEY}.txt`
    const response = await fetch(keyFileUrl)
    
    if (response.ok) {
      const keyContent = await response.text()
      if (keyContent.trim() === INDEXNOW_API_KEY) {
        console.log('✅ IndexNow key file is correctly configured')
        return true
      } else {
        console.error('❌ IndexNow key file content mismatch')
        return false
      }
    } else {
      console.error('❌ IndexNow key file is not accessible')
      return false
    }
  } catch (error) {
    console.error('❌ Failed to verify IndexNow setup:', error)
    return false
  }
}

// 导出常量供其他模块使用
export { INDEXNOW_API_KEY, SITE_HOST } 