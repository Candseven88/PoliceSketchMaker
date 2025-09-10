import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { userInput } = await request.json()

    if (!userInput) {
      return NextResponse.json(
        { error: 'User input is required' },
        { status: 400 }
      )
    }

    // Check if BIGMODEL_API_KEY is configured
    if (!process.env.BIGMODEL_API_KEY) {
      console.error('BIGMODEL_API_KEY not configured')
      return NextResponse.json(
        { error: 'BigModel API key not configured. Please check your environment variables.' },
        { status: 500 }
      )
    }

    console.log('Calling GLM-4-Flash-250414 with input:', userInput)

    // Call GLM-4-Flash-250414 model
    const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.BIGMODEL_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'glm-4-flash-250414',
        messages: [
          {
            role: 'system',
            content: `You are a professional police sketch expert. Your task is to convert user descriptions of suspects into standardized, detailed facial feature descriptions for police sketch generation.

Please output in the following format:
1. Age and gender
2. Ethnicity/race
3. Hair characteristics (color, length, style)
4. Eye characteristics (color, shape)
5. Facial features (face shape, nose, mouth, chin)
6. Skin tone
7. Special features (scars, tattoos, birthmarks, glasses, etc.)
8. Clothing description

Ensure the description is accurate, detailed, and suitable for police sketch generation. If the user description is insufficient, make reasonable assumptions based on common features. Use professional, clear English language suitable for law enforcement documentation.`
          },
          {
            role: 'user',
            content: `Please convert the following suspect description into a standardized facial feature description: ${userInput}`
          }
        ],
        temperature: 0.3,
        max_tokens: 500,
        do_sample: false
      })
    })

    console.log('GLM API response status:', response.status)

    if (!response.ok) {
      const errorData = await response.text()
      console.error('GLM API Error:', errorData)
      
      // If GLM API fails, use fallback processing
      console.log('Using fallback processing due to GLM API error')
      const fallbackPrompt = processUserInputLocally(userInput)
      
      return NextResponse.json({
        processedPrompt: fallbackPrompt,
        originalInput: userInput,
        note: 'Processed using fallback method due to GLM API error'
      })
    }

    const data = await response.json()
    console.log('GLM API response data:', data)
    
    const processedPrompt = data.choices[0].message.content
    console.log('Processed prompt:', processedPrompt)

    return NextResponse.json({
      processedPrompt: processedPrompt,
      originalInput: userInput
    })

  } catch (error) {
    console.error('Error processing prompt:', error)
    
    // Use fallback processing if GLM API fails
    try {
      const { userInput } = await request.json()
      const fallbackPrompt = processUserInputLocally(userInput)
      
      return NextResponse.json({
        processedPrompt: fallbackPrompt,
        originalInput: userInput,
        note: 'Processed using fallback method due to error'
      })
    } catch (fallbackError) {
      return NextResponse.json(
        { 
          error: 'Failed to process prompt',
          details: error instanceof Error ? error.message : 'Unknown error'
        },
        { status: 500 }
      )
    }
  }
}

// Fallback function to process user input locally
function processUserInputLocally(userInput: string): string {
  console.log('Processing user input locally:', userInput)
  
  // Basic processing to enhance the user input
  let processedPrompt = userInput.trim()
  
  // Add police sketch context if not present
  if (!processedPrompt.toLowerCase().includes('police sketch')) {
    processedPrompt = `Police sketch of ${processedPrompt}`
  }
  
  // Add professional styling if not present
  if (!processedPrompt.toLowerCase().includes('professional') && !processedPrompt.toLowerCase().includes('style')) {
    processedPrompt += '. Professional police sketch style, black and white, detailed facial features.'
  }
  
  // Enhance basic descriptions
  const enhancements = [
    { pattern: /\b(\d+)\s*year\s*old\b/i, replacement: '$1-year-old' },
    { pattern: /\bmale\b/i, replacement: 'male suspect' },
    { pattern: /\bfemale\b/i, replacement: 'female suspect' },
    { pattern: /\bblack\s+hair\b/i, replacement: 'black hair' },
    { pattern: /\bbrown\s+hair\b/i, replacement: 'brown hair' },
    { pattern: /\bblonde\s+hair\b/i, replacement: 'blonde hair' },
    { pattern: /\bblue\s+eyes\b/i, replacement: 'blue eyes' },
    { pattern: /\bbrown\s+eyes\b/i, replacement: 'brown eyes' },
    { pattern: /\bgreen\s+eyes\b/i, replacement: 'green eyes' }
  ]
  
  enhancements.forEach(enhancement => {
    processedPrompt = processedPrompt.replace(enhancement.pattern, enhancement.replacement)
  })
  
  console.log('Processed prompt (fallback):', processedPrompt)
  return processedPrompt
} 