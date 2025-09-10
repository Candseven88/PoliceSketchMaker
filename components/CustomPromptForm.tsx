'use client'

import { useState } from 'react'
import { Edit3, Copy, Sparkles } from 'lucide-react'
import toast from 'react-hot-toast'

interface CustomPromptFormProps {
  onGenerate: (imageUrl: string) => void
  onPromptChange: (prompt: string) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

// Input templates
const inputTemplates = [
  {
    title: "Basic Description Template",
    template: "A [age] year old [gender] with [ethnicity] ethnicity, [hair color] hair, [hair style], [eye color] eyes, [face shape] face shape, [skin tone] skin tone.",
    example: "A 25 year old male with Asian ethnicity, black hair, short style, brown eyes, oval face shape, medium skin tone."
  },
  {
    title: "Detailed Features Template", 
    template: "[Age] year old [gender] with [ethnicity] ethnicity, [hair color] [hair style] hair, [eye color] eyes, [face shape] face shape, [nose type] nose, [mouth type] mouth, [skin tone] skin tone, [facial hair], [glasses].",
    example: "30 year old male with Caucasian ethnicity, brown short hair, blue eyes, square face shape, straight nose, thin lips, fair skin tone, has beard, wears glasses."
  },
  {
    title: "Special Features Template",
    template: "[Basic description], [special features], [clothing description].",
    example: "A 35 year old male with Asian ethnicity, black hair, wears glasses, has scar, wearing black jacket."
  }
]

// Professional template example
const professionalTemplate = `A police sketch of a male suspect in his 40s with light skin tone and an oval face shape. He has almond-shaped blue eyes, thick slightly arched eyebrows, and a straight, medium-width nose. His lips are full and set in a neutral expression. He is clean-shaven. His hair is short, slightly messy, light brown with hints of gray, and has an even hairline. He has medium-sized ears with attached lobes, a strong jawline, and a rounded chin. He wears a black blazer over a dark shirt and a gold chain necklace. The expression is calm and neutral. The sketch is in realistic pencil-drawn style, suitable for a police report.`

export default function CustomPromptForm({ onGenerate, onPromptChange, isLoading, setIsLoading }: CustomPromptFormProps) {
  const [customPrompt, setCustomPrompt] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState<string>('')

  const handleTemplateSelect = (template: string) => {
    setSelectedTemplate(template)
    setCustomPrompt(template)
    onPromptChange(template)
  }

  const handleTemplateExample = (example: string) => {
    setCustomPrompt(example)
    onPromptChange(example)
  }

  const handleProfessionalTemplate = () => {
    setCustomPrompt(professionalTemplate)
    onPromptChange(professionalTemplate)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success('Template copied to clipboard!')
  }

  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <Edit3 className="h-5 w-5 mr-2" />
        Custom Prompt
      </h3>
      
      {/* Input templates section */}
      <div className="mb-6">
        <h4 className="text-md font-medium text-white mb-3 flex items-center">
          <Sparkles className="h-4 w-4 mr-2" />
          Input Templates
        </h4>
        <div className="space-y-3">
          {inputTemplates.map((template, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3">
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-sm font-medium text-gray-800">{template.title}</h5>
                <button
                  onClick={() => copyToClipboard(template.template)}
                  className="text-gray-500 hover:text-gray-700"
                  title="Copy template"
                >
                  <Copy className="h-3 w-3" />
                </button>
              </div>
              <p className="text-xs text-gray-600 mb-2">{template.template}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleTemplateSelect(template.template)}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
                >
                  Use Template
                </button>
                <button
                  onClick={() => handleTemplateExample(template.example)}
                  className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200"
                >
                  View Example
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Describe the suspect in detail
          </label>
          <textarea
            value={customPrompt}
            onChange={(e) => {
              setCustomPrompt(e.target.value)
              onPromptChange(e.target.value)
            }}
            placeholder="Enter a detailed description of the suspect. For example: A 30-year-old Asian male with short black hair, brown eyes, square jaw, medium build, wearing a black jacket..."
            rows={6}
            className="input-field resize-none"
            disabled={isLoading}
          />
          <p className="text-sm text-gray-500 mt-1">
            Be as detailed as possible for better results. Include age, gender, ethnicity, hair, eyes, facial features, clothing, etc.
          </p>
        </div>
        
        {/* Professional template moved here */}
        <div className="border border-blue-200 rounded-lg p-3 bg-blue-50">
          <div className="flex justify-between items-start mb-2">
            <h5 className="text-sm font-medium text-blue-800">Professional Template</h5>
            <button
              onClick={() => copyToClipboard(professionalTemplate)}
              className="text-blue-500 hover:text-blue-700"
              title="Copy professional template"
              type="button"
            >
              <Copy className="h-3 w-3" />
            </button>
          </div>
          <p className="text-xs text-blue-600 mb-2">
            Comprehensive police sketch description with detailed facial features
          </p>
          <button
            type="button"
            onClick={handleProfessionalTemplate}
            className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded hover:bg-blue-300"
          >
            Use Professional Template
          </button>
        </div>
      </form>
    </div>
  )
} 