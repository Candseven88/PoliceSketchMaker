import { Metadata } from 'next'
import ImageDescriberTool from '../../components/ImageDescriberTool'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'AI Image Describer - Alt Text Generator | Free Photo Description Tool',
  description: 'Free AI image describer and alt text generator tool. Upload any photo and get detailed, SEO-friendly descriptions instantly. Perfect for alt text generation, accessibility, and content creation.',
  keywords: [
    'ai image describer',
    'describe this photo',
    'image describer',
    'describe the image',
    'ai describe image',
    'alt text generator',
    'image description tool',
    'photo description ai',
    'free image describer',
    'accessibility alt text',
    'alt text generator free',
    'image alt text generator',
    'automatic alt text generator',
    'seo alt text generator'
  ],
  openGraph: {
    title: 'AI Image Describer - Free Photo Description Tool',
    description: 'Upload any image and get instant AI-powered descriptions. Perfect for creating alt text, improving accessibility, and content creation.',
    type: 'website',
    url: 'https://policesketchmaker.com/ai-image-describer',
    images: [
      {
        url: '/og-image-describer.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Image Describer Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Image Describer - Free Photo Description Tool',
    description: 'Upload any image and get instant AI-powered descriptions. Perfect for alt text and accessibility.',
    images: ['/og-image-describer.jpg']
  },
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
  alternates: {
    canonical: 'https://policesketchmaker.com/ai-image-describer'
  }
}

export default function AIImageDescriberPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Header />
      
      {/* Hero Section - 添加足够的上边距避免被导航栏遮挡 */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            AI Image Describer & Alt Text Generator
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Describe this photo instantly with AI. Upload any image and get detailed, 
            SEO-friendly descriptions and alt text perfect for accessibility and SEO optimization.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 mb-8">
            <span className="bg-slate-800 px-3 py-1 rounded-full">AI Describe Image</span>
            <span className="bg-slate-800 px-3 py-1 rounded-full">Free Image Describer</span>
            <span className="bg-slate-800 px-3 py-1 rounded-full">Alt Text Generator</span>
            <span className="bg-slate-800 px-3 py-1 rounded-full">Accessibility Tool</span>
            <span className="bg-slate-800 px-3 py-1 rounded-full">SEO Alt Text Generator</span>
          </div>
        </div>
      </section>

      {/* Main Tool Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageDescriberTool />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Use Our AI Image Describer & Alt Text Generator?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Instant AI Description</h3>
              <p className="text-slate-300">
                Upload any photo and get detailed descriptions in seconds. Our AI analyzes 
                objects, people, scenes, and context to create comprehensive descriptions.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-400">SEO-Friendly Alt Text Generator</h3>
              <p className="text-slate-300">
                Generate perfect alt text for your images automatically. Improve your website's 
                accessibility and search engine rankings with AI-powered alt text generation.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Free & No Registration</h3>
              <p className="text-slate-300">
                Completely free alt text generator with no account required. Describe unlimited 
                images and generate alt text instantly without any cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              How to Use Our Alt Text Generator & Image Describer
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Upload Image</h3>
                <p className="text-slate-400">
                  Drop your photo or click to select. Supports JPG, PNG, WebP formats.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
                <p className="text-slate-400">
                  Our AI analyzes the image content, objects, people, and context.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Generate Alt Text</h3>
                <p className="text-slate-400">
                  Receive detailed description and SEO-friendly alt text automatically generated.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Copy & Use Alt Text</h3>
                <p className="text-slate-400">
                  Copy the generated alt text and use it for accessibility and SEO optimization.
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                How accurate is the AI image describer?
              </h3>
              <p className="text-slate-300">
                Our AI image describer uses advanced computer vision technology to analyze 
                images with high accuracy. It can identify objects, people, scenes, colors, 
                and context to provide detailed descriptions.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Can I use this alt text generator for my website?
              </h3>
              <p className="text-slate-300">
                Absolutely! This alt text generator is perfect for creating SEO-friendly alt text for 
                websites. The generated alt text follows accessibility guidelines and helps improve 
                your site's search engine rankings and user experience.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                What image formats are supported?
              </h3>
              <p className="text-slate-300">
                We support all common image formats including JPG, JPEG, PNG, WebP, and GIF. 
                Maximum file size is 10MB per image.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Is this alt text generator really free?
              </h3>
              <p className="text-slate-300">
                Yes! Our AI image describer and alt text generator is completely free to use. No account registration 
                required, no hidden fees. Generate unlimited alt text and image descriptions at no cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need More AI Tools?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Try our AI Police Sketch Generator to create professional sketches from descriptions.
          </p>
          <a 
            href="/"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Try Police Sketch Generator →
          </a>
        </div>
              </section>
      <Footer />
      </div>
    )
} 