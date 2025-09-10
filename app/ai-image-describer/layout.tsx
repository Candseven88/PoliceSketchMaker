import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://policesketchmaker.com'),
}

export default function AIImageDescriberLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Image Describer',
    description: 'Free AI-powered image description tool that generates SEO-friendly alt text and detailed descriptions for any image. Perfect for improving website accessibility and search rankings.',
    url: 'https://policesketchmaker.com/ai-image-describer',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free AI image description service'
    },
    featureList: [
      'AI-powered image analysis',
      'SEO-friendly alt text generation',
      'Detailed image descriptions',
      'Keyword extraction',
      'Accessibility compliance',
      'Multiple image format support'
    ],
    publisher: {
      '@type': 'Organization',
      name: 'PoliceSketchMaker',
      url: 'https://policesketchmaker.com'
    },
    potentialAction: {
      '@type': 'UseAction',
      target: 'https://policesketchmaker.com/ai-image-describer',
      description: 'Upload an image to get AI-generated descriptions and alt text'
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Image Description',
        description: 'AI-generated descriptions of image content'
      },
      {
        '@type': 'Thing', 
        name: 'Alt Text',
        description: 'SEO-friendly alternative text for images'
      },
      {
        '@type': 'Thing',
        name: 'Accessibility',
        description: 'Web accessibility compliance for screen readers'
      }
    ]
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://policesketchmaker.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'AI Image Describer',
        item: 'https://policesketchmaker.com/ai-image-describer'
      }
    ]
  }

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Describe Images with AI',
    description: 'Step-by-step guide to generate AI-powered image descriptions and alt text',
    image: 'https://policesketchmaker.com/icon.png',
    totalTime: 'PT2M',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Upload Image',
        text: 'Upload your image file (JPG, PNG, WebP, GIF up to 10MB)',
        image: 'https://policesketchmaker.com/icon.png'
      },
      {
        '@type': 'HowToStep',
        name: 'AI Analysis',
        text: 'Our AI analyzes the image content, objects, people, and context',
        image: 'https://policesketchmaker.com/icon.png'
      },
      {
        '@type': 'HowToStep',
        name: 'Get Results',
        text: 'Receive detailed description, SEO-friendly alt text, and keywords',
        image: 'https://policesketchmaker.com/icon.png'
      },
      {
        '@type': 'HowToStep',
        name: 'Copy and Use',
        text: 'Copy the generated text and use it for alt attributes or content',
        image: 'https://policesketchmaker.com/icon.png'
      }
    ]
  }

  return (
    <>
      <Script
        id="image-describer-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="howto-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      {children}
    </>
  )
} 