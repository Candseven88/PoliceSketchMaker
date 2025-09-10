'use client'

import { useState, useEffect } from 'react'
import { Heart, X } from 'lucide-react'

interface TipModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TipModal({ isOpen, onClose }: TipModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  
  // Animation effect
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])
  
  if (!isOpen) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        className={`bg-slate-900 shadow-lg shadow-blue-500/10 rounded-lg p-6 w-80 border border-slate-700 relative transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <button
          className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="flex items-center mb-4">
          <div className="bg-blue-900/30 p-2 rounded-lg mr-3">
            <Heart className="h-5 w-5 text-blue-400" />
          </div>
          <h4 className="text-lg font-semibold text-white">Enjoying the Feature?</h4>
        </div>
        
        <p className="text-slate-300 mb-5 text-sm">
          If you found this helpful, consider leaving a tip to support our work and help us improve the service!
        </p>
        
        <a
          href="https://candseven4.gumroad.com/l/jmjgn"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-block text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium py-2.5 px-4 rounded-md transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-0.5"
        >
          Support Our Work
        </a>
      </div>
    </div>
  )
} 