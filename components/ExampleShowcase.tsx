'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
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
  beforeFocus: FocusPosition
  afterFocus: FocusPosition
  beforeCustomPosition?: string
  afterCustomPosition?: string
}

// Define the example pairs with focus positions for each image
const EXAMPLE_PAIRS: ExamplePair[] = [
  { 
    before: '/1.jpg', 
    after: '/11.jpg', 
    title: 'Example 1', 
    beforeFocus: 'face',
    afterFocus: 'custom',
    afterCustomPosition: 'center 40%'
  },
  { 
    before: '/2.jpg', 
    after: '/22.jpg', 
    title: 'Example 2', 
    beforeFocus: 'face',
    afterFocus: 'custom',
    afterCustomPosition: 'center 45%'
  },
  { 
    before: '/3.jpg', 
    after: '/33.jpg', 
    title: 'Example 3', 
    beforeFocus: 'face',
    afterFocus: 'custom',
    afterCustomPosition: 'center 50%'
  },
  { 
    before: '/4.jpg', 
    after: '/44.jpg', 
    title: 'Example 4', 
    beforeFocus: 'face',
    afterFocus: 'custom',
    afterCustomPosition: 'center 40%'
  },
  { 
    before: '/5.jpg', 
    after: '/55.jpg', 
    title: 'Example 5', 
    beforeFocus: 'face',
    afterFocus: 'custom',
    afterCustomPosition: 'center 45%'
  },
]

// Define the standalone examples
const STANDALONE_EXAMPLES = [
  { image: '/a.jpg', title: 'Sketch A' },
  { image: '/b.jpg', title: 'Sketch B' },
  { image: '/c.jpg', title: 'Sketch C' },
  { image: '/d.jpg', title: 'Sketch D' },
  { image: '/e.jpg', title: 'Sketch E' },
  { image: '/f.jpg', title: 'Sketch F' },
]

export default function ExampleShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [sliderPosition, setSliderPosition] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % EXAMPLE_PAIRS.length)
      // Reset slider position when changing examples
      setSliderPosition(50)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % EXAMPLE_PAIRS.length)
    // Reset slider position when changing examples
    setSliderPosition(50)
  }

  const goToPrev = () => {
    setActiveIndex((current) => (current - 1 + EXAMPLE_PAIRS.length) % EXAMPLE_PAIRS.length)
    // Reset slider position when changing examples
    setSliderPosition(50)
  }

  // Move slider to left
  const moveSliderLeft = () => {
    setSliderPosition((current) => Math.max(10, current - 15))
  }

  // Move slider to right
  const moveSliderRight = () => {
    setSliderPosition((current) => Math.min(90, current + 15))
  }

  // Handle slider position change from the slider component
  const handlePositionChange = (position: number) => {
    setSliderPosition(position)
  }

  return (
    <div className="space-y-16">
      {/* Before/After Comparison Showcase */}
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <span className="bg-blue-600 w-1.5 h-8 mr-3 rounded-sm"></span>
          Before & After Examples
        </h2>
        
        <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
          {/* Main comparison slider */}
          <div className="h-full animate-fade-in" ref={sliderRef}>
            <ComparisonSlider 
              beforeImage={EXAMPLE_PAIRS[activeIndex].before}
              afterImage={EXAMPLE_PAIRS[activeIndex].after}
              beforeLabel="Original Photo"
              afterLabel="Police Sketch"
              beforeFocusPosition={EXAMPLE_PAIRS[activeIndex].beforeFocus}
              afterFocusPosition={EXAMPLE_PAIRS[activeIndex].afterFocus}
              beforeCustomPosition={EXAMPLE_PAIRS[activeIndex].beforeCustomPosition}
              afterCustomPosition={EXAMPLE_PAIRS[activeIndex].afterCustomPosition}
              sliderPosition={sliderPosition}
              onPositionChange={handlePositionChange}
            />
          </div>
          
          {/* Navigation arrows */}
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4 z-20">
            <div className="flex space-x-2">
              <button 
                onClick={goToPrev}
                className="bg-slate-900/70 hover:bg-slate-800 rounded-full p-2 text-white transition-all"
                aria-label="Previous example"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={moveSliderLeft}
                className="bg-slate-900/70 hover:bg-slate-800 rounded-full p-2 text-white transition-all"
                aria-label="Move slider left"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={moveSliderRight}
                className="bg-slate-900/70 hover:bg-slate-800 rounded-full p-2 text-white transition-all"
                aria-label="Move slider right"
              >
                <ChevronRight size={20} />
              </button>
              <button 
                onClick={goToNext}
                className="bg-slate-900/70 hover:bg-slate-800 rounded-full p-2 text-white transition-all"
                aria-label="Next example"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Example title */}
          <div className="absolute top-4 left-4 bg-slate-900/70 px-4 py-2 rounded-md z-20">
            <h3 className="text-lg font-medium text-white">{EXAMPLE_PAIRS[activeIndex].title}</h3>
          </div>
          
          {/* Slider position indicator */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-slate-900/70 px-3 py-1 rounded-md z-20">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setSliderPosition(0)}
                className="text-xs text-slate-300 hover:text-white"
              >
                0%
              </button>
              <div className="w-32 h-1 bg-slate-700 rounded-full">
                <div 
                  className="h-full bg-blue-500 rounded-full" 
                  style={{ width: `${sliderPosition}%` }}
                ></div>
              </div>
              <button 
                onClick={() => setSliderPosition(100)}
                className="text-xs text-slate-300 hover:text-white"
              >
                100%
              </button>
            </div>
          </div>
          
          {/* Indicator dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {EXAMPLE_PAIRS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  setSliderPosition(50)
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex ? 'bg-blue-500 w-6' : 'bg-slate-400/50 hover:bg-slate-300/70'
                }`}
                aria-label={`Go to example ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Standalone Examples Gallery */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <span className="bg-blue-600 w-1.5 h-8 mr-3 rounded-sm"></span>
          More Police Sketch Examples
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {STANDALONE_EXAMPLES.map((example, index) => (
            <div key={index} className="card card-hover group">
              <div className="relative overflow-hidden">
                <img 
                  src={example.image} 
                  alt={example.title}
                  className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">{example.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 