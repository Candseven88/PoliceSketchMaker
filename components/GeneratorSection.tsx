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
    <section id="generator" className="relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Generate Your <span className="text-blue-400">Police Sketch</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Upload a photo or describe a person to create professional police-style sketches 
            using advanced AI technology.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700/50 inline-flex">
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === 'upload'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Upload className="w-5 h-5 mr-2" />
              Upload Photo
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ml-2 ${
                activeTab === 'custom'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Edit3 className="w-5 h-5 mr-2" />
              Describe Person
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            {activeTab === 'upload' ? (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Camera className="w-6 h-6 mr-3 text-blue-400" />
                  Upload Photo
                </h3>
                                 <ImageUploader
                   onGenerate={handleImageGenerated}
                   onFeaturesExtracted={handleFeaturesExtracted}
                   isLoading={isLoading}
                   setIsLoading={setIsLoading}
                 />
                
                {/* Extracted Features Display */}
                {extractedFeatures && (
                  <div className="mt-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600/50">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      Extracted Features
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{extractedFeatures}</p>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Edit3 className="w-6 h-6 mr-3 text-blue-400" />
                  Describe Person
                </h3>
                                 <CustomPromptForm
                   onGenerate={handleCustomPromptGenerated}
                   isLoading={isLoading}
                   setIsLoading={setIsLoading}
                   onPromptChange={handlePromptChange}
                 />
              </div>
            )}
          </div>

          {/* Output Section */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Image className="w-6 h-6 mr-3 text-blue-400" />
              Generated Sketch
            </h3>
            
                         <SketchGenerator
               prompt={getCurrentPrompt()}
               onGenerate={handleImageGenerated}
               isLoading={isLoading}
               setIsLoading={setIsLoading}
             />
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
              <Upload className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Photo Upload</h4>
            <p className="text-slate-400 text-sm">
              Upload any photo and our AI will extract facial features automatically to create accurate sketches.
            </p>
          </div>
          
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
              <Edit3 className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Custom Description</h4>
            <p className="text-slate-400 text-sm">
              Describe a person using text and generate professional police sketches from your description.
            </p>
          </div>
          
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
              <Camera className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">AI Technology</h4>
            <p className="text-slate-400 text-sm">
              Powered by advanced AI models trained on professional police sketch techniques and methods.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 