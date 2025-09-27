import { NextRequest, NextResponse } from 'next/server'
import { submitUrlsToIndexNow, submitAllPagesToIndexNow } from '@/lib/indexnow'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { urls, action } = body

    let result: boolean = false
    let message: string = ''
    let submittedUrls: string[] = []

    if (action === 'all') {
      // 提交所有重要页面
      result = await submitAllPagesToIndexNow()
      submittedUrls = [
        '/',
        '/about',
        '/ai-image-describer',
        '/blog',
        '/blog/how-to-make-sketch-of-face-complete-guide',
        '/blog/ai-photo-editing-revolution-professional-techniques',
      ]
      message = 'All important pages submitted to search engines'
    } else if (urls && Array.isArray(urls)) {
      // 提交指定的URL列表
      result = await submitUrlsToIndexNow(urls)
      submittedUrls = urls
      message = `${urls.length} URLs submitted to search engines`
    } else {
      return NextResponse.json(
        { error: 'Invalid request. Provide either "action": "all" or "urls": [array]' },
        { status: 400 }
      )
    }

    if (result) {
      return NextResponse.json({
        success: true,
        message,
        submittedUrls,
        timestamp: new Date().toISOString(),
        searchEngines: ['Bing', 'Yandex', 'IndexNow API']
      })
    } else {
      return NextResponse.json(
        { 
          error: 'Failed to submit to search engines',
          submittedUrls,
          timestamp: new Date().toISOString()
        },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Search engine submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET请求用于验证端点状态
export async function GET() {
  return NextResponse.json({
    status: 'active',
    description: 'Search engine submission API',
    endpoints: {
      'POST /api/submit-to-search-engines': {
        description: 'Submit URLs to search engines via IndexNow',
        parameters: {
          action: 'all | custom',
          urls: 'string[] (required if action is not "all")'
        }
      }
    },
    supportedSearchEngines: ['Bing', 'Yandex', 'IndexNow API'],
    timestamp: new Date().toISOString()
  })
} 