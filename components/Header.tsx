'use client'

import { useState, useEffect } from 'react'
import { Shield, Menu, X, Heart, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState('')
  const pathname = usePathname()
  
  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle hash changes for active state
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }
    
    // Set initial hash
    setCurrentHash(window.location.hash)
    
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [pathname])

  // Helper function to get the correct link based on current page
  const getLink = (section: string) => {
    if (pathname === '/') {
      return `#${section}`
    }
    return `/#${section}`
  }

  // Helper function to check if a navigation item is active
  const isActiveLink = (href: string, linkName: string) => {
    // For regular pages, check exact match or if it's a sub-page
    if (href === '/blog' && pathname.startsWith('/blog')) {
      return true
    }
    if (href === '/ai-image-describer' && pathname === '/ai-image-describer') {
      return true
    }
    
    // For anchor links on homepage, we need to check the current hash or default to Generator
    if (href.startsWith('#') || href.startsWith('/#')) {
      if (pathname !== '/') {
        return false // Not on homepage, so anchor links are not active
      }
      
      // On homepage, check the hash or default behavior
      const targetHash = href.replace('/#', '#')
      if (currentHash) {
        return currentHash === targetHash
      } else {
        // No hash, default to Generator being active
        return linkName === 'Generator'
      }
    }
    
    return pathname === href
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/98 backdrop-blur-md shadow-lg shadow-black/20 py-3' 
          : 'bg-slate-950/95 backdrop-blur-sm shadow-md shadow-black/10 py-4'
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
          <nav className="hidden md:flex items-center space-x-2">
            <Link 
              href="/face-rate" 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActiveLink('/face-rate', 'Face Rate')
                  ? 'text-white bg-gradient-to-r from-pink-600/30 to-purple-600/30 shadow-lg shadow-pink-600/20' 
                  : 'text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-pink-600/10 hover:to-purple-600/10'
              }`}
            >
              <span className="flex items-center space-x-1">
                <span>Face Rate</span>
                <span className="text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white px-1.5 py-0.5 rounded-full">🔥</span>
              </span>
              {isActiveLink('/face-rate', 'Face Rate') && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
              )}
            </Link>
            <Link 
              href={getLink('generator')} 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActiveLink(getLink('generator'), 'Generator')
                  ? 'text-white bg-blue-600/30 shadow-lg shadow-blue-600/20' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Generator
              {isActiveLink(getLink('generator'), 'Generator') && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-400 rounded-full"></div>
              )}
            </Link>
            <Link 
              href="/ai-image-describer" 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActiveLink('/ai-image-describer', 'Image Describer')
                  ? 'text-white bg-blue-600/30 shadow-lg shadow-blue-600/20' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Image Describer
              {isActiveLink('/ai-image-describer', 'Image Describer') && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-400 rounded-full"></div>
              )}
            </Link>
            <Link 
              href={getLink('examples')} 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActiveLink(getLink('examples'), 'Examples')
                  ? 'text-white bg-blue-600/30 shadow-lg shadow-blue-600/20' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Examples
              {isActiveLink(getLink('examples'), 'Examples') && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-400 rounded-full"></div>
              )}
            </Link>
            <Link 
              href={getLink('about')} 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActiveLink(getLink('about'), 'About')
                  ? 'text-white bg-blue-600/30 shadow-lg shadow-blue-600/20' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              About
              {isActiveLink(getLink('about'), 'About') && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-400 rounded-full"></div>
              )}
            </Link>
            <Link 
              href="/blog" 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActiveLink('/blog', 'Blog')
                  ? 'text-white bg-blue-600/30 shadow-lg shadow-blue-600/20' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Blog
              {isActiveLink('/blog', 'Blog') && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-400 rounded-full"></div>
              )}
            </Link>
            <a
              href="https://candseven4.gumroad.com/l/jmjgn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-4 py-2 text-blue-400 hover:text-blue-300 hover:bg-blue-600/10 rounded-lg transition-all duration-300"
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
        <div className="md:hidden bg-slate-950/98 backdrop-blur-md animate-slide-up border-t border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link 
              href="/face-rate" 
              className={`flex items-center justify-between py-3 px-3 rounded-lg font-medium border-b border-slate-800/50 transition-all duration-300 ${
                isActiveLink('/face-rate', 'Face Rate')
                  ? 'text-white bg-gradient-to-r from-pink-600/30 to-purple-600/30 shadow-lg shadow-pink-600/20' 
                  : 'text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-pink-600/10 hover:to-purple-600/10'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="flex items-center space-x-2">
                <span>Face Rate</span>
                <span className="text-xs">🔥</span>
              </span>
              {isActiveLink('/face-rate', 'Face Rate') && (
                <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
              )}
            </Link>
            <Link 
              href={getLink('generator')} 
              className={`flex items-center justify-between py-3 px-3 rounded-lg font-medium border-b border-slate-800/50 transition-all duration-300 ${
                isActiveLink(getLink('generator'), 'Generator')
                  ? 'text-white bg-blue-600/30 shadow-lg shadow-blue-600/20' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Generator</span>
              {isActiveLink(getLink('generator'), 'Generator') && (
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              )}
            </Link>
            <Link 
              href="/ai-image-describer" 
              className={`flex items-center justify-between py-3 px-3 rounded-lg font-medium border-b border-slate-800/50 transition-all duration-300 ${
                isActiveLink('/ai-image-describer', 'Image Describer')
                  ? 'text-white bg-blue-600/30 shadow-lg shadow-blue-600/20' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Image Describer</span>
              {isActiveLink('/ai-image-describer', 'Image Describer') && (
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              )}
            </Link>
            <Link 
              href={getLink('examples')} 
              className={`flex items-center justify-between py-3 px-3 rounded-lg font-medium border-b border-slate-800/50 transition-all duration-300 ${
                isActiveLink(getLink('examples'), 'Examples')
                  ? 'text-white bg-blue-600/30 shadow-lg shadow-blue-600/20' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Examples</span>
              {isActiveLink(getLink('examples'), 'Examples') && (
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              )}
            </Link>
            <Link 
              href={getLink('about')} 
              className={`flex items-center justify-between py-3 px-3 rounded-lg font-medium border-b border-slate-800/50 transition-all duration-300 ${
                isActiveLink(getLink('about'), 'About')
                  ? 'text-white bg-blue-600/30 shadow-lg shadow-blue-600/20' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>About</span>
              {isActiveLink(getLink('about'), 'About') && (
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              )}
            </Link>
            <Link 
              href="/blog" 
              className={`flex items-center justify-between py-3 px-3 rounded-lg font-medium border-b border-slate-800/50 transition-all duration-300 ${
                isActiveLink('/blog', 'Blog')
                  ? 'text-white bg-blue-600/30 shadow-lg shadow-blue-600/20' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Blog</span>
              {isActiveLink('/blog', 'Blog') && (
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              )}
            </Link>
            <a
              href="https://candseven4.gumroad.com/l/jmjgn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 py-3 px-3 text-blue-400 hover:text-blue-300 hover:bg-blue-600/10 rounded-lg transition-all duration-300"
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