import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Punch the Monkey — AI Primate Identifier | Inspired by Punch the Japanese Macaque',
  description: 'Inspired by Punch, the beloved baby macaque from Ichikawa City Zoo. Upload any photo and our AI identifies the primate species with fun facts, conservation status, and scientific info. 100% free, animal-friendly, and educational.',
  keywords: [
    'punch the monkey', 'punch monkey', 'punch macaque', 'japanese macaque',
    'monkey identifier', 'primate identifier', 'monkey species', 'identify monkey',
    'ichikawa city zoo', 'baby macaque', 'punch baby monkey',
    'AI animal identifier', 'primate species identifier', 'monkey breed identifier',
    'what monkey is this', 'monkey recognition AI',
  ],
  alternates: {
    canonical: 'https://policesketchmaker.it.com/punch-the-monkey',
  },
  openGraph: {
    title: 'Punch the Monkey — AI Primate Identifier',
    description: 'Inspired by Punch the baby macaque. Upload a photo and let AI identify the primate species with fun facts and conservation info.',
    type: 'website',
    url: 'https://policesketchmaker.it.com/punch-the-monkey',
    siteName: 'PoliceSketchMaker',
    images: [{
      url: 'https://policesketchmaker.it.com/icon.png',
      width: 1200,
      height: 630,
      alt: 'Punch the Monkey — AI Primate Identifier Tool',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Punch the Monkey — AI Primate Identifier',
    description: 'Inspired by Punch the baby macaque. Upload a photo and let AI identify the primate species.',
    images: ['https://policesketchmaker.it.com/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function PunchTheMonkeyLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Punch the Monkey — AI Primate Identifier',
    description: 'Free AI-powered primate species identifier inspired by Punch the baby macaque from Ichikawa City Zoo.',
    url: 'https://policesketchmaker.it.com/punch-the-monkey',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web Browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@type': 'Organization', name: 'PoliceSketchMaker', url: 'https://policesketchmaker.it.com' },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Punch the monkey?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Punch is a baby Japanese macaque (Macaca fuscata) born at Ichikawa City Zoo in Chiba Prefecture, Japan, in July 2025. After being abandoned by his mother, he was hand-raised by zookeeper Kosuke Shikano and became famous worldwide for clinging to a stuffed IKEA orangutan toy.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is this website affiliated with Ichikawa City Zoo or Punch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. This is an unofficial, independently operated fan page inspired by Punch\'s story. We have no affiliation with Ichikawa City Zoo, its staff, or any official Punch-related organizations. We simply love primates and wanted to build a fun educational tool.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does the AI primate identifier work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Upload any photo and our AI vision model analyzes it to determine if it contains a primate. If it does, the tool identifies the species, provides the scientific name, conservation status, habitat information, and fun facts.'
        }
      },
      {
        '@type': 'Question',
        name: 'What species is Punch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Punch is a Japanese macaque (Macaca fuscata), also known as a snow monkey. Japanese macaques are native to Japan and are the northernmost-living non-human primates in the world.'
        }
      },
    ]
  }

  return (
    <>
      <Script id="punch-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="punch-faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  )
}
