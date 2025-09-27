import { NextRequest, NextResponse } from 'next/server'

// IndexNow API密钥
const INDEXNOW_API_KEY = 'f0ef1c3f63f3c438d486f003417584218945df9e039dffc49dc6d6a294472ea5'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const key = searchParams.get('key')
  
  // 验证API密钥
  if (key === INDEXNOW_API_KEY) {
    return new NextResponse(INDEXNOW_API_KEY, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=86400', // 缓存24小时
      },
    })
  }
  
  return new NextResponse('Invalid key', { status: 400 })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // 验证请求格式
    if (!body.host || !body.key || !body.urlList) {
      return NextResponse.json(
        { error: 'Missing required fields: host, key, urlList' },
        { status: 400 }
      )
    }
    
    // 验证API密钥
    if (body.key !== INDEXNOW_API_KEY) {
      return NextResponse.json(
        { error: 'Invalid API key' },
        { status: 401 }
      )
    }
    
    // 验证主机
    if (body.host !== 'policesketchmaker.it.com') {
      return NextResponse.json(
        { error: 'Invalid host' },
        { status: 400 }
      )
    }
    
    // 记录提交的URL（在生产环境中可以记录到数据库或日志）
    console.log('IndexNow submission received:', {
      host: body.host,
      urlCount: body.urlList.length,
      urls: body.urlList,
      timestamp: new Date().toISOString()
    })
    
    return NextResponse.json(
      { 
        message: 'URLs submitted successfully',
        count: body.urlList.length,
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('IndexNow API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 