import { NextRequest, NextResponse } from 'next/server'

const BIGMODEL_API_KEY = process.env.BIGMODEL_API_KEY
const BIGMODEL_API_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions'

export async function POST(request: NextRequest) {
  try {
    const { imageData, prompt, modelName = 'glm-4v-plus-0111' } = await request.json()

    if (!imageData) {
      return NextResponse.json(
        { error: 'Image data is required' },
        { status: 400 }
      )
    }

    if (!BIGMODEL_API_KEY) {
      return NextResponse.json(
        { error: 'BigModel API key not configured' },
        { status: 500 }
      )
    }

    // Extract base64 data from data URL
    const base64Data = imageData.split(',')[1]

    // Use the provided prompt or a default one
    const promptText = prompt || 'Analyze this person\'s facial features and provide a detailed description suitable for creating a police sketch. Focus on: gender, age range, ethnicity, hair color and style, eye color, face shape, skin tone, facial hair, glasses, and any distinctive features. Provide the description in English only.'

    const response = await fetch(BIGMODEL_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${BIGMODEL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: modelName,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/jpeg;base64,${base64Data}`
                }
              },
              {
                type: 'text',
                text: promptText
              }
            ]
          }
        ],
        max_tokens: 1500,
        temperature: 0.1,
        do_sample: false
      })
    })

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`BigModel API error: ${response.statusText}, ${errorText}`)
    }

    const data = await response.json()
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Invalid response from BigModel API')
    }

    const description = data.choices[0].message.content

    return NextResponse.json({ description })

  } catch (error) {
    console.error('Error extracting features:', error)
    return NextResponse.json(
      { error: 'Failed to extract features', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
} 