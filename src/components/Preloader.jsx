import React, { useState, useEffect } from 'react'

export default function Preloader({ onLoaded }) {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Preload hero image in the background
    const heroImage = new Image()
    heroImage.src = '/hero-1.webp'

    const duration = 4000
    const fadeDuration = 600
    const startTime = performance.now()

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime
      const next = Math.min((elapsed / duration) * 100, 100)
      setProgress(next)
    }, 50)

    const timeout = setTimeout(() => {
      setProgress(100)
      setFadeOut(true)
      clearInterval(interval)

      setTimeout(() => {
        setIsLoading(false)
        onLoaded?.()
      }, fadeDuration)
    }, duration)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [onLoaded])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-600 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ background: '#EEF4F8' }}
    >
      <div className="flex flex-col items-center gap-8 px-6">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full animate-pulse-glow"
            style={{ background: 'radial-gradient(circle, rgba(62,181,204,0.25) 0%, transparent 70%)' }}
          />
          <img
            src="/logo-color.png"
            alt="Polaritech"
            className="relative h-24 sm:h-28 w-auto object-contain animate-pulse-logo"
            style={{ filter: 'drop-shadow(0 0 24px rgba(32,52,120,0.12))' }}
          />
        </div>

        <div className="text-center space-y-2">
          <h1
            className="text-2xl sm:text-3xl font-bold tracking-wide"
            style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', color: '#203478' }}
          >
            Polaritech
          </h1>
          <p
            className="text-sm sm:text-base"
            style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#6b7a99' }}
          >
            Cargando experiencia…
          </p>
        </div>

        <div className="w-48 sm:w-56 h-1.5 rounded-full bg-[rgba(32,52,120,0.1)] overflow-hidden">
          <div
            className="h-full bg-[#5BA130] transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
