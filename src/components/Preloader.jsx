import React, { useState, useEffect } from 'react'

export default function Preloader({ onLoaded }) {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const heroImage = new Image()
    heroImage.src = '/hero-1.webp'

    const handleLoad = () => {
      setFadeOut(true)
      setTimeout(() => {
        setIsLoading(false)
        onLoaded?.()
      }, 600)
    }

    if (heroImage.complete) {
      handleLoad()
    } else {
      heroImage.onload = handleLoad
      heroImage.onerror = handleLoad
    }

    const timeout = setTimeout(handleLoad, 4000)

    return () => clearTimeout(timeout)
  }, [onLoaded])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-600 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ background: '#EEF4F8' }}
    >
      <div className="flex flex-col items-center gap-6">
        <img
          src="/logo-color.png"
          alt="Polaritech"
          className="h-16 w-auto object-contain animate-pulse-logo"
          style={{ filter: 'drop-shadow(0 0 20px rgba(32,52,120,0.15))' }}
        />
        <div className="w-32 h-1 rounded-full bg-[rgba(32,52,120,0.1)] overflow-hidden">
          <div className="h-full bg-[#5BA130] animate-progress" />
        </div>
      </div>
    </div>
  )
}
