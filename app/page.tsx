'use client'

import { Toaster } from 'react-hot-toast'
import PayPalProvider from '@/components/PayPalProvider'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import GeneratorSection from '@/components/GeneratorSection'
import ExampleShowcase from '@/components/ExampleShowcase'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
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
        {/* Hero Section */}
        <HeroSection />
        
        {/* Generator Section */}
        <GeneratorSection />
        
        {/* Examples Section */}
        <section id="examples" className="py-24 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ExampleShowcase />
          </div>
        </section>
        
        {/* About Section */}
        <AboutSection />

        {/* SEO Content Section */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Master the Art of Sketch Making</h2>
              <p className="text-slate-300 max-w-3xl mx-auto">
                Whether you're learning how to make sketch of face or need professional police sketch tools, 
                our platform provides everything you need to create accurate, detailed portraits.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">How to Make Sketch of Face</h3>
                <p className="text-slate-300 mb-4">
                  Learn professional techniques for creating realistic facial sketches. Our AI understands 
                  the same methods used by police sketch artists to capture unique characteristics and features.
                </p>
                <a href="/blog/how-to-make-sketch-of-face-complete-guide" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">AI Image Describer</h3>
                <p className="text-slate-300 mb-4">
                  Generate SEO-friendly alt text and detailed descriptions for any image. Perfect for 
                  improving website accessibility and search engine rankings with AI-powered analysis.
                </p>
                <a href="/ai-image-describer" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Try Image Describer →
                </a>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Professional Sketch Services</h3>
                <p className="text-slate-300 mb-4">
                  Discover how much police sketch artists make and learn about career opportunities in 
                  forensic art, courtroom sketching, and crime scene documentation.
                </p>
                <a href="/about" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Learn About Careers →
                </a>
              </div>
            </div>
            
            <div className="mt-12 bg-slate-800 rounded-xl p-8">
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
        </section>
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