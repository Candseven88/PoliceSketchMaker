import { Metadata } from 'next'
import ImageDescriberTool from '../../components/ImageDescriberTool'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AnimatedBackground from '../../components/AnimatedBackground'

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
    'seo image description',
    'automatic alt text',
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
      
      {/* Hero Section */}
      <AnimatedBackground variant="hero" className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Image Describer & 
              <span className="text-blue-400 block">Alt Text Generator</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Transform any image into detailed, SEO-friendly descriptions and alt text instantly. 
              Perfect for improving website accessibility and search engine rankings.
            </p>
          </div>
        </div>
      </AnimatedBackground>

      {/* Main Tool Section */}
      <AnimatedBackground variant="default" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageDescriberTool />
        </div>
      </AnimatedBackground>

      {/* How to Use Section */}
      <AnimatedBackground variant="light" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            How to Use Our Alt Text Generator & Image Describer
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Upload Image</h3>
              <p className="text-slate-400">
                Drop your photo or click to select. Supports JPG, PNG, WebP formats.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
              <p className="text-slate-400">
                Our advanced AI analyzes your image and identifies key elements.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Generate Description</h3>
              <p className="text-slate-400">
                Get detailed descriptions and SEO-optimized alt text instantly.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Copy & Use</h3>
              <p className="text-slate-400">
                Copy the generated alt text and use it on your website or blog.
              </p>
            </div>
          </div>
        </div>
      </AnimatedBackground>

      {/* Features Section */}
      <AnimatedBackground variant="dark" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Alt Text Generator?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our AI-powered tool provides accurate, detailed descriptions that improve your website's accessibility and SEO performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-slate-300">
                Generate comprehensive image descriptions in seconds with our advanced AI technology.
              </p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">SEO Optimized</h3>
              <p className="text-slate-300">
                Generated alt text follows SEO best practices to improve your search engine rankings.
              </p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Privacy First</h3>
              <p className="text-slate-300">
                Your images are processed securely and never stored on our servers.
              </p>
            </div>
          </div>
        </div>
      </AnimatedBackground>

      {/* FAQ Section */}
      <AnimatedBackground variant="default" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Can I use this alt text generator for my website?
              </h3>
              <p className="text-slate-300">
                Absolutely! This alt text generator is perfect for generating SEO-friendly alt text for 
                websites. The descriptions follow accessibility guidelines and help improve 
                your site's search engine rankings and user experience.
              </p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Is this alt text generator really free?
              </h3>
              <p className="text-slate-300">
                Yes! Our AI image describer and alt text generator is completely free to use. No account registration 
                required, no hidden fees. Describe unlimited images at no cost.
              </p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                What image formats are supported?
              </h3>
              <p className="text-slate-300">
                Our alt text generator supports JPG, JPEG, PNG, WebP, and GIF formats. 
                Maximum file size is 10MB per image for optimal processing speed.
              </p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                How accurate are the generated descriptions?
              </h3>
              <p className="text-slate-300">
                Our AI model is trained on millions of images and provides highly accurate descriptions. 
                The alt text generator focuses on the most important visual elements for accessibility and SEO purposes.
              </p>
            </div>
          </div>
        </div>
      </AnimatedBackground>

      <Footer />
    </div>
  )
} 