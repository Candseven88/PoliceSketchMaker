'use client'

import { ExternalLink } from 'lucide-react'

interface AdBannerProps {
  className?: string
  size?: 'small' | 'medium' | 'large'
  position?: 'header' | 'sidebar' | 'footer' | 'content'
}

export default function AdBanner({ 
  className = '', 
  size = 'medium',
  position = 'content'
}: AdBannerProps) {
  const adUrl = 'https://www.revenuecpmgate.com/cikdkajhd?key=7c981cc934a19fc9686bec2ab78594e3'
  
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'h-16 text-sm'
      case 'large': 
        return 'h-32 text-lg'
      default:
        return 'h-24 text-base'
    }
  }

  const getPositionStyles = () => {
    switch (position) {
      case 'header':
        return 'bg-slate-800/90 border-slate-700'
      case 'sidebar':
        return 'bg-slate-900/95 border-slate-700'
      case 'footer':
        return 'bg-slate-800/80 border-slate-600'
      default:
        return 'bg-gradient-to-r from-slate-800/90 to-slate-900/90 border-slate-700'
    }
  }

  return (
    <div className={`
      w-full ${getSizeClasses()} ${getPositionStyles()} 
      border rounded-lg backdrop-blur-sm transition-all duration-300 
      hover:bg-opacity-100 group relative overflow-hidden
      ${className}
    `}>
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-50"></div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full filter blur-xl"></div>
      
      <a
        href={adUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="h-full w-full flex items-center justify-between px-6 py-3 relative z-10 hover:scale-[1.02] transition-transform duration-200"
      >
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">Ad</span>
          </div>
          <div>
            <div className="text-white font-semibold">
              Professional Tools & Resources
            </div>
            <div className="text-slate-400 text-sm">
              Discover premium solutions for law enforcement
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 text-blue-400 group-hover:text-blue-300 transition-colors">
          <span className="text-sm font-medium">Learn More</span>
          <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>
      
      {/* 赞助标识 */}
      <div className="absolute top-1 right-1 text-xs text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded">
        Sponsored
      </div>
    </div>
  )
} 