'use client'

import { useState } from 'react'
import { Star, Share2, Eye, EyeOff } from 'lucide-react'

interface FaceRateDisplayProps {
  result: {
    overallScore: number
    blurredScore: string
    dimensions: {
      facial_symmetry: number
      skin_quality: number
      eye_appeal: number
      facial_proportions: number
      smile_attractiveness: number
    }
    suggestions: string[]
    confidence: number
  }
  isUnlocked: boolean
  onUnlockClick: () => void
}

export default function FaceRateDisplay({ result, isUnlocked, onUnlockClick }: FaceRateDisplayProps) {
  const [showDetails, setShowDetails] = useState(false)

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-500'
    if (score >= 6) return 'text-blue-500'
    if (score >= 4) return 'text-yellow-500'
    return 'text-orange-500'
  }

  const getScoreGradient = (score: number) => {
    if (score >= 8) return 'from-green-400 to-emerald-600'
    if (score >= 6) return 'from-blue-400 to-blue-600'
    if (score >= 4) return 'from-yellow-400 to-orange-500'
    return 'from-orange-400 to-red-500'
  }

  const getDimensionInfo = (key: string) => {
    const dimensionMap: Record<string, { name: string; weight: string; color: string; description: string }> = {
      facial_symmetry: {
        name: 'Facial Symmetry',
        weight: '25%',
        color: 'text-pink-400',
        description: 'Measures left-right facial balance. Symmetrical faces are universally perceived as more attractive.'
      },
      skin_quality: {
        name: 'Skin Quality',
        weight: '20%',
        color: 'text-purple-400',
        description: 'Evaluates skin clarity, texture, and tone. Clear, healthy skin significantly impacts attractiveness.'
      },
      eye_appeal: {
        name: 'Eye Appeal',
        weight: '20%',
        color: 'text-blue-400',
        description: 'Assesses eye shape, size, and overall attractiveness. Eyes are often the most important facial feature.'
      },
      facial_proportions: {
        name: 'Facial Proportions',
        weight: '20%',
        color: 'text-teal-400',
        description: 'Checks golden ratio and classical proportions based on centuries of art and scientific research.'
      },
      smile_attractiveness: {
        name: 'Smile Attractiveness',
        weight: '15%',
        color: 'text-green-400',
        description: 'Evaluates mouth shape and expression. A genuine Duchenne smile significantly boosts attractiveness.'
      }
    }
    return dimensionMap[key] || { name: key.replace('_', ' '), weight: '0%', color: 'text-slate-400', description: 'No description available.' }
  }

  const getScoreLabel = (score: number) => {
    if (score >= 9) return 'Exceptional'
    if (score >= 8) return 'Excellent'
    if (score >= 7) return 'Good'
    if (score >= 6) return 'Above Average'
    if (score >= 5) return 'Average'
    if (score >= 4) return 'Below Average'
    return 'Poor'
  }

  const renderStars = (score: number, isBlurred: boolean = false) => {
    const stars = []
    const fullStars = Math.floor(score)
    const hasHalfStar = score % 1 >= 0.5

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className={`w-6 h-6 fill-current ${isBlurred ? 'text-slate-400' : 'text-yellow-400'}`} />
        )
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className={`w-6 h-6 ${isBlurred ? 'text-slate-300' : 'text-slate-300'}`} />
            <Star className={`w-6 h-6 fill-current ${isBlurred ? 'text-slate-400' : 'text-yellow-400'} absolute top-0 left-0`} style={{ clipPath: 'inset(0 50% 0 0)' }} />
          </div>
        )
      } else {
        stars.push(
          <Star key={i} className={`w-6 h-6 ${isBlurred ? 'text-slate-300' : 'text-slate-300'}`} />
        )
      }
    }
    return stars
  }

  return (
    <div className="space-y-6">
      {/* Main Score Display */}
      <div className="text-center">
        {isUnlocked ? (
          <>
            <div className="mb-4">
              <div className={`text-6xl font-bold bg-gradient-to-r ${getScoreGradient(result.overallScore)} bg-clip-text text-transparent`}>
                {result.overallScore.toFixed(1)}
              </div>
              <div className="text-slate-400 text-sm">out of 10.0</div>
            </div>
            <div className="flex justify-center space-x-1 mb-4">
              {renderStars(result.overallScore / 2)}
            </div>
          </>
        ) : (
          <>
            <div className="mb-4 relative">
              <div className="text-6xl font-bold text-slate-400 blur-sm">
                {result.overallScore.toFixed(1)}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-600">
                  <div className="text-2xl font-bold text-white">{result.blurredScore}</div>
                </div>
              </div>
              <div className="text-slate-400 text-sm mt-2">Share to see exact score</div>
            </div>
            <div className="flex justify-center space-x-1 mb-4">
              {renderStars(result.overallScore / 2, true)}
            </div>
          </>
        )}

        <div className="text-lg font-medium text-white mb-2">
          {result.overallScore >= 8 ? 'Exceptional Attractiveness' :
           result.overallScore >= 6 ? 'Above Average Attractiveness' :
           result.overallScore >= 4 ? 'Average Attractiveness' : 'Below Average Attractiveness'}
        </div>
        
        <div className="text-sm text-slate-300">
          Confidence: {(result.confidence * 100).toFixed(0)}%
        </div>
      </div>

      {/* Unlock Button */}
      {!isUnlocked && (
        <div className="text-center">
          <button
            onClick={onUnlockClick}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 mx-auto shadow-lg hover:shadow-xl"
          >
            <Share2 className="h-5 w-5" />
            <span>Share to Unlock Detailed Results</span>
          </button>
          <p className="text-xs text-slate-400 mt-2">
            Share on social media to see your exact score and detailed analysis
          </p>
        </div>
      )}

      {/* Detailed Analysis */}
      {isUnlocked && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-white">Detailed Analysis</h4>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 text-sm"
            >
              {showDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showDetails ? 'Hide' : 'Show'} Details</span>
            </button>
          </div>

          {showDetails && (
            <div className="space-y-4">
              {Object.entries(result.dimensions).map(([key, value]) => {
                const dimensionInfo = getDimensionInfo(key)
                return (
                  <div key={key} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-white capitalize">
                          {dimensionInfo.name}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${dimensionInfo.color} bg-opacity-20`}>
                          {dimensionInfo.weight}
                        </span>
                      </div>
                      <span className={`text-sm font-bold ${getScoreColor(value)}`}>
                        {value.toFixed(1)}/10
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex-1 bg-slate-600 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${getScoreGradient(value)}`}
                          style={{ width: `${(value / 10) * 100}%` }}
                        />
                      </div>
                      <span className={`text-xs font-medium ${getScoreColor(value)}`}>
                        {getScoreLabel(value)}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">
                      {dimensionInfo.description}
                    </p>
                  </div>
                )
              })}
            </div>
          )}

          {/* Improvement Suggestions */}
          {result.suggestions.length > 0 && (
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-400/30">
              <h5 className="text-sm font-semibold text-blue-400 mb-2 flex items-center">
                <span className="mr-2">💡</span>
                Enhancement Tips:
              </h5>
              <ul className="text-sm text-slate-200 space-y-1">
                {result.suggestions.map((suggestion, index) => (
                  <li key={index}>• {suggestion}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Disclaimer */}
          <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
            <p className="text-xs text-slate-300 text-center">
              <strong className="text-white">Remember:</strong> Beauty is subjective and this AI analysis is for entertainment purposes. 
              Your worth isn't defined by any score - you're unique and valuable just as you are! ✨
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
