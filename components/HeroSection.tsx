'use client'

import { useState, useEffect } from 'react'
import { Shield, Camera, ArrowRight, BadgeCheck, FileText } from 'lucide-react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = "Transform photos into professional police sketches instantly."
  
  // Typing animation effect
  useEffect(() => {
    setIsVisible(true)
    
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)
    
    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="relative overflow-hidden bg-security-dark">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Animated glow effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-fbi-gold rounded-full filter blur-[100px] opacity-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        {/* FBI-style badge */}
        <div className={`flex justify-center mb-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
            <div className="bg-gradient-to-br from-fbi-blue to-security-dark p-0.5 rounded-full">
              <div className="bg-gradient-to-br from-fbi-navy to-security-dark p-4 rounded-full">
                <Shield className="h-16 w-16 text-fbi-gold" />
              </div>
            </div>
          </div>
        </div>
        
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
            Face Rate & Police Sketch
          </span>
          <span className="block text-white text-3xl md:text-4xl mt-2">
            AI Generator
          </span>
        </h1>
        
        <p 
          className={`text-xl md:text-2xl text-center text-slate-300 max-w-3xl mx-auto mb-4 h-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '400ms' }}
        >
          {typedText}
          <span className="animate-pulse">|</span>
        </p>
        
        <p 
          className={`text-lg text-center text-slate-400 max-w-4xl mx-auto mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '500ms' }}
        >
          Discover your <strong className="text-pink-300">face rate score</strong> with our viral AI beauty test, or create professional 
          <strong className="text-slate-300"> police sketches</strong> from descriptions. Advanced AI technology for 
          entertainment and law enforcement professionals worldwide.
        </p>
        
        {/* Keywords Section */}
        <div 
          className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '550ms' }}
        >
          <span className="bg-gradient-to-r from-pink-600/30 to-purple-600/30 text-pink-300 px-3 py-1 rounded-full text-sm font-medium border border-pink-500/30">
            🔥 Face Rate Test
          </span>
          <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30">
            Police Sketch Maker
          </span>
          <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30">
            Beauty Score AI
          </span>
          <span className="bg-emerald-600/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium border border-emerald-500/30">
            Photo Sketch Maker
          </span>
          <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-sm font-medium border border-orange-500/30">
            AI Face Rating
          </span>
        </div>
        
        {/* Feature Cards */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="bg-slate-800/30 backdrop-blur-sm px-6 py-4 rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-all hover:bg-slate-800/50">
            <div className="flex items-center mb-2">
              <Camera className="h-6 w-6 text-blue-400 mr-3" />
              <span className="text-white font-semibold">Upload Photo</span>
            </div>
            <p className="text-slate-300 text-sm">Make picture into sketch from any photo instantly</p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm px-6 py-4 rounded-xl border border-slate-600/50 hover:border-purple-500/50 transition-all hover:bg-slate-800/50">
            <div className="flex items-center mb-2">
              <FileText className="h-6 w-6 text-purple-400 mr-3" />
              <span className="text-white font-semibold">Describe Features</span>
            </div>
            <p className="text-slate-300 text-sm">Learn how to make sketches of people from descriptions</p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm px-6 py-4 rounded-xl border border-slate-600/50 hover:border-emerald-500/50 transition-all hover:bg-slate-800/50">
            <div className="flex items-center mb-2">
              <BadgeCheck className="h-6 w-6 text-emerald-400 mr-3" />
              <span className="text-white font-semibold">Professional Result</span>
            </div>
            <p className="text-slate-300 text-sm">Get police-grade sketch quality in seconds</p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '800ms' }}
        >
          <a 
            href="#generator"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 group shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
          >
            <span>Start Creating Sketches</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="/blog"
            className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 px-8 py-4 rounded-xl font-semibold text-lg border border-slate-600 hover:border-slate-500 transition-all"
          >
            Learn How to Make Sketches
          </a>
        </div>
        
        {/* Stats */}
        <div 
          className={`flex flex-wrap justify-center gap-8 mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '900ms' }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white">10,000+</div>
            <div className="text-slate-400 text-sm">Sketches Generated</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">95%</div>
            <div className="text-slate-400 text-sm">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-slate-400 text-sm">Law Enforcement Agencies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-slate-400 text-sm">Available Online</div>
          </div>
        </div>
      </div>
    </div>
  )
} 