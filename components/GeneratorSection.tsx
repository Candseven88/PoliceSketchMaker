'use client'

import { useState } from 'react'
import { Upload, Edit3, Camera, FileText, Image } from 'lucide-react'
import toast from 'react-hot-toast'
import ImageUploader from './ImageUploader'
import CustomPromptForm from './CustomPromptForm'
import SketchGenerator from './SketchGenerator'

export default function GeneratorSection() {
  const [activeTab, setActiveTab] = useState<'custom' | 'upload'>('upload')
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [extractedFeatures, setExtractedFeatures] = useState<string | null>(null)
  const [currentPrompt, setCurrentPrompt] = useState<string>('')

  const handleImageGenerated = (imageUrl: string) => {
    setGeneratedImage(imageUrl)
    toast.success('Sketch generated successfully!')
  }

  const handleFeaturesExtracted = (features: string) => {
    setExtractedFeatures(features)
    setCurrentPrompt(features) // Set the extracted features as the prompt for sketch generation
    setGeneratedImage(null) // Clear any previously generated image
  }

  const handleCustomPromptGenerated = (imageUrl: string) => {
    setGeneratedImage(imageUrl)
    setExtractedFeatures(null) // Clear extracted features when generating from custom prompt
    toast.success('Sketch generated successfully!')
  }

  const handlePromptChange = (prompt: string) => {
    setCurrentPrompt(prompt)
  }

  // Get the current prompt based on the active tab
  const getCurrentPrompt = () => {
    if (activeTab === 'upload' && extractedFeatures) {
      return extractedFeatures
    }
    return currentPrompt
  }

  return (
    <section id="generator" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-security-dark to-slate-950"></div>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #64748b 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">AI Police Sketch Generator</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Generate professional-quality police sketches in seconds using our advanced AI technology.
            Choose between describing a person or uploading a photo.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-900/70 backdrop-blur-sm rounded-lg p-1 shadow-lg border border-slate-800">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab('upload')}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'upload'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Upload className="h-4 w-4 inline mr-2" />
                Upload Photo
              </button>
              <button
                onClick={() => setActiveTab('custom')}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'custom'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Edit3 className="h-4 w-4 inline mr-2" />
                Custom Prompt
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="card p-6 animate-fade-in">
            {activeTab === 'upload' ? (
              <ImageUploader 
                onGenerate={handleImageGenerated} 
                onFeaturesExtracted={handleFeaturesExtracted}
                isLoading={isLoading} 
                setIsLoading={setIsLoading} 
              />
            ) : (
              <CustomPromptForm 
                onGenerate={handleCustomPromptGenerated} 
                onPromptChange={handlePromptChange}
                isLoading={isLoading} 
                setIsLoading={setIsLoading} 
              />
            )}

            {/* Show extracted features */}
            {extractedFeatures && activeTab === 'upload' && (
              <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="flex items-center mb-3">
                  <FileText className="h-5 w-5 text-blue-400 mr-2" />
                  <h4 className="text-md font-medium text-white">Extracted Features</h4>
                </div>
                <p className="text-slate-300 text-sm whitespace-pre-line">{extractedFeatures}</p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(extractedFeatures);
                    toast.success('Features copied to clipboard!');
                  }}
                  className="mt-3 btn-secondary text-sm py-1 px-3"
                >
                  Copy Text
                </button>
              </div>
            )}
          </div>

          {/* Result Section - SketchGenerator */}
          <div className="card p-6 animate-fade-in">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Image className="h-5 w-5 mr-2 text-blue-400" />
              AI Police Sketch Generator
            </h3>
            
            <SketchGenerator
              prompt={getCurrentPrompt()}
              onGenerate={handleImageGenerated}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </div>
        </div>
      </div>
    </section>
  )
} 