'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, X, Zap } from 'lucide-react'
import toast from 'react-hot-toast'

interface FaceRateUploaderProps {
  onImageUploaded: (imageData: string) => void
  onFaceRateGenerated: (result: any) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export default function FaceRateUploader({ 
  onImageUploaded, 
  onFaceRateGenerated, 
  isLoading, 
  setIsLoading 
}: FaceRateUploaderProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error('File size must be less than 10MB')
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const imageData = e.target?.result as string
        setUploadedImage(imageData)
        onImageUploaded(imageData)
      }
      reader.readAsDataURL(file)
    }
  }, [onImageUploaded])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    multiple: false,
    maxSize: 10 * 1024 * 1024 // 10MB
  })

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setUploadedImage(null)
  }

  const analyzeFaceRate = async () => {
    if (!uploadedImage) {
      toast.error('Please upload an image first')
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/rate-face', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageData: uploadedImage,
          analysisType: 'basic'
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to analyze face rate')
      }

      const data = await response.json()
      onFaceRateGenerated(data)
      toast.success('Face rate analysis complete! Share to unlock detailed results.')
    } catch (error) {
      console.error('Error analyzing face rate:', error)
      toast.error('Failed to analyze face rate. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      {/* Upload Area */}
      <div className="mb-6">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-300 relative ${
            isDragActive 
              ? 'border-pink-400 bg-pink-500/10' 
              : 'border-slate-600 hover:border-pink-400 hover:bg-pink-500/5'
          }`}
          style={{ minHeight: '200px' }}
        >
          <input {...getInputProps()} />
          
          {uploadedImage ? (
            <>
              <div className="absolute top-2 right-2 z-10">
                <button 
                  onClick={clearImage}
                  className="bg-slate-800 bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 transition-all"
                >
                  <X className="h-4 w-4 text-white" />
                </button>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="max-h-[180px] w-auto rounded-lg shadow-sm mb-2"
                />
                <p className="text-xs text-slate-300 mt-1">Click to change image</p>
              </div>
            </>
          ) : isDragActive ? (
            <div className="h-full flex flex-col items-center justify-center">
              <Upload className="h-12 w-12 mx-auto mb-4 text-pink-400" />
              <p className="text-pink-600 font-medium">Drop your photo here...</p>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center">
              <Upload className="h-12 w-12 mx-auto mb-4 text-slate-300" />
              <p className="text-slate-200 mb-2 font-medium">Drag & drop your photo here, or click to select</p>
              <p className="text-sm text-slate-400">Supports: JPG, PNG, WebP (max 10MB)</p>
            </div>
          )}
        </div>
      </div>

      {/* Analyze Button */}
      {uploadedImage && (
        <button
          onClick={analyzeFaceRate}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          <Zap className="h-5 w-5" />
          <span>{isLoading ? 'Analyzing Your Face Rate...' : 'Get My Face Rate Score'}</span>
        </button>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="mt-4 text-center">
          <div className="inline-flex items-center space-x-2 text-purple-400">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-400"></div>
            <span className="text-sm text-slate-200">AI is analyzing your facial features...</span>
          </div>
        </div>
      )}
    </div>
  )
}
