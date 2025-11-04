'use client'

import { useEffect } from 'react'

interface GoogleAdSenseProps {
  className?: string
  adSlot?: string
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  size?: 'small' | 'medium' | 'large'
}

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function GoogleAdSense({ 
  className = '', 
  adSlot = '1234567890', // 需要替换为实际的广告位ID
  adFormat = 'auto',
  size = 'medium' 
}: GoogleAdSenseProps) {
  
  useEffect(() => {
    try {
      // 确保AdSense脚本已加载
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (error) {
      console.error('AdSense loading error:', error)
    }
  }, [])

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'h-16 min-h-[64px]'
      case 'large': 
        return 'h-32 min-h-[128px]'
      default:
        return 'h-24 min-h-[96px]'
    }
  }

  const getAdSize = () => {
    switch (size) {
      case 'small':
        return { width: '320', height: '50' }
      case 'large':
        return { width: '728', height: '90' }
      default:
        return { width: '468', height: '60' }
    }
  }

  const adSize = getAdSize()

  return (
    <div className={`
      ${getSizeClasses()} w-full 
      bg-slate-800/90 border border-slate-700 rounded-lg
      backdrop-blur-sm transition-all duration-300 
      flex items-center justify-center relative overflow-hidden
      ${className}
    `}>
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-50"></div>
      <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-full filter blur-lg"></div>
      
      {/* Google AdSense 广告容器 */}
      <ins 
        className="adsbygoogle block"
        style={{ 
          display: 'block',
          width: adSize.width + 'px',
          height: adSize.height + 'px'
        }}
        data-ad-client="ca-pub-9816094922761343"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
      
      {/* 赞助标识 */}
      <div className="absolute top-1 right-1 text-xs text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded">
        Sponsored
      </div>
      
      {/* 备用内容 - 当AdSense未加载时显示 */}
      <div className="absolute inset-0 flex items-center justify-center text-slate-400">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">Ad</span>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-300">Advertisement</div>
            <div className="text-xs text-slate-500">Powered by Google</div>
          </div>
        </div>
      </div>
    </div>
  )
}
