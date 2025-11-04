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
import AdsterraAd from '@/components/AdsterraAd'
import GoogleAdSense from '@/components/GoogleAdSense'
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
        
        {/* Face Rate Preview Section - 新增，置于首位 */}
        <AnimatedBackground variant="light" className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
          <section id="face-rate-preview">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <span>🔥</span>
                  <span>TRENDING NOW</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Viral Face Rate Test
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                  Join millions discovering their face rate! Upload your photo, get an AI beauty score, and share with friends. 
                  Completely free - just share to unlock your detailed results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <a 
                    href="/face-rate" 
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    ✨ Get My Face Rate Score
                  </a>
                  <a 
                    href="#generator" 
                    className="bg-white hover:bg-slate-50 text-slate-700 font-medium py-4 px-8 rounded-xl border border-slate-200 transition-all duration-300"
                  >
                    🎨 Create Police Sketch
                  </a>
                </div>

                {/* Social Proof */}
                <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span>2.5M+ tests taken</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      <span>⭐⭐⭐⭐⭐</span>
                    </div>
                    <span>4.8/5 rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🔒</span>
                    <span>100% Private & Secure</span>
                  </div>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Instant AI Analysis</h3>
                  <p className="text-slate-600">
                    Get your face rate score in seconds with our advanced AI trained on beauty research.
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Share & Go Viral</h3>
                  <p className="text-slate-600">
                    Share your results on social media and challenge your friends to beat your score!
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">100% Free</h3>
                  <p className="text-slate-600">
                    No hidden costs, no subscriptions. Just share your results to unlock detailed analysis.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedBackground>
        
        {/* Generator Section - 添加动画背景，位置下移 */}
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
        
        {/* Advertisement Section - 仅使用安全可信的广告网络 */}
        <div className="py-8 bg-slate-950/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Google AdSense - 安全可信 */}
            <GoogleAdSense size="medium" className="mb-4" />
            {/* Adsterra 广告 - 已验证安全 */}
            <AdsterraAd size="medium" adType="banner" className="mt-4" />
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