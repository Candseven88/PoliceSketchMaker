import { NextRequest, NextResponse } from 'next/server'

const APIFY_API_TOKEN = process.env.APIFY_API_TOKEN
const ACTOR_ID = 'GqzQFFeLfhdqXMaQG' // datastorm/text-to-image actor ID

export async function POST(request: NextRequest) {
  try {
    const { prompt, width = 512, height = 512 } = await request.json()

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      )
    }

    if (!APIFY_API_TOKEN) {
      console.error('APIFY_API_TOKEN not configured')
      return NextResponse.json(
        { error: 'Apify API token not configured. Please check your environment variables.' },
        { status: 500 }
      )
    }

    console.log('Starting Apify actor run with prompt:', prompt)

    // Start the Apify actor run
    const runResponse = await fetch(`https://api.apify.com/v2/acts/${ACTOR_ID}/runs?token=${APIFY_API_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt,
        width: parseInt(width),
        height: parseInt(height),
        num_images: 1,
        num_inference_steps: 20,
        guidance_scale: 7.5,
        negative_prompt: "blurry, low quality, distorted, deformed, ugly, bad anatomy"
      })
    })

    if (!runResponse.ok) {
      const errorData = await runResponse.text()
      console.error('Apify run error:', errorData)
      throw new Error(`Apify API error: ${runResponse.status} - ${errorData}`)
    }

    const runData = await runResponse.json()
    const runId = runData.data.id
    console.log('Apify run started with ID:', runId)

    // Poll for completion
    let attempts = 0
    const maxAttempts = 60 // 5 minutes with 5-second intervals
    let result

    while (attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 5000)) // Wait 5 seconds

      const statusResponse = await fetch(`https://api.apify.com/v2/acts/${ACTOR_ID}/runs/${runId}?token=${APIFY_API_TOKEN}`)
      
      if (!statusResponse.ok) {
        const errorData = await statusResponse.text()
        console.error('Status check error:', errorData)
        throw new Error(`Failed to check run status: ${statusResponse.status} - ${errorData}`)
      }

      const statusData = await statusResponse.json()
      console.log(`Attempt ${attempts + 1}: Status = ${statusData.data.status}`)
      
      if (statusData.data.status === 'SUCCEEDED') {
        // Get the results from the default dataset
        const datasetId = statusData.data.defaultDatasetId
        const resultsResponse = await fetch(`https://api.apify.com/v2/datasets/${datasetId}/items?token=${APIFY_API_TOKEN}`)
        
        if (!resultsResponse.ok) {
          const errorData = await resultsResponse.text()
          console.error('Results fetch error:', errorData)
          throw new Error(`Failed to get results: ${resultsResponse.status} - ${errorData}`)
        }

        const resultsData = await resultsResponse.json()
        console.log('Results data:', resultsData)
        
        if (resultsData.length > 0) {
          // Check for different possible result formats
          const firstResult = resultsData[0]
          
          if (firstResult.imageUrl) {
            result = firstResult.imageUrl
            break
          } else if (firstResult.url) {
            result = firstResult.url
            break
          } else if (firstResult.image) {
            result = firstResult.image
            break
          } else if (firstResult.data && firstResult.data.imageUrl) {
            result = firstResult.data.imageUrl
            break
          } else if (firstResult.output && firstResult.output.imageUrl) {
            result = firstResult.output.imageUrl
            break
          }
        }
      } else if (statusData.data.status === 'FAILED') {
        console.error('Actor run failed')
        throw new Error('Actor run failed')
      }

      attempts++
    }

    if (!result) {
      throw new Error('Timeout waiting for image generation')
    }

    console.log('Generated image URL:', result)
    return NextResponse.json({ imageUrl: result })

  } catch (error) {
    console.error('Error generating sketch:', error)
    return NextResponse.json(
      { 
        error: 'Failed to generate sketch',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 