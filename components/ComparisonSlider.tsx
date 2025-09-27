'use client'

import { useState, useEffect, useRef } from 'react'

// 扩展焦点位置类型，增加更多选项
type FocusPosition = 
  | 'center' 
  | 'top' 
  | 'face' 
  | 'top-center'
  | 'bottom-center'
  | 'custom'

interface ComparisonSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  focusPosition?: FocusPosition
  beforeFocusPosition?: FocusPosition
  afterFocusPosition?: FocusPosition
  beforeCustomPosition?: string
  afterCustomPosition?: string
  sliderPosition?: number
  onPositionChange?: (position: number) => void
}

export default function ComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  focusPosition = 'face',
  beforeFocusPosition,
  afterFocusPosition,
  beforeCustomPosition,
  afterCustomPosition,
  sliderPosition,
  onPositionChange
}: ComparisonSliderProps) {
  const [position, setPosition] = useState(sliderPosition || 50)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Update position if sliderPosition prop changes
  useEffect(() => {
    if (sliderPosition !== undefined && !isDragging) {
      setPosition(sliderPosition)
    }
  }, [sliderPosition, isDragging])

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return
    
    const { left, width } = sliderRef.current.getBoundingClientRect()
    const newPosition = Math.max(0, Math.min(100, ((clientX - left) / width) * 100))
    setPosition(newPosition)
    
    // Notify parent component about position change
    if (onPositionChange) {
      onPositionChange(newPosition)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    handleMove(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    handleMove(e.touches[0].clientX)
  }

  // Get background position based on focus preference
  const getBackgroundPosition = (specificFocus?: FocusPosition, customPosition?: string) => {
    // 如果提供了自定义位置，优先使用它
    if (specificFocus === 'custom' && customPosition) {
      return customPosition;
    }
    
    // 如果提供了特定的焦点位置，优先使用它
    const focus = specificFocus || focusPosition
    
    switch(focus) {
      case 'top':
        return 'center 15%';
      case 'face':
        return 'center 30%'; // 聚焦在人脸位置，通常在图片上部30%位置
      case 'top-center':
        return 'center 25%';
      case 'bottom-center':
        return 'center 65%';
      default:
        return 'center center';
    }
  }

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX)
      }
    }

    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchend', handleMouseUp)
    window.addEventListener('touchmove', handleTouchMove)

    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchend', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [isDragging])

  return (
    <div 
      ref={sliderRef}
      className="comparison-slider select-none cursor-ew-resize"
      style={{ '--position': `${position}%` } as React.CSSProperties}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div 
        className="after"
        style={{ 
          backgroundImage: `url(${afterImage})`,
          backgroundPosition: getBackgroundPosition(afterFocusPosition, afterCustomPosition),
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute bottom-4 right-4 bg-blue-600/80 px-3 py-1 rounded-md text-xs font-medium text-white">
          {afterLabel}
        </div>
      </div>
      <div 
        className="before"
        style={{ 
          backgroundImage: `url(${beforeImage})`,
          backgroundPosition: getBackgroundPosition(beforeFocusPosition, beforeCustomPosition),
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute bottom-4 left-4 bg-blue-600/80 px-3 py-1 rounded-md text-xs font-medium text-white">
          {beforeLabel}
        </div>
      </div>
      <div className="slider">
        <div className="slider-button"></div>
      </div>
    </div>
  )
} 