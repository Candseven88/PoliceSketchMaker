'use client'

import { Shield, Lock, Zap, CheckCircle, Award } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">PoliceSketchMaker</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Professional-grade AI technology trusted by security professionals worldwide. 
            Transforming the way law enforcement creates and uses facial sketches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              PoliceSketchMaker was developed to provide advanced facial recognition and sketch generation capabilities using cutting-edge AI technology. Our mission is to make professional police sketch capabilities accessible to everyone.
            </p>
            <p className="text-slate-300 leading-relaxed">
              We believe that accurate visual identification tools should be available to law enforcement agencies, security professionals, and organizations worldwide, regardless of their size or budget.
            </p>
          </div>
          
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Technology</h3>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Our AI models are trained on extensive datasets of facial features and professional police sketch techniques. The system can analyze photographs or text descriptions to generate accurate, detailed sketches.
            </p>
            <p className="text-slate-300 leading-relaxed">
              We use state-of-the-art machine learning algorithms to ensure high accuracy and consistency in every generated sketch, meeting professional law enforcement standards.
            </p>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Secure & Private</h4>
            <p className="text-slate-300">
              Your data is processed securely with enterprise-grade encryption. Images are not stored on our servers.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
              <Zap className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Lightning Fast</h4>
            <p className="text-slate-300">
              Generate professional police sketches in seconds with our optimized AI processing pipeline.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
              <CheckCircle className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Professional Quality</h4>
            <p className="text-slate-300">
              High-resolution sketches suitable for law enforcement, legal proceedings, and professional use.
            </p>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">10,000+</div>
              <div className="text-slate-300">Sketches Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-slate-300">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-slate-300">Availability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-slate-300">Countries Served</div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust PoliceSketchMaker for accurate, reliable facial sketch generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#generator" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
            >
              Try Generator
            </a>
            <a 
              href="/ai-image-describer" 
              className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg border border-slate-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              Try Image Describer
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 