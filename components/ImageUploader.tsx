'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, Image, Zap, X } from 'lucide-react'
import toast from 'react-hot-toast'
import TipModal from './TipModal'

interface ImageUploaderProps {
  onGenerate: (imageUrl: string) => void
  onFeaturesExtracted: (features: string) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export default function ImageUploader({ onGenerate, onFeaturesExtracted, isLoading, setIsLoading }: ImageUploaderProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [showTipModal, setShowTipModal] = useState(false)
  const [features, setFeatures] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    multiple: false
  })

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setUploadedImage(null)
  }

  const extractFeatures = async () => {
    if (!uploadedImage) {
      toast.error('Please upload an image first')
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/extract-features', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageData: uploadedImage,
          prompt: `To accurately describe the suspect's facial features, please provide as much detail as possible in the following categories:

1. **Gender and approximate age**
2. **Ethnicity or skin tone**
3. **Face shape** (e.g., oval, round, square, long)
4. **Hair**:
   - Color
   - Length
   - Style (e.g., curly, straight, braided, shaved)
   - Facial hair (if any—beard, mustache, etc.)
5. **Eyes**:
   - Shape (e.g., almond, round, hooded)
   - Size
   - Color (if known)
   - Eyebrows (thickness, shape, distance from eyes)
6. **Nose**:
   - Size
   - Shape (e.g., narrow, wide, hooked, straight)
7. **Mouth**:
   - Size (wide, narrow)
   - Lip fullness (thin, average, full)
   - Any noticeable expressions or habits (e.g., smirking, frowning)
8. **Ears**:
   - Size
   - Any visible features (e.g., earrings, unusual shape)
9. **Jawline and chin**:
   - Prominent, square, receding, cleft, etc.
10. **Distinguishing Marks**:
   - Scars, tattoos, moles, birthmarks, acne, piercings, etc.
11. **Expression or Demeanor** (e.g., stern, smirking, anxious, calm):
12. **Anything else notable?**
   - You can answer in list form or paragraph—whichever is easier. The more detail, the better the resulting sketch.`,
          modelName: "glm-4v-plus-0111"
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to extract features')
      }

      const data = await response.json()
      onFeaturesExtracted(data.description)
      setFeatures(data.description)
      setShowTipModal(true)
    } catch (error) {
      console.error('Error extracting features:', error)
      toast.error('Failed to extract features. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const generateSketch = async (description: string) => {
    if (!description) {
      toast.error('Please extract features from the image first')
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
          prompt: `Police sketch based on photo: ${description}. Professional police sketch style, black and white, detailed facial features.`,
          width: 512,
          height: 512
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate sketch')
      }

      const data = await response.json()
      onGenerate(data.imageUrl)
      toast.success('Sketch generated successfully!')
    } catch (error) {
      console.error('Error generating sketch:', error)
      toast.error('Failed to generate sketch. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }



  return (
    <div>
      <TipModal isOpen={showTipModal} onClose={() => setShowTipModal(false)} />
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <Image className="h-5 w-5 mr-2" />
        Upload Photo & Extract Features
      </h3>

      {/* Upload Area with integrated preview */}
      <div className="mb-6">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors relative ${
            isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-400'
          }`}
          style={{ minHeight: '200px' }}
        >
          <input {...getInputProps()} />
          
          {uploadedImage ? (
            <>
              <div className="absolute top-2 right-2 z-10">
                <button 
                  onClick={clearImage}
                  className="bg-gray-800 bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 transition-all"
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
                <p className="text-xs text-gray-500 mt-1">Click to change image</p>
              </div>
            </>
          ) : isDragActive ? (
            <div className="h-full flex flex-col items-center justify-center">
              <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-primary-600">Drop the image here...</p>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center">
              <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 mb-2">Drag & drop an image here, or click to select</p>
              <p className="text-sm text-gray-500">Supports: JPG, PNG, GIF</p>
            </div>
          )}
        </div>
      </div>

      {/* Extract Features Button */}
      {uploadedImage && (
        <button
          onClick={extractFeatures}
          disabled={isLoading}
          className="w-full btn-secondary flex items-center justify-center space-x-2 mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Zap className="h-4 w-4" />
          <span>Extract Features</span>
        </button>
      )}
      

    </div>
  )
} 