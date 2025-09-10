'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, Play, Zap, Camera, Sparkles } from 'lucide-react'
import ComparisonSlider from './ComparisonSlider'

// 定义焦点位置类型
type FocusPosition = 
  | 'center' 
  | 'top' 
  | 'face' 
  | 'top-center'
  | 'bottom-center'
  | 'custom'

// 定义示例对的接口
interface ExamplePair {
  before: string
  after: string
  title: string
  description: string
  beforeFocus: FocusPosition
  afterFocus: FocusPosition
  beforeCustomPosition?: string
  afterCustomPosition?: string
}

// 定义功能卡片接口
interface FeatureCard {
  icon: React.ReactNode
  title: string
  description: string
  image: string
  badge?: string
}

// Define the example pairs with enhanced data
const EXAMPLE_PAIRS: ExamplePair[] = [
  { 
    before: '/1.jpg', 
    after: '/11.jpg', 
    title: 'Professional Portrait Sketch', 
    description: 'Transform high-quality photos into detailed police-style sketches with accurate facial features and proportions.',
    beforeFocus: 'face',
    afterFocus: 'custom',
    afterCustomPosition: 'center 40%'
  },
  { 
    before: '/2.jpg', 
    after: '/22.jpg', 
    title: 'Witness Description Sketch', 
    description: 'Generate sketches from witness descriptions, capturing unique characteristics and distinguishing features.',
    beforeFocus: 'face',
    afterFocus: 'custom',
    afterCustomPosition: 'center 45%'
  },
  { 
    before: '/3.jpg', 
    after: '/33.jpg', 
    title: 'Crime Scene Documentation', 
    description: 'Create detailed suspect sketches for crime scene documentation and law enforcement investigations.',
    beforeFocus: 'face',
    afterFocus: 'custom',
    afterCustomPosition: 'center 50%'
  },
  { 
    before: '/4.jpg', 
    after: '/44.jpg', 
    title: 'Forensic Art Generation', 
    description: 'Professional-grade forensic sketches suitable for courtroom presentations and police reports.',
    beforeFocus: 'face',
    afterFocus: 'custom',
    afterCustomPosition: 'center 40%'
  },
  { 
    before: '/5.jpg', 
    after: '/55.jpg', 
    title: 'Security Identification', 
    description: 'High-precision sketches for security purposes, maintaining accuracy in facial recognition features.',
    beforeFocus: 'face',
    afterFocus: 'custom',
    afterCustomPosition: 'center 45%'
  },
]

// Define feature cards with images
const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "AI-Powered Generation",
    description: "Advanced AI algorithms analyze facial features and generate professional police sketches in seconds.",
    image: "/a.jpg",
    badge: "Fast"
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Photo to Sketch",
    description: "Upload any photo and transform it into a detailed black and white police-style sketch.",
    image: "/b.jpg",
    badge: "Easy"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Professional Quality",
    description: "Generate high-resolution sketches suitable for law enforcement and legal proceedings.",
    image: "/c.jpg",
    badge: "Pro"
  }
]

// Standalone examples for carousel
const STANDALONE_EXAMPLES = [
  { image: '/d.jpg', title: 'Detective Case Sketch', category: 'Law Enforcement' },
  { image: '/e.jpg', title: 'Witness Statement Art', category: 'Forensic' },
  { image: '/f.jpg', title: 'Security Portrait', category: 'Security' },
  { image: '/66.jpg', title: 'Court Documentation', category: 'Legal' },
  { image: '/a.jpg', title: 'Investigation Sketch', category: 'Detective' },
  { image: '/b.jpg', title: 'Crime Scene Art', category: 'Forensic' },
]

