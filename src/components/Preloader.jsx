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
      <div className="flex flex-col items-center gap-6 px-6">
        <img
          src="/logo-color.png"
          alt="Polaritech"
          className="h-20 sm:h-24 w-auto object-contain animate-pulse-logo"
        />

        <div className="w-40 sm:w-48 h-1 rounded-full bg-[rgba(32,52,120,0.1)] overflow-hidden">
          <div
            className="h-full bg-[#5BA130] transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
