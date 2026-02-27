'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, Camera, Loader2, RefreshCw, AlertCircle, Leaf, Info } from 'lucide-react'
import toast from 'react-hot-toast'

interface MonkeyResult {
  isMonkey: boolean
  species?: string
  scientificName?: string
  confidence?: number
  description?: string
  funFacts?: string[]
  conservationStatus?: string
  habitat?: string
  punchRelevance?: string
  message?: string
  suggestion?: string
}

export default function MonkeyIdentifier() {
  const [image, setImage] = useState<string | null>(null)
  const [result, setResult] = useState<MonkeyResult | null>(null)
  const [loading, setLoading] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return

    if (file.size > 10 * 1024 * 1024) {
      toast.error('Image must be under 10MB')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setImage(reader.result as string)
      setResult(null)
    }
    reader.readAsDataURL(file)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpg', '.jpeg', '.png', '.webp'] },
    maxFiles: 1,
  })

  const identifyMonkey = async () => {
    if (!image) return
    setLoading(true)
    setResult(null)

    try {
      const res = await fetch('/api/identify-monkey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageData: image }),
      })

      if (!res.ok) throw new Error('API request failed')

      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setResult(data)
    } catch (err) {
      toast.error('Something went wrong. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setImage(null)
    setResult(null)
  }

  const getStatusColor = (status?: string) => {
    if (!status) return 'text-slate-400'
    const s = status.toLowerCase()
    if (s.includes('least concern')) return 'text-green-400'
    if (s.includes('vulnerable')) return 'text-yellow-400'
    if (s.includes('endangered')) return 'text-orange-400'
    if (s.includes('critically')) return 'text-red-400'
    return 'text-slate-400'
  }

  return (
    <div className="max-w-2xl mx-auto">
      {!image ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
            isDragActive
              ? 'border-amber-400 bg-amber-400/10'
              : 'border-slate-600 hover:border-amber-400/60 hover:bg-slate-800/50'
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <div>
              <p className="text-xl font-semibold text-white mb-2">
                Drop a photo here, or click to upload
              </p>
              <p className="text-slate-400">
                JPG, PNG, or WebP — up to 10MB
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-700">
            <img src={image} alt="Uploaded photo" className="w-full max-h-96 object-contain bg-slate-900" />
          </div>

          {/* Action buttons */}
          {!result && !loading && (
            <div className="flex gap-4">
              <button
                onClick={identifyMonkey}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Upload className="w-5 h-5" />
                Identify This Primate
              </button>
              <button
                onClick={reset}
                className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300"
              >
                <RefreshCw className="w-5 h-5" />
                New Photo
              </button>
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center py-8 space-y-4">
              <Loader2 className="w-12 h-12 text-amber-400 animate-spin" />
              <p className="text-slate-300 text-lg">Our AI primatologist is taking a look...</p>
            </div>
          )}

          {/* Results */}
          {result && (
            <div className="space-y-6 animate-fade-in">
              {result.isMonkey ? (
                <>
                  {/* Species card */}
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-amber-500/30">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-amber-400">{result.species}</h3>
                        <p className="text-slate-400 italic">{result.scientificName}</p>
                      </div>
                      {result.confidence && (
                        <span className="bg-amber-500/20 text-amber-300 text-sm px-3 py-1 rounded-full">
                          {Math.round(result.confidence * 100)}% match
                        </span>
                      )}
                    </div>
                    <p className="text-slate-300 leading-relaxed">{result.description}</p>
                  </div>

                  {/* Conservation + Habitat */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-400 font-medium">Conservation Status</span>
                      </div>
                      <p className={`font-semibold ${getStatusColor(result.conservationStatus)}`}>
                        {result.conservationStatus}
                      </p>
                    </div>
                    <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
                      <div className="flex items-center gap-2 mb-2">
                        <Leaf className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-400 font-medium">Natural Habitat</span>
                      </div>
                      <p className="text-slate-200">{result.habitat}</p>
                    </div>
                  </div>

                  {/* Fun facts */}
                  {result.funFacts && result.funFacts.length > 0 && (
                    <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span>🐵</span> Fun Facts
                      </h4>
                      <ul className="space-y-3">
                        {result.funFacts.map((fact, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300">
                            <span className="text-amber-400 mt-1">•</span>
                            <span>{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Punch relevance */}
                  {result.punchRelevance && (
                    <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/20">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                        <p className="text-amber-200/90 text-sm leading-relaxed">{result.punchRelevance}</p>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Not a monkey */
                <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 text-center">
                  <div className="text-5xl mb-4">🤔</div>
                  <p className="text-xl text-white mb-2">{result.message}</p>
                  <p className="text-slate-400">{result.suggestion}</p>
                </div>
              )}

              <button
                onClick={reset}
                className="w-full flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300"
              >
                <RefreshCw className="w-5 h-5" />
                Try Another Photo
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
