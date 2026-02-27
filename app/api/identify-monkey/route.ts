import { NextRequest, NextResponse } from 'next/server'

const BIGMODEL_API_KEY = process.env.BIGMODEL_API_KEY
const BIGMODEL_API_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions'

export async function POST(request: NextRequest) {
  try {
    const { imageData } = await request.json()

    if (!imageData) {
      return NextResponse.json({ error: 'Image data is required' }, { status: 400 })
    }

    if (!BIGMODEL_API_KEY) {
      return NextResponse.json({ error: 'BigModel API key not configured' }, { status: 500 })
    }

    const base64Data = imageData.split(',')[1]

    const prompt = `You are a primatologist and wildlife expert. Analyze this image and determine if it contains a monkey or primate.

If the image contains a monkey or primate, respond in this exact JSON format:
{
  "isMonkey": true,
  "species": "Common name of the species",
  "scientificName": "Latin scientific name",
  "confidence": 0.95,
  "description": "A 2-3 sentence description of this species, including key identifying features visible in the photo.",
  "funFacts": [
    "Interesting fact 1 about this species",
    "Interesting fact 2 about this species",
    "Interesting fact 3 about this species"
  ],
  "conservationStatus": "e.g. Least Concern / Vulnerable / Endangered / Critically Endangered",
  "habitat": "Brief description of natural habitat",
  "punchRelevance": "If this is a Japanese macaque (Macaca fuscata), mention that Punch from Ichikawa City Zoo is also a Japanese macaque. Otherwise say something like: While not the same species as Punch (a Japanese macaque), this primate is equally fascinating."
}

If the image does NOT contain a monkey or primate, respond:
{
  "isMonkey": false,
  "message": "A witty, friendly one-liner about how this isn't a monkey but is still cool. Keep it light and fun.",
  "suggestion": "Try uploading a photo of a monkey or primate to learn about their species!"
}

Be scientifically accurate. If you're unsure of the exact species, give your best assessment and note the uncertainty in the description.`

    const response = await fetch(BIGMODEL_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${BIGMODEL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'glm-4v-plus-0111',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: { url: `data:image/jpeg;base64,${base64Data}` }
              },
              { type: 'text', text: prompt }
            ]
          }
        ],
        max_tokens: 1500,
        temperature: 0.2,
        do_sample: false
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('BigModel API error:', errorText)
      throw new Error(`BigModel API error: ${response.status}`)
    }

    const data = await response.json()

    if (!data.choices?.[0]?.message?.content) {
      throw new Error('Invalid response from BigModel API')
    }

    const content = data.choices[0].message.content
    const jsonMatch = content.match(/\{[\s\S]*\}/)

    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0])
      return NextResponse.json(parsed)
    }

    return NextResponse.json({
      isMonkey: false,
      message: "Hmm, we couldn't quite figure that one out.",
      suggestion: "Try uploading a clearer photo of a monkey or primate!"
    })

  } catch (error) {
    console.error('Error identifying monkey:', error)
    return NextResponse.json(
      { error: 'Failed to identify image', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
