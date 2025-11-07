'use client'

import { Shield, Heart, Mail, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Script from 'next/script'
import AdBanner from './AdBanner'

export default function Footer() {
  return (
    <footer className="bg-security-dark pt-16 pb-8 relative overflow-hidden">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Glow effect */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-0.5 rounded-full">
                <div className="bg-gradient-to-br from-security-dark to-black p-1.5 rounded-full">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
              </div>
              <span className="font-bold text-xl text-white">PoliceSketchMaker</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Professional AI-powered police sketch generation tool for law enforcement, security professionals, and individuals.
            </p>
            <a
              href="https://candseven4.gumroad.com/l/jmjgn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Heart className="h-4 w-4" />
              <span>Support Our Work</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Navigation</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/ai-image-describer" className="hover:text-white transition-colors">Image Describer</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">Support</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Advertisement in Footer */}
        <div className="mb-8">
          <AdBanner size="small" position="footer" />
        </div>
        
        {/* Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-8">
          <div className="text-slate-500 text-sm mb-4 md:mb-0">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} PoliceSketchMaker. All rights reserved.
            </p>
            {/* Featured Badges */}
            <div className="mt-3 flex flex-wrap gap-3 items-center">
              {/* Startup Fame Badge */}
              <a 
                href="https://startupfa.me/s/policesketchmaker?utm_source=policesketchmaker.it.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="https://startupfa.me/badges/featured-badge-small.webp" 
                  alt="PoliceSketchMaker - Featured on Startup Fame" 
                  width={224} 
                  height={36}
                  className="rounded"
                />
              </a>
              
              {/* Fazier Badge */}
              <a 
                href="https://fazier.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=launched&theme=light" 
                  alt="Fazier badge" 
                  width={120} 
                  height={36}
                  className="rounded"
                />
              </a>
              
              {/* DevHunt Badge */}
              <div 
                id="devhunt-badge-container" 
                className="inline-block"
              ></div>
            </div>
          </div>
          <a
            href="mailto:support@policesketchmaker.com"
            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>support@policesketchmaker.com</span>
          </a>
        </div>
      </div>
      
      {/* DevHunt Script */}
      <Script
        defer
        data-url="https://devhunt.org/tool/wplace-pixel-tool"
        src="https://cdn.jsdelivr.net/gh/sidiDev/devhunt-banner/indexV0.js"
        strategy="lazyOnload"
      />
    </footer>
  )
} 