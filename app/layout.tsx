import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';
import { WebsiteStructuredData, OrganizationStructuredData } from '@/components/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Police Sketch Maker - How to Make Sketch of Face | AI Sketch Generator',
  description: 'Professional police sketch maker tool. Learn how to make sketch of face, transform photos into sketches, and create police sketches online. Used by law enforcement professionals.',
  keywords: 'police sketch maker, how to make sketch of face, make picture sketch, photo sketch maker online, image sketch maker, make sketches of people, sketch maker from photo, learn to make sketches',
  authors: [{ name: 'Police Sketch Maker Team' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Police Sketch Maker - Professional AI Sketch Generator for Law Enforcement',
    description: 'Create professional police sketches instantly. Learn how to make sketch of face with our AI-powered tool used by law enforcement worldwide.',
    type: 'website',
    locale: 'en_US',
    url: 'https://policesketchmaker.it.com',
    siteName: 'Police Sketch Maker',
    images: [
      {
        url: 'https://policesketchmaker.it.com/icon.png',
        width: 1200,
        height: 630,
        alt: 'Police Sketch Maker - Professional AI Sketch Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Police Sketch Maker - How to Make Professional Sketches',
    description: 'AI-powered police sketch maker. Learn how to make sketch of face and create professional sketches online.',
    images: ['https://policesketchmaker.it.com/icon.png'],
    creator: '@policesketchai',
  },
  alternates: {
    canonical: 'https://policesketchmaker.it.com',
  },
  metadataBase: new URL('https://policesketchmaker.it.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <head>
        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9816094922761343"
          crossOrigin="anonymous"
        />
        
        {/* Structured Data */}
        <WebsiteStructuredData />
        <OrganizationStructuredData />
        
        {/* Preload fonts */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        
        {/* Search Engine Verification */}
        <meta name="msvalidate.01" content="2A3D6A7DDB964111DE8F41E18922EAC1" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>
        {children}
        <Analytics />
        
        {/* Google Analytics - 移到body底部以避免preload警告 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
        
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "siubmxpsdr");
          `}
        </Script>
      </body>
    </html>
  )
} 