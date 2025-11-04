'use client'

import { useState } from 'react'
import { Camera, Star, Share2 } from 'lucide-react'
import FaceRateUploader from './FaceRateUploader'
import FaceRateDisplay from './FaceRateDisplay'
import ShareModal from './ShareModal'

export default function FaceRateSection() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [faceRateResult, setFaceRateResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)

  const handleImageUploaded = (imageData: string) => {
    setUploadedImage(imageData)
    setFaceRateResult(null)
    setIsUnlocked(false)
  }

  const handleFaceRateGenerated = (result: any) => {
    setFaceRateResult(result)
  }

  const handleShareComplete = () => {
    setIsUnlocked(true)
    setShowShareModal(false)
  }

  const handleUnlockClick = () => {
    setShowShareModal(true)
  }

  return (
    <section id="face-rate-tool" className="relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Discover Your
            </span>
            <span className="text-white block mt-2">Face Rate Score</span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Upload your photo and let our advanced AI analyze your facial features to calculate your beauty score. 
            Get instant results based on scientific attractiveness standards.
          </p>
        </div>

        {/* Main Tool Interface */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-slate-800/95 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Camera className="w-6 h-6 mr-3 text-pink-400" />
              Upload Your Photo
            </h3>
            
            <FaceRateUploader
              onImageUploaded={handleImageUploaded}
              onFaceRateGenerated={handleFaceRateGenerated}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />

            {/* Tips for Best Results */}
            <div className="mt-6 p-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg border border-pink-400/30 backdrop-blur-sm">
              <h4 className="text-sm font-semibold text-pink-400 mb-2 flex items-center">
                <span className="mr-2">📸</span>
                Tips for Best Results:
              </h4>
              <ul className="text-sm text-slate-200 space-y-1">
                <li>• Use a clear, front-facing photo</li>
                <li>• Ensure good lighting (natural light works best)</li>
                <li>• Keep a neutral or slight smile expression</li>
                <li>• Avoid heavy filters or editing</li>
              </ul>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-slate-800/95 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Star className="w-6 h-6 mr-3 text-purple-400" />
              Your Face Rate Results
            </h3>
            
            {!faceRateResult ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-4 border border-purple-400/30">
                  <Star className="w-8 h-8 text-purple-400" />
                </div>
                <p className="text-slate-200 mb-2 font-medium">Upload a photo to see your face rate score</p>
                <p className="text-sm text-slate-400">Our AI will analyze your facial features instantly</p>
              </div>
            ) : (
              <FaceRateDisplay
                result={faceRateResult}
                isUnlocked={isUnlocked}
                onUnlockClick={handleUnlockClick}
              />
            )}
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-pink-400/50 transition-all duration-300 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Instant Analysis</h4>
            <p className="text-slate-200 text-sm">
              Get your face rate score in seconds with our lightning-fast AI processing.
            </p>
          </div>
          
          <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Scientific Accuracy</h4>
            <p className="text-slate-200 text-sm">
              Based on peer-reviewed research in facial attractiveness and beauty standards.
            </p>
          </div>
          
          <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">100% Private</h4>
            <p className="text-slate-200 text-sm">
              Your photos are processed instantly and never stored on our servers.
            </p>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <ShareModal
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
          onShareComplete={handleShareComplete}
          shareText="I just discovered my face rate score! 😍 Want to know how attractive you are? Try this amazing AI face rate test!"
          shareUrl="https://policesketchmaker.it.com/face-rate"
          title="Share to Unlock Your Detailed Face Rate Results"
        />
      )}
    </section>
  )
}
