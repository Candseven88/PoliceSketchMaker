import React from 'react'

interface StructuredDataProps {
  type: 'website' | 'article' | 'software' | 'organization'
  data?: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://policesketchmaker.it.com'
    
    switch (type) {
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Police Sketch Maker",
          "description": "Professional AI-powered police sketch generation tool for law enforcement and security professionals.",
          "url": baseUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Police Sketch Maker",
            "url": baseUrl,
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/icon.png`
            }
          },
          "sameAs": [
            `${baseUrl}/about`,
            `${baseUrl}/blog`
          ]
        }

      case 'software':
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Police Sketch Maker",
          "description": "AI-powered police sketch generation tool. Create professional police sketches from descriptions or photos using advanced AI technology.",
          "url": baseUrl,
          "applicationCategory": "SecurityApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0.80",
            "priceCurrency": "USD",
            "description": "Per sketch generation"
          },
          "featureList": [
            "AI-powered sketch generation",
            "Photo to sketch conversion",
            "Professional police sketch quality",
            "Multiple input methods",
            "Instant results"
          ],
          "screenshot": `${baseUrl}/icon.png`,
          "publisher": {
            "@type": "Organization",
            "name": "Police Sketch Maker"
          }
        }

      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Police Sketch Maker",
          "description": "Professional AI-powered police sketch generation tool for law enforcement and security professionals.",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/icon.png`,
            "width": 512,
            "height": 512
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "support@policesketchmaker.com"
          },
          "sameAs": [
            `${baseUrl}/about`,
            `${baseUrl}/blog`
          ],
          "knowsAbout": [
            "Police Sketch",
            "AI Image Generation",
            "Law Enforcement Technology",
            "Facial Recognition",
            "Criminal Investigation Tools"
          ]
        }

      case 'article':
        if (!data) return null
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image ? `${baseUrl}${data.image}` : `${baseUrl}/icon.png`,
          "author": {
            "@type": "Organization",
            "name": "Police Sketch Maker Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Police Sketch Maker",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/icon.png`
            }
          },
          "datePublished": data.publishedDate || new Date().toISOString(),
          "dateModified": data.modifiedDate || new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}${data.url || ''}`
          },
          "articleSection": data.category || "Tutorial",
          "keywords": data.keywords || "police sketch, AI, tutorial",
          "wordCount": data.wordCount || 1000,
          "inLanguage": "en-US"
        }

      default:
        return null
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData) {
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}

// 预定义的常用结构化数据组件
export function WebsiteStructuredData() {
  return <StructuredData type="website" />
}

export function SoftwareStructuredData() {
  return <StructuredData type="software" />
}

export function OrganizationStructuredData() {
  return <StructuredData type="organization" />
}

export function ArticleStructuredData(props: {
  title: string
  description: string
  image?: string
  url?: string
  publishedDate?: string
  modifiedDate?: string
  category?: string
  keywords?: string
  wordCount?: number
}) {
  return <StructuredData type="article" data={props} />
}

export function FaceRateStructuredData() {
  const baseUrl = 'https://policesketchmaker.it.com'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AI Face Rate Test",
    "description": "Free AI-powered face rate and beauty score calculator. Upload your photo and get an instant attractiveness rating based on scientific beauty standards.",
    "url": `${baseUrl}/face-rate`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free face rate analysis with social sharing unlock"
    },
    "featureList": [
      "AI-powered facial analysis",
      "Instant beauty score calculation",
      "Scientific attractiveness rating",
      "Social media sharing integration",
      "Privacy-protected analysis",
      "Free to use"
    ],
    "screenshot": `${baseUrl}/face-rate-screenshot.jpg`,
    "publisher": {
      "@type": "Organization",
      "name": "PoliceSketchMaker",
      "url": baseUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "15420",
      "bestRating": "5",
      "worstRating": "1"
    },
    "potentialAction": {
      "@type": "UseAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/face-rate`,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
} 