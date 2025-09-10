'use client'

import { useState, useRef } from 'react'
import { Zap, Download, Share2, Twitter, Facebook, Instagram, Copy, Check } from 'lucide-react'
import toast from 'react-hot-toast'
import PayPalPaymentButton from './PayPalPaymentButton'

interface SketchGeneratorProps {
  prompt: string
  onGenerate: (imageUrl: string) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export default function SketchGenerator({ prompt, onGenerate, isLoading, setIsLoading }: SketchGeneratorProps) {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [isUnlocked, setIsUnlocked] = useState(false) // 是否已解锁（付费或分享）
  const [showShareModal, setShowShareModal] = useState(false)
  const [shareCompleted, setShareCompleted] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)
  const downloadLinkRef = useRef<HTMLAnchorElement>(null)

  const handlePaymentSuccess = async () => {
    setIsUnlocked(true)
    toast.success('Payment successful! You can now download your sketch.')
  }

  const generateSketch = async () => {
    if (!prompt.trim()) {
      toast.error('Please provide a description for the sketch')
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/generate-sketch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `Police sketch: ${prompt}. Professional police sketch style, black and white, detailed facial features.`,
          width: 512,
          height: 512
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate sketch')
      }

      const data = await response.json()
      setGeneratedImage(data.imageUrl)
      onGenerate(data.imageUrl)
      toast.success('Sketch generated successfully! Pay $0.80 or share to download.')
    } catch (error) {
      console.error('Error generating sketch:', error)
      toast.error('Failed to generate sketch. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const downloadImage = async () => {
    if (!generatedImage) return

    try {
      const response = await fetch(generatedImage)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `police-sketch-${Date.now()}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
      toast.success('Sketch downloaded successfully!')
    } catch (error) {
      console.error('Error downloading image:', error)
      toast.error('Failed to download image. Please try again.')
    }
  }

  const handleDownloadClick = () => {
    if (isUnlocked) {
      downloadImage()
    } else {
      toast.error('Please pay $0.80 or share on social media to unlock download.')
    }
  }

  const generateShareText = () => {
    return `Check out this AI-generated police sketch! 🎨✨ Created with PoliceSketchMaker - the ultimate AI tool for generating professional police sketches. Try it yourself at https://policesketchmaker.it.com/ #PoliceSketch #AIArt #SketchGenerator`
  }

  const generateShareUrl = () => {
    return `https://policesketchmaker.it.com/?ref=social`
  }

  const handleSocialShare = (platform: string) => {
    const shareText = encodeURIComponent(generateShareText())
    const shareUrl = encodeURIComponent(generateShareUrl())
    let socialUrl = ''

    switch (platform) {
      case 'twitter':
        socialUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`
        break
      case 'facebook':
        socialUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`
        break
      case 'instagram':
        // Instagram doesn't support direct URL sharing, so we copy text for users to paste
        navigator.clipboard.writeText(generateShareText() + ' ' + generateShareUrl())
        toast.success('Share text copied! Open Instagram and paste in your story/post.')
        setShareCompleted(true)
        setIsUnlocked(true)
        setShowShareModal(false)
        return
    }

    if (socialUrl) {
      const shareWindow = window.open(socialUrl, '_blank', 'width=600,height=400')
      
      // Check if sharing was completed (simplified - in real app you'd use proper social media APIs)
      const checkClosed = setInterval(() => {
        if (shareWindow?.closed) {
          clearInterval(checkClosed)
          setShareCompleted(true)
          setIsUnlocked(true)
          setShowShareModal(false)
          toast.success('Thank you for sharing! You can now download your sketch for free.')
        }
      }, 1000)
    }
  }

  const copyShareLink = async () => {
    try {
      const shareText = generateShareText() + '\n\n' + generateShareUrl()
      await navigator.clipboard.writeText(shareText)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2000)
      toast.success('Share text copied to clipboard!')
      
      // Consider this as sharing completion
      setTimeout(() => {
        setShareCompleted(true)
        setIsUnlocked(true)
        setShowShareModal(false)
        toast.success('Thank you for sharing! You can now download your sketch for free.')
      }, 3000)
    } catch (error) {
      toast.error('Failed to copy link')
    }
  }

  return (
    <div className="space-y-4">
      {/* Generate Button */}
      {!generatedImage && (
        <button
          onClick={generateSketch}
          disabled={isLoading || !prompt.trim()}
          className="w-full btn-primary flex items-center justify-center space-x-2"
        >
          <Zap className="h-4 w-4" />
          <span>{isLoading ? 'Generating...' : 'Generate Police Sketch (Free Preview)'}</span>
        </button>
      )}

      {/* Generated Image Display */}
      {generatedImage && (
        <div className="space-y-4">
          <div className="relative">
            <img
              src={generatedImage}
              alt="Generated police sketch"
              className={`w-full h-auto rounded-lg shadow-sm ${!isUnlocked ? 'blur-sm' : ''}`}
            />
            {!isUnlocked && (
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-lg font-semibold mb-2">Preview Generated!</h3>
                  <p className="text-sm">Pay $0.80 or share on social media to unlock high-quality download</p>
                </div>
              </div>
            )}
          </div>

          {/* Download and Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleDownloadClick}
              className={`w-full flex items-center justify-center space-x-2 ${
                isUnlocked 
                  ? 'btn-secondary' 
                  : 'bg-gray-600 text-gray-300 cursor-not-allowed hover:bg-gray-600'
              }`}
              disabled={!isUnlocked}
            >
              <Download className="h-4 w-4" />
              <span>{isUnlocked ? 'Download High-Quality Sketch' : 'Download Locked'}</span>
            </button>

            {!isUnlocked && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Payment Option */}
                <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                  <h4 className="text-sm font-medium text-blue-800 mb-2">💳 Pay to Download</h4>
                  <p className="text-xs text-blue-700 mb-3">
                    Get instant access to high-quality download
                  </p>
                  <div className="mb-3">
                    <p className="text-lg font-bold text-blue-800">$0.80 USD</p>
                  </div>
                  <PayPalPaymentButton
                    onSuccess={handlePaymentSuccess}
                    disabled={isLoading}
                  />
                </div>

                {/* Share Option */}
                <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                  <h4 className="text-sm font-medium text-green-800 mb-2">🎉 Share for Free</h4>
                  <p className="text-xs text-green-700 mb-3">
                    Share on social media and download for free
                  </p>
                  <button
                    onClick={() => setShowShareModal(true)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center space-x-2"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Share & Download Free</span>
                  </button>
                </div>
              </div>
            )}

            {isUnlocked && shareCompleted && (
              <div className="bg-green-100 border border-green-200 rounded-lg p-3 text-center">
                <p className="text-green-800 text-sm font-medium">
                  🎉 Thank you for sharing! Your download is now unlocked.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold mb-4">Share to Unlock Free Download</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Share your AI-generated police sketch on social media to unlock free download!
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleSocialShare('twitter')}
                className="w-full flex items-center justify-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span>Share on Twitter</span>
              </button>
              
              <button
                onClick={() => handleSocialShare('facebook')}
                className="w-full flex items-center justify-center space-x-3 bg-blue-700 hover:bg-blue-800 text-white py-3 px-4 rounded-md transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span>Share on Facebook</span>
              </button>
              
              <button
                onClick={() => handleSocialShare('instagram')}
                className="w-full flex items-center justify-center space-x-3 bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-md transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>Share on Instagram</span>
              </button>
              
              <button
                onClick={copyShareLink}
                className="w-full flex items-center justify-center space-x-3 bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 rounded-md transition-colors"
              >
                {copiedLink ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                <span>{copiedLink ? 'Copied!' : 'Copy Share Text'}</span>
              </button>
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <button
                onClick={() => setShowShareModal(false)}
                className="w-full text-gray-500 hover:text-gray-700 py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 