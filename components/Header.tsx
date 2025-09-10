'use client'

import { useState, useEffect } from 'react'
import { Shield, Menu, X, Heart, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Helper function to get the correct link based on current page
  const getLink = (section: string) => {
    if (pathname === '/') {
      return `#${section}`
    }
    return `/#${section}`
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-security-dark/95 backdrop-blur-md shadow-lg shadow-black/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className={`transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-0.5 rounded-full">
                <div className="bg-gradient-to-br from-security-dark to-black p-1.5 rounded-full">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
              </div>
            </div>
            <span className={`font-bold text-white transition-all duration-300 ${
              isScrolled ? 'text-lg' : 'text-xl'
            }`}>
              PoliceSketchMaker
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href={getLink('generator')} className="text-slate-300 hover:text-white transition-colors">
              Generator
            </Link>
            <Link href="/ai-image-describer" className="text-slate-300 hover:text-white transition-colors">
              Image Describer
            </Link>
            <Link href={getLink('examples')} className="text-slate-300 hover:text-white transition-colors">
              Examples
            </Link>
            <Link href={getLink('about')} className="text-slate-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">
              Blog
            </Link>
            <a
              href="https://candseven4.gumroad.com/l/jmjgn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Heart className="h-4 w-4" />
              <span>Support</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-security-dark/95 backdrop-blur-md animate-slide-up">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link 
              href={getLink('generator')} 
              className="block py-3 text-white font-medium border-b border-slate-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Generator
            </Link>
            <Link 
              href="/ai-image-describer" 
              className="block py-3 text-white font-medium border-b border-slate-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Image Describer
            </Link>
            <Link 
              href={getLink('examples')} 
              className="block py-3 text-white font-medium border-b border-slate-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Examples
            </Link>
            <Link 
              href={getLink('about')} 
              className="block py-3 text-white font-medium border-b border-slate-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="block py-3 text-white font-medium border-b border-slate-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <a
              href="https://candseven4.gumroad.com/l/jmjgn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 py-3 text-blue-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Heart className="h-5 w-5" />
              <span>Support Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
} 