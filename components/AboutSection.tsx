'use client'

import { Shield, Lock, Zap, CheckCircle, Award } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">About PoliceSketchMaker</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Professional-grade AI technology trusted by security professionals worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-600 w-1.5 h-8 mr-3 rounded-sm"></span>
              Our Mission
            </h3>
            <p className="text-slate-300 mb-4">
              PoliceSketchMaker was developed to provide advanced facial recognition and sketch generation capabilities using cutting-edge AI technology. Our mission is to make professional police sketch capabilities accessible to everyone.
            </p>
            <p className="text-slate-300">
              Whether you're curious about how you might appear in a police sketch, or simply want to see friends and family through the lens of a professional sketch artist, our tool delivers accurate and detailed results in seconds.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-600 w-1.5 h-8 mr-3 rounded-sm"></span>
              Advanced Technology
            </h3>
            <p className="text-slate-300 mb-4">
              Our platform utilizes state-of-the-art AI models specifically trained on thousands of professional police sketches and facial recognition patterns. This ensures the highest quality output that closely resembles traditional hand-drawn police sketches.
            </p>
            <p className="text-slate-300">
              The system can work from both textual descriptions and photographs, extracting key facial features and translating them into accurate sketch representations.
            </p>
          </div>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card card-hover p-6 group">
            <div className="mb-4 bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-800/30 transition-colors">
              <Shield className="h-6 w-6 text-blue-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Secure Processing</h4>
            <p className="text-slate-400">
              All uploaded photos and generated sketches are processed securely and not stored on our servers beyond the processing time.
            </p>
          </div>
          
          <div className="card card-hover p-6 group">
            <div className="mb-4 bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-800/30 transition-colors">
              <Zap className="h-6 w-6 text-blue-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Instant Results</h4>
            <p className="text-slate-400">
              Generate professional-quality police sketches in seconds, with no waiting or complex setup required.
            </p>
          </div>
          
          <div className="card card-hover p-6 group">
            <div className="mb-4 bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-800/30 transition-colors">
              <Award className="h-6 w-6 text-blue-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Professional Quality</h4>
            <p className="text-slate-400">
              Our AI produces sketches that match the quality and detail of those created by professional police sketch artists.
            </p>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">Trusted Technology</h3>
              <p className="text-slate-300 max-w-xl">
                Our platform employs the same advanced AI technology used by security professionals worldwide. Try it today and see yourself through the eyes of a police sketch artist.
              </p>
            </div>
            <div>
              <a
                href="#generator"
                className="btn-primary flex items-center space-x-2"
              >
                <Lock className="h-4 w-4" />
                <span>Try It Now</span>
              </a>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
              <span className="text-slate-300 text-sm">Secure Processing</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
              <span className="text-slate-300 text-sm">Professional Quality</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
              <span className="text-slate-300 text-sm">Advanced AI</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
              <span className="text-slate-300 text-sm">Instant Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 