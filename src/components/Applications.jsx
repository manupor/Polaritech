import React, { useState } from 'react'
import { Home, Building2, Building, PanelsTopLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useParallax'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Applications() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)
  const headerRef = useScrollAnimation(0.15)

  const spaces = [
    {
      icon: <Home size={22} />,
      title: t('applications.homes'),
      desc: t('applications.homesDesc'),
      img: '/home.jpg',
    },
    {
      icon: <Building2 size={22} />,
      title: t('applications.offices'),
      desc: t('applications.officesDesc'),
      img: '/oficinas.jpg',
    },
    {
      icon: <Building size={22} />,
      title: t('applications.condos'),
      desc: t('applications.condosDesc'),
      img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    },
    {
      icon: <PanelsTopLeft size={22} />,
      title: t('applications.commerce'),
      desc: t('applications.commerceDesc'),
      img: '/comercios.jpg',
    },
    {
      icon: <Home size={22} />,
      title: t('applications.largeWindows'),
      desc: t('applications.largeWindowsDesc'),
      img: '/gran%20ventanal.jpg.webp',
    },
  ]

  const next = () => setCurrent((prev) => (prev + 1) % spaces.length)
  const prev = () => setCurrent((prev) => (prev - 1 + spaces.length) % spaces.length)
  const goTo = (index) => setCurrent(index)

  const s = spaces[current]

  return (
    <section id="soluciones" className="relative pb-16 sm:pb-24 pt-24 sm:pt-32 overflow-hidden" style={{ background: '#FFFFFF' }}>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2
            style={{
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 500,
              color: '#203478',
              letterSpacing: '-0.02em',
            }}
          >
            {t('applications.title')}
          </h2>
          <div className="my-4 mx-auto" style={{ width: '56px', height: '3px', borderRadius: '2px', background: '#5BA130' }} />
          <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1rem', color: '#6b7a99', maxWidth: '500px', margin: '0 auto' }}>
            {t('applications.description')}
          </p>
        </div>

        {/* Gallery Slider */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
          {/* Main image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 group">
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-full object-cover transition-all duration-500"
              key={current}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-2" style={{ color: 'white' }}>
                {s.icon}
                <h3 className="font-bold text-xl sm:text-2xl" style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', color: '#FFFFFF' }}>
                  {s.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base leading-relaxed" style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: 'rgba(255,255,255,0.9)', maxWidth: '500px' }}>
                {s.desc}
              </p>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Thumbnails / Dots */}
          <div className="flex items-center justify-center gap-3">
            {spaces.map((space, i) => (
              <button
                key={space.title}
                onClick={() => goTo(i)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  current === i ? 'ring-2 ring-[#5BA130] ring-offset-2' : 'opacity-60 hover:opacity-100'
                }`}
                style={{ width: '80px', height: '56px' }}
              >
                <img
                  src={space.img}
                  alt={space.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <span className="text-sm font-medium" style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#6b7a99' }}>
              {current + 1} / {spaces.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