export default function ExampleShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Autoplay functionality for main showcase
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % EXAMPLE_PAIRS.length)
      setSliderPosition(50)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay])

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((current) => (current + 1) % STANDALONE_EXAMPLES.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % EXAMPLE_PAIRS.length)
    setSliderPosition(50)
  }

  const goToPrev = () => {
    setActiveIndex((current) => (current - 1 + EXAMPLE_PAIRS.length) % EXAMPLE_PAIRS.length)
    setSliderPosition(50)
  }

  const handlePositionChange = (position: number) => {
    setSliderPosition(position)
  }

  return (
    <div className="space-y-20">
      {/* Hero Showcase with Before/After */}
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See the <span className="text-blue-400">Transformation</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Watch ordinary photos transform into professional police sketches with stunning accuracy and detail.
          </p>
        </div>
        
        {/* Improved container with proper aspect ratio */}
        <div className="relative max-w-5xl mx-auto">
          {/* Aspect ratio container - 4:3 ratio for better image display */}
          <div className="relative w-full" style={{ paddingBottom: '75%' }}>
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
              <div className="h-full animate-fade-in" ref={sliderRef}>
                <ComparisonSlider 
                  beforeImage={EXAMPLE_PAIRS[activeIndex].before}
                  afterImage={EXAMPLE_PAIRS[activeIndex].after}
                  beforeLabel="Original Photo"
                  afterLabel="AI Generated Sketch"
                  beforeFocusPosition={EXAMPLE_PAIRS[activeIndex].beforeFocus}
                  afterFocusPosition={EXAMPLE_PAIRS[activeIndex].afterFocus}
                  beforeCustomPosition={EXAMPLE_PAIRS[activeIndex].beforeCustomPosition}
                  afterCustomPosition={EXAMPLE_PAIRS[activeIndex].afterCustomPosition}
                  sliderPosition={sliderPosition}
                  onPositionChange={handlePositionChange}
                />
              </div>
              
              {/* Navigation */}
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-6 z-20">
                <button 
                  onClick={goToPrev}
                  className="bg-slate-900/80 hover:bg-slate-800/90 backdrop-blur-sm rounded-full p-3 text-white transition-all hover:scale-110"
                  aria-label="Previous example"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={goToNext}
                  className="bg-slate-900/80 hover:bg-slate-800/90 backdrop-blur-sm rounded-full p-3 text-white transition-all hover:scale-110"
                  aria-label="Next example"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/70 to-transparent p-8 z-20">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-bold text-white mb-3">{EXAMPLE_PAIRS[activeIndex].title}</h3>
                  <p className="text-slate-200 text-lg leading-relaxed">{EXAMPLE_PAIRS[activeIndex].description}</p>
                </div>
              </div>
              
              {/* Indicator dots */}
              <div className="absolute top-6 right-6 flex space-x-2 z-20">
                {EXAMPLE_PAIRS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index)
                      setSliderPosition(50)
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex ? 'bg-blue-400 w-8' : 'bg-slate-400/50 hover:bg-slate-300/70'
                    }`}
                    aria-label={`Go to example ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section - Pixalto Style */}
      <div className="grid lg:grid-cols-3 gap-8">
        {FEATURE_CARDS.map((feature, index) => (
          <div key={index} className="group relative">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Image Section with proper aspect ratio */}
              <div className="relative w-full overflow-hidden" style={{ paddingBottom: '66.67%' }}>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                {/* Always visible gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badge */}
                {feature.badge && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    {feature.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="absolute top-4 left-4 bg-slate-900/70 backdrop-blur-sm rounded-full p-3 text-blue-400 z-10">
                  {feature.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scrolling Carousel - Pixalto Style */}
      <div className="relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Professional <span className="text-blue-400">Portfolio</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Explore our extensive collection of AI-generated police sketches across various use cases.
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateX(-${carouselIndex * 33.333}%)`,
              width: `${STANDALONE_EXAMPLES.length * 33.333}%`
            }}
          >
            {STANDALONE_EXAMPLES.map((example, index) => (
              <div key={index} className="flex-shrink-0 px-3" style={{ width: `${100 / STANDALONE_EXAMPLES.length}%` }}>
                <div className="group relative overflow-hidden rounded-xl bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Image with proper aspect ratio */}
                  <div className="relative w-full overflow-hidden" style={{ paddingBottom: '133.33%' }}>
                    <img 
                      src={example.image} 
                      alt={example.title}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                      {example.category}
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-10">
                      <h4 className="text-white font-semibold text-lg">{example.title}</h4>
                      <div className="flex items-center text-blue-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-4 h-4 mr-2" />
                        View Details
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(STANDALONE_EXAMPLES.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCarouselIndex(index * 3)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(carouselIndex / 3) === index ? 'bg-blue-400 w-6' : 'bg-slate-400/50 hover:bg-slate-300/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 