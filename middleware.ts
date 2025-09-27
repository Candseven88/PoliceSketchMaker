import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  // 处理带有utm参数或其他查询参数的首页请求
  if (url.pathname === '/' && url.search) {
    // 移除所有查询参数，重定向到干净的URL
    url.search = ''
    return NextResponse.redirect(url, 301)
  }
  
  // 处理其他页面的查询参数清理
  if (url.search && !url.pathname.startsWith('/api/')) {
    // 保留必要的查询参数，移除UTM参数
    const searchParams = new URLSearchParams(url.search)
    const allowedParams = ['page', 'category', 'tag'] // 允许的查询参数
    
    const hasUtmParams = Array.from(searchParams.keys()).some(key => 
      key.startsWith('utm_') || key.startsWith('ref')
    )
    
    if (hasUtmParams) {
      // 移除UTM参数，保留允许的参数
      const newSearchParams = new URLSearchParams()
      allowedParams.forEach(param => {
        const value = searchParams.get(param)
        if (value) {
          newSearchParams.set(param, value)
        }
      })
      
      url.search = newSearchParams.toString()
      return NextResponse.redirect(url, 301)
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * 匹配所有请求路径，除了以下开头的路径：
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 