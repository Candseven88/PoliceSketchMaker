import { NextRequest, NextResponse } from 'next/server'

const BIGMODEL_API_KEY = process.env.BIGMODEL_API_KEY

interface ImageDescriptionResponse {
  description: string
  altText: string
  keywords: string[]
}

export async function POST(request: NextRequest) {
  try {
    const { image, purpose = 'alt_text_description' } = await request.json()

    if (!image) {
      return NextResponse.json(
        { error: 'Image is required' },
        { status: 400 }
      )
    }

    if (!BIGMODEL_API_KEY) {
      console.error('BIGMODEL_API_KEY not configured')
      return NextResponse.json(
        { error: 'BigModel API key not configured. Please check your environment variables.' },
        { status: 500 }
      )
    }

    // Convert base64 image to the format expected by BigModel
    const imageBase64 = image.replace(/^data:image\/[a-z]+;base64,/, '')

    // Create optimized prompt for alt text generation
    const systemPrompt = `You are an expert AI image analyzer specialized in creating SEO-friendly alt text and detailed image descriptions. Your task is to analyze images and provide:

1. A comprehensive description of the image content
2. Concise, SEO-friendly alt text (under 125 characters)
3. Relevant keywords for SEO

Guidelines:
- Be descriptive but concise for alt text
- Include important visual elements, people, objects, and context
- Use natural language that helps visually impaired users understand the image
- Focus on what's actually visible in the image
- Avoid subjective interpretations
- Include relevant keywords for search engines

Please respond in JSON format with:
{
  "description": "detailed description of the image",
  "altText": "concise alt text under 125 characters",
  "keywords": ["keyword1", "keyword2", "keyword3"]
}`

    const userPrompt = purpose === 'alt_text_description' 
      ? "Please analyze this image and provide a detailed description, SEO-friendly alt text, and relevant keywords. Focus on making the alt text accessible and descriptive for screen readers while being concise and SEO-optimized."
      : "Please describe what you see in this image in detail."

    console.log('Starting BigModel API call for image description with GLM-4.5V model')

    const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BIGMODEL_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'glm-4.5v',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: `${systemPrompt}\n\n${userPrompt}`
              },
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/jpeg;base64,${imageBase64}`
                }
              }
            ]
          }
        ],
        max_tokens: 2000,
        temperature: 0.3,
        stream: false
      })
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('BigModel API error:', errorData)
      throw new Error(`BigModel API error: ${response.status} - ${errorData}`)
    }

    const data = await response.json()
    console.log('BigModel API response received successfully')

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Invalid response format from BigModel API')
    }

    const content = data.choices[0].message.content

    try {
      // Try to parse JSON response
      const jsonMatch = content.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0])
        
        // Validate the response structure
        const result: ImageDescriptionResponse = {
          description: parsed.description || content,
          altText: parsed.altText || extractAltText(content),
          keywords: Array.isArray(parsed.keywords) ? parsed.keywords : extractKeywords(content)
        }

        // Ensure alt text is under 125 characters
        if (result.altText.length > 125) {
          result.altText = result.altText.substring(0, 122) + '...'
        }

        return NextResponse.json(result)
      } else {
        // Fallback: extract information from plain text response
        const result: ImageDescriptionResponse = {
          description: content,
          altText: extractAltText(content),
          keywords: extractKeywords(content)
        }

        return NextResponse.json(result)
      }
    } catch (parseError) {
      console.error('Error parsing BigModel response:', parseError)
      
      // Fallback response
      const result: ImageDescriptionResponse = {
        description: content,
        altText: extractAltText(content),
        keywords: extractKeywords(content)
      }

      return NextResponse.json(result)
    }

  } catch (error) {
    console.error('Error describing image:', error)
    return NextResponse.json(
      { 
        error: 'Failed to describe image',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Helper function to extract alt text from description
function extractAltText(description: string): string {
  // Take the first sentence or first 100 characters, whichever is shorter
  const firstSentence = description.split('.')[0]
  const altText = firstSentence.length > 125 
    ? description.substring(0, 122) + '...'
    : firstSentence

  return altText.trim()
}

// Helper function to extract keywords from description
function extractKeywords(description: string): string[] {
  // Simple keyword extraction - can be enhanced with NLP
  const words = description.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3)

  // Get unique words and limit to 10 most relevant
  const uniqueWords = Array.from(new Set(words))
  return uniqueWords.slice(0, 10)
} 