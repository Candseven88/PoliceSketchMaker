'use client'

import { useEffect } from 'react'

interface AdsterraAdProps {
  className?: string
  adType?: 'banner' | 'popup' | 'native'
  size?: 'small' | 'medium' | 'large'
}

export default function AdsterraAd({ 
  className = '', 
  adType = 'banner',
  size = 'medium' 
}: AdsterraAdProps) {
  
  useEffect(() => {
    // Adsterra 广告脚本加载
    const script = document.createElement('script')
    script.src = 'https://www.effectivegatecpm.com/cikdkajhd?key=7c981cc934a19fc9686bec2ab78594e3'
    script.async = true
    script.setAttribute('data-cfasync', 'false')
    
    // 添加到页面
    document.head.appendChild(script)
    
    // 清理函数
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
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

  const getAdTypeClasses = () => {
    switch (adType) {
      case 'popup':
        return 'fixed inset-0 z-50 bg-black/50 flex items-center justify-center'
      case 'native':
        return 'w-full bg-transparent'
      default:
        return 'w-full bg-slate-800/90 border border-slate-700 rounded-lg'
    }
  }

  return (
    <div className={`
      ${getSizeClasses()} ${getAdTypeClasses()} 
      backdrop-blur-sm transition-all duration-300 
      ${className}
    `}>
      {adType === 'banner' && (
        <div className="h-full w-full flex items-center justify-center relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-teal-600/5 opacity-50"></div>
          <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/10 rounded-full filter blur-lg"></div>
          
          {/* Adsterra 广告容器 */}
          <div 
            id="adsterra-container" 
            className="w-full h-full flex items-center justify-center relative z-10"
          >
            {/* 加载状态 */}
            <div className="flex items-center space-x-3 text-slate-400">
              <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">Ad</span>
              </div>
              <div>
                <div className="text-sm font-medium text-slate-300">Loading Advertisement...</div>
                <div className="text-xs text-slate-500">Powered by Adsterra</div>
              </div>
            </div>
          </div>
          
          {/* 赞助标识 */}
          <div className="absolute top-1 right-1 text-xs text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded">
            Sponsored
          </div>
        </div>
      )}
      
      {adType === 'native' && (
        <div className="w-full">
          {/* Native 广告容器 */}
          <div id="adsterra-native" className="w-full"></div>
        </div>
      )}
      
      {adType === 'popup' && (
        <div className="bg-white rounded-lg p-6 max-w-md mx-4 relative">
          <button 
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={() => {
              // 关闭弹窗逻辑
              const popup = document.querySelector('[data-adsterra-popup]')
              if (popup) popup.remove()
            }}
          >
            ✕
          </button>
          <div id="adsterra-popup" className="w-full"></div>
        </div>
      )}
    </div>
  )
}
