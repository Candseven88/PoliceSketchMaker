'use client'

import { useEffect, useRef } from 'react'

interface AnimatedBackgroundProps {
  variant?: 'default' | 'hero' | 'dark' | 'light'
  className?: string
  children?: React.ReactNode
}

export default function AnimatedBackground({ 
  variant = 'default', 
  className = '',
  children 
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Floating particles for subtle effect
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    // Create fewer, more subtle particles
    const createParticles = () => {
      const particleCount = Math.min(20, Math.floor(window.innerWidth / 60))
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.1 + 0.05,
          color: variant === 'light' ? 'rgba(59, 130, 246, ' : 'rgba(148, 163, 184, '
        })
      }
    }
    createParticles()

    // Animation loop for subtle particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Keep particles within bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color + particle.opacity + ')'
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [variant])

  // Background gradient classes based on variant
  const getBackgroundClasses = () => {
    switch (variant) {
      case 'hero':
        return 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
      case 'dark':
        return 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
      case 'light':
        return 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800'
      default:
        return 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
    }
  }

  // Get glow effects based on variant
  const getGlowEffects = () => {
    const baseEffects = (
      <>
        {/* Background grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Animated glow effects - 蓝黄光晕 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] opacity-20 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-400 rounded-full filter blur-[100px] opacity-10 animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        {/* Additional subtle glows for variety */}
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500 rounded-full filter blur-[80px] opacity-5 animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-32 h-32 bg-cyan-400 rounded-full filter blur-[60px] opacity-8 animate-pulse-slow" style={{ animationDelay: '3s' }} />
      </>
    )

    return baseEffects
  }

  return (
    <div className={`relative ${getBackgroundClasses()} ${className}`}>
      {/* Glow effects */}
      {getGlowEffects()}
      
      {/* Subtle floating particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/10 pointer-events-none" style={{ zIndex: 2 }} />
      
      {/* Content */}
      <div className="relative" style={{ zIndex: 3 }}>
        {children}
      </div>
    </div>
  )
} 