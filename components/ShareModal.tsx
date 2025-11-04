'use client'

import { useState } from 'react'
import { X, Twitter, Facebook, Instagram, Copy, Check } from 'lucide-react'
import toast from 'react-hot-toast'

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
  onShareComplete: () => void
  shareText: string
  shareUrl: string
  title?: string
}

export default function ShareModal({ 
  isOpen, 
  onClose, 
  onShareComplete, 
  shareText, 
  shareUrl,
  title = "Share to Unlock"
}: ShareModalProps) {
  const [copiedLink, setCopiedLink] = useState(false)

  if (!isOpen) return null

  const handleSocialShare = (platform: string) => {
    const encodedText = encodeURIComponent(shareText)
    const encodedUrl = encodeURIComponent(shareUrl)
    let socialUrl = ''

    switch (platform) {
      case 'twitter':
        socialUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`
        break
      case 'facebook':
        socialUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`
        break
      case 'instagram':
        // Instagram doesn't support direct URL sharing, so we copy text for users to paste
        navigator.clipboard.writeText(`${shareText} ${shareUrl}`)
        toast.success('Share text copied! Open Instagram and paste in your story/post.')
        setTimeout(() => {
          onShareComplete()
        }, 1000)
        return
    }

    if (socialUrl) {
      const shareWindow = window.open(socialUrl, '_blank', 'width=600,height=400')
      
      // Check if sharing was completed (simplified - in real app you'd use proper social media APIs)
      const checkClosed = setInterval(() => {
        if (shareWindow?.closed) {
          clearInterval(checkClosed)
          onShareComplete()
          toast.success('Thank you for sharing! Your results are now unlocked.')
        }
      }, 1000)
    }
  }

  const copyShareLink = async () => {
    try {
      const fullShareText = `${shareText} ${shareUrl}`
      await navigator.clipboard.writeText(fullShareText)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2000)
      toast.success('Share text copied to clipboard!')
      
      // Consider this as sharing completion after a delay
      setTimeout(() => {
        onShareComplete()
        toast.success('Thank you for sharing! Your results are now unlocked.')
      }, 3000)
    } catch (error) {
      toast.error('Failed to copy link')
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
          <p className="text-slate-600 text-sm">
            Share your AI results on social media to unlock your detailed analysis for free!
          </p>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={() => handleSocialShare('twitter')}
            className="w-full flex items-center justify-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl transition-colors font-medium"
          >
            <Twitter className="h-5 w-5" />
            <span>Share on Twitter</span>
          </button>
          
          <button
            onClick={() => handleSocialShare('facebook')}
            className="w-full flex items-center justify-center space-x-3 bg-blue-700 hover:bg-blue-800 text-white py-3 px-4 rounded-xl transition-colors font-medium"
          >
            <Facebook className="h-5 w-5" />
            <span>Share on Facebook</span>
          </button>
          
          <button
            onClick={() => handleSocialShare('instagram')}
            className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-4 rounded-xl transition-colors font-medium"
          >
            <Instagram className="h-5 w-5" />
            <span>Share on Instagram</span>
          </button>
          
          <button
            onClick={copyShareLink}
            className="w-full flex items-center justify-center space-x-3 bg-slate-600 hover:bg-slate-700 text-white py-3 px-4 rounded-xl transition-colors font-medium"
          >
            {copiedLink ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
            <span>{copiedLink ? 'Copied!' : 'Copy Share Text'}</span>
          </button>
        </div>
        
        <div className="mt-6 pt-4 border-t border-slate-200">
          <p className="text-xs text-slate-500 text-center mb-3">
            Why do we ask you to share? It helps us reach more people who might enjoy our free AI tools! 🙏
          </p>
          <button
            onClick={onClose}
            className="w-full text-slate-500 hover:text-slate-700 py-2 text-sm transition-colors"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
}
