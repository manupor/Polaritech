import React, { useState } from 'react'
import { Home, Building2, Building, PanelsTopLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useParallax'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Applications() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)
  const [expandedImage, setExpandedImage] = useState(null)
  const headerRef = useScrollAnimation(0.15)

  const spaces = [
    {
      icon: <Home size={22} />,
      title: t('applications.homes'),
      desc: t('applications.homesDesc'),
      img: '/aplicaciones/hogares/desktop hogares.png',
      mobileImg: '/aplicaciones/hogares/mobile hogares.jpg',
      expandedImg: '/aplicaciones/hogares/mobile hogares.jpg',
    },
    {
      icon: <Building2 size={22} />,
      title: t('applications.offices'),
      desc: t('applications.officesDesc'),
      img: '/aplicaciones/empresas/desktop empresas.png',
      mobileImg: '/aplicaciones/empresas/mobile empresas.jpg',
      expandedImg: '/aplicaciones/empresas/mobile empresas.jpg',
    },
    {
      icon: <Building size={22} />,
      title: t('applications.condos'),
      desc: t('applications.condosDesc'),
      img: '/condominios.png',
      mobileImg: '/condominios.png',
      expandedImg: '/condominios.png',
    },
    {
      icon: <PanelsTopLeft size={22} />,
      title: t('applications.commerce'),
      desc: t('applications.commerceDesc'),
      img: '/aplicaciones/comercios/desktop comercio.png',
      mobileImg: '/aplicaciones/comercios/mobile comercio.jpg',
      expandedImg: '/aplicaciones/comercios/mobile comercio.jpg',
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
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-4 sm:mb-6 group">
            <picture>
              <source media="(max-width: 639px)" srcSet={s.mobileImg} />
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover transition-all duration-500 cursor-pointer"
                key={current}
                loading="lazy"
                decoding="async"
                onClick={() => setExpandedImage(s.expandedImg)}
              />
            </picture>
            {/* Desktop overlay gradient only */}
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Desktop text overlay */}
            <div className="hidden sm:block absolute bottom-0 left-0 right-0 p-6 sm:p-8">
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

          {/* Mobile text card below image */}
          <div className="sm:hidden bg-white rounded-xl p-4 mb-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2.5 mb-2">
              <span style={{ color: '#5BA130' }}>{s.icon}</span>
              <h3 className="font-bold text-lg" style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', color: '#203478' }}>
                {s.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#5a6a82' }}>
              {s.desc}
            </p>
          </div>

          {/* Thumbnails / Dots */}
          <div className="flex items-center justify-center gap-3">
            {spaces.map((space, i) => (
              <button
                key={space.title}
                onClick={() => goTo(i)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 w-16 h-11 sm:w-20 sm:h-14 ${
                  current === i ? 'ring-2 ring-[#5BA130] ring-offset-2' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={space.img}
                  alt={space.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
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

      {/* Expanded image modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setExpandedImage(null)
              }}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={expandedImage}
              alt="Expanded view"
              className="w-full h-full object-contain rounded-lg"
              decoding="async"
            />
          </div>
        </div>
      )}
    </section>
  )
}
