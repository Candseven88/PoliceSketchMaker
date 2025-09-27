'use client'

import { Toaster } from 'react-hot-toast'
import PayPalProvider from '@/components/PayPalProvider'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import GeneratorSection from '@/components/GeneratorSection'
import ExampleShowcase from '@/components/ExampleShowcase'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import AdBanner from '@/components/AdBanner'
import { SoftwareStructuredData } from '@/components/StructuredData'

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <SoftwareStructuredData />
      
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#1e293b',
            color: '#f8fafc',
            border: '1px solid #334155',
          },
          success: {
            iconTheme: {
              primary: '#0ea5e9',
              secondary: '#f8fafc',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#f8fafc',
            },
          },
        }}
      />
      
      <Header />
      
      <main>
        {/* Hero Section - 保持原样 */}
        <HeroSection />
        
        {/* Generator Section - 添加动画背景 */}
        <AnimatedBackground variant="dark" className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <GeneratorSection />
          </div>
        </AnimatedBackground>
        
        {/* Examples Section - 添加动画背景 */}
        <AnimatedBackground variant="default" className="py-24">
          <section id="examples">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <ExampleShowcase />
            </div>
          </section>
        </AnimatedBackground>
        
        {/* Advertisement Section */}
        <div className="py-8 bg-slate-950/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdBanner size="medium" position="content" className="mb-4" />
          </div>
        </div>
        
        {/* About Section - 添加动画背景 */}
        <AnimatedBackground variant="light" className="py-24">
          <AboutSection />
        </AnimatedBackground>

        {/* SEO Content Section - 添加动画背景 */}
        <AnimatedBackground variant="dark" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Master the Art of Sketch Making</h2>
              <p className="text-slate-300 max-w-3xl mx-auto">
                Whether you're learning how to make sketch of face or need professional police sketch tools, 
                our platform provides everything you need to create accurate, detailed portraits.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-blue-400">How to Make Sketch of Face</h3>
                <p className="text-slate-300 mb-4">
                  Learn professional techniques for creating realistic facial sketches. Our AI understands 
                  the same methods used by police sketch artists to capture unique characteristics and features.
                </p>
                <a href="/blog/how-to-make-sketch-of-face-complete-guide" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center group">
                  Learn More 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-blue-400">AI Image Describer</h3>
                <p className="text-slate-300 mb-4">
                  Generate SEO-friendly alt text and detailed descriptions for any image. Perfect for 
                  improving website accessibility and search engine rankings with AI-powered analysis.
                </p>
                <a href="/ai-image-describer" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center group">
                  Try Image Describer 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Professional Sketch Services</h3>
                <p className="text-slate-300 mb-4">
                  Discover how much police sketch artists make and learn about career opportunities in 
                  forensic art, courtroom sketching, and crime scene documentation.
                </p>
                <a href="/about" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center group">
                  Learn About Careers 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="mt-12 bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-400">How to make a picture into a sketch?</h4>
                  <p className="text-slate-300 mb-4">
                    Upload your photo to our AI-powered sketch maker. Our advanced algorithms analyze facial 
                    features and convert them into professional police-style sketches in seconds.
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-2 text-blue-400">How much do police sketch artists make?</h4>
                  <p className="text-slate-300">
                    Professional police sketch artists typically earn $45,000-$85,000 annually, while 
                    courtroom sketch artists can earn $200-800 per day for high-profile cases.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-400">How to make sketches of people accurately?</h4>
                  <p className="text-slate-300 mb-4">
                    Start with proper facial proportions, focus on unique features, and use consistent 
                    lighting. Our AI incorporates these professional techniques automatically.
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-2 text-blue-400">What makes a good crime scene sketch maker?</h4>
                  <p className="text-slate-300">
                    Accuracy, attention to detail, and the ability to work with witnesses under pressure. 
                    Our platform helps professionals maintain these standards consistently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedBackground>
      </main>
      
      <Footer />
    </div>
  )
}

export default function Home() {
  return (
    <PayPalProvider>
      <HomePage />
    </PayPalProvider>
  )
} 