import React, { useRef, useState } from 'react'
import { ArrowRight, ChevronDown, Shield, Sun, Eye, Layers, Sparkles, Square, CircleDot } from 'lucide-react'
import { useParallax, useScrollAnimation, useParallaxScale } from '../hooks/useParallax'
import { useLanguage } from '../context/LanguageContext.jsx'

const tagStyles = {
  violet: 'bg-violet-400/10 text-violet-400 border-violet-400/20',
  blue: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
  rose: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
  cyan: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
  neutral: 'bg-white/5 text-slate-400 border-white/10',
}

export default function OurSolutions() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)

  // Handle URL parameter for tab selection
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const tabParam = urlParams.get('tab')
    if (tabParam !== null && !isNaN(tabParam)) {
      const tabIndex = parseInt(tabParam)
      if (tabIndex >= 0 && tabIndex < 5) {
        setActive(tabIndex)
      }
    }
  }, [])

  const solutions = [
    {
      icon: <Sparkles size={22} />,
      name: t('ourSolutions.products.nanoceramica.name'),
      tag: t('ourSolutions.products.nanoceramica.tag'),
      tagColor: 'violet',
      short: t('ourSolutions.products.nanoceramica.short'),
      desc: t('ourSolutions.products.nanoceramica.desc'),
      applications: t('ourSolutions.products.nanoceramica.applications'),
    },
    {
      icon: <Shield size={22} />,
      name: t('ourSolutions.products.seguridad.name'),
      tag: t('ourSolutions.products.seguridad.tag'),
      tagColor: 'blue',
      short: t('ourSolutions.products.seguridad.short'),
      desc: t('ourSolutions.products.seguridad.desc'),
      applications: t('ourSolutions.products.seguridad.applications'),
    },
    {
      icon: <Square size={22} />,
      name: t('ourSolutions.products.sandblasting.name'),
      tag: t('ourSolutions.products.sandblasting.tag'),
      tagColor: 'rose',
      short: t('ourSolutions.products.sandblasting.short'),
      desc: t('ourSolutions.products.sandblasting.desc'),
      applications: t('ourSolutions.products.sandblasting.applications'),
    },
    {
      icon: <Layers size={22} />,
      name: t('ourSolutions.products.economica.name'),
      tag: t('ourSolutions.products.economica.tag'),
      tagColor: 'cyan',
      short: t('ourSolutions.products.economica.short'),
      desc: t('ourSolutions.products.economica.desc'),
      applications: t('ourSolutions.products.economica.applications'),
    },
    {
      icon: <CircleDot size={22} />,
      name: t('ourSolutions.products.blackout.name'),
      tag: t('ourSolutions.products.blackout.tag'),
      tagColor: 'neutral',
      short: t('ourSolutions.products.blackout.short'),
      desc: t('ourSolutions.products.blackout.desc'),
      applications: t('ourSolutions.products.blackout.applications'),
    },
  ]

  const s = solutions[active]
  const cardRefs = useRef([])
  const headerRef = useScrollAnimation(0.15)
  const selectorRef = useScrollAnimation(0.2)
  const detailsRef = useScrollAnimation(0.25)
  const scaleRef = useParallaxScale(0.9, 1.1, 0.002)

  return (
    <section id="nuestras-soluciones" className="relative py-16 sm:py-24 overflow-hidden" style={{ background: '#F7FAFC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2
            style={{
              color: '#203478',
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
              fontSize: 'clamp(2.8rem, 4.2vw, 3.6rem)',
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {t('ourSolutions.title')} <span style={{ color: '#5BA130' }}>{t('ourSolutions.titleAccent')}</span>
          </h2>

          <div
            className="my-6 mx-auto"
            style={{ width: '56px', height: '3px', borderRadius: '2px', background: '#5BA130' }}
          />

          <h3
            style={{
              color: '#203478',
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 500,
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            {t('ourSolutions.subtitle')}
          </h3>

          <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#5a6a82', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
            {t('ourSolutions.description')}
          </p>
        </div>

        {/* Solution selector and details */}
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-8 items-start">
          {/* Desktop: Vertical selector tabs */}
          <div className="hidden lg:col-span-1 lg:flex lg:flex-col gap-2">
            {solutions.map((sol, i) => (
              <button
                key={sol.name}
                onClick={() => setActive(i)}
                className={`text-left px-4 py-3 rounded-xl transition-all duration-200 border flex items-center gap-3 group ${
                  active === i
                    ? 'bg-green-500/10 border-green-500/30 text-gray-900'
                    : 'border-transparent text-slate-600 hover:text-slate-800 hover:bg-white/5 bg-white'
                }`}
              >
                <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  active === i
                    ? 'bg-gradient-to-br from-green-400/20 to-emerald-500/20 text-green-600 border border-green-400/30'
                    : 'bg-gray-100 text-slate-500 border border-gray-200 group-hover:text-slate-600'
                }`}>
                  {sol.icon}
                </div>
                <span className="text-sm font-medium leading-tight">{sol.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile: Accordion list */}
          <div className="lg:hidden space-y-3">
            {solutions.map((sol, i) => {
              const isOpen = active === i
              return (
                <div
                  key={sol.name}
                  ref={(el) => { cardRefs.current[i] = el }}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => {
                      const opening = !isOpen
                      setActive(opening ? i : -1)
                      if (opening && cardRefs.current[i]) {
                        setTimeout(() => {
                          cardRefs.current[i].scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }, 50)
                      }
                    }}
                    className="w-full flex items-center justify-between p-4 text-left gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? 'bg-gradient-to-br from-green-400/20 to-emerald-500/20 text-green-600 border border-green-400/30'
                          : 'bg-gray-100 text-slate-500 border border-gray-200'
                      }`}>
                        {sol.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-gray-900 text-sm leading-tight" style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif' }}>{sol.name}</h3>
                        <p className="text-xs text-gray-500 mt-0.5 truncate">{sol.short}</p>
                      </div>
                    </div>
                    <ChevronDown size={20} className={`shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 border-t border-gray-100">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mt-4 mb-3 ${tagStyles[sol.tagColor]}`}>
                        {sol.tag}
                      </span>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4" style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>
                        {sol.desc}
                      </p>
                      {sol.applications && (
                        <p className="text-gray-700 text-sm leading-relaxed mb-4" style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>
                          <strong style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', color: '#203478' }}>{t('ourSolutions.recommendedApps')}</strong>{' '}
                          {sol.applications.map((app, idx) => (
                            <span key={app}>
                              {app}{idx < sol.applications.length - 1 ? ', ' : '.'}
                            </span>
                          ))}
                        </p>
                      )}
                      <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                        <a href="#cotizar" className="btn-primary w-full justify-center text-sm">
                          {t('ourSolutions.requestQuote')}
                          <ArrowRight size={14} />
                        </a>
                        <a href="#contacto" className="btn-secondary-light w-full justify-center text-sm" style={{ borderColor: 'rgba(91,161,48,0.3)', color: '#5BA130' }}>
                          {t('ourSolutions.moreInfo')}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {active >= 0 && s && (
          <div className="hidden lg:col-span-2 lg:block reveal opacity-0 translate-y-8 transition-all duration-500">
            <div className="bg-white rounded-3xl p-5 sm:p-6 lg:p-10 h-full border border-gray-200 relative overflow-hidden shadow-sm">
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-5 pointer-events-none transition-all duration-500"
                style={{ background: 'radial-gradient(circle, #5BA130, transparent)' }}
              />

              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400/20 to-emerald-600/20 border border-green-400/20 flex items-center justify-center text-green-600">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-xl leading-tight" style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif' }}>{s.name}</h3>
                    <p className="text-gray-600 text-sm mt-0.5">{s.short}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${tagStyles[s.tagColor]}`}>
                  {s.tag}
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 text-base" style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>
                {s.desc}
              </p>

              {s.applications && (
                <div className="mb-8">
                  <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>
                    <strong style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', color: '#203478' }}>{t('ourSolutions.recommendedApps')}</strong>{' '}
                    {s.applications.map((app, i) => (
                      <span key={app}>
                        {app}{i < s.applications.length - 1 ? ', ' : '.'}
                      </span>
                    ))}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                <a href="#cotizar" className="btn-primary w-full sm:w-auto justify-center">
                  {t('ourSolutions.requestQuote')}
                  <ArrowRight size={15} />
                </a>
                <a href="#contacto" className="btn-secondary-light w-full sm:w-auto justify-center" style={{ borderColor: 'rgba(91,161,48,0.3)', color: '#5BA130' }}>
                  {t('ourSolutions.moreInfo')}
                </a>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  )
}
