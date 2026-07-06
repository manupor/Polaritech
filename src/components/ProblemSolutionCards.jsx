import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function ProblemSolutionCards() {
  const { t } = useLanguage()

  return (
    <section className="relative z-10 -mt-24 lg:-mt-32 mb-16 sm:mb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10" style={{ border: '1px solid rgba(32,52,120,0.06)' }}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Problem card */}
            <div className="flex flex-col overflow-hidden rounded-2xl bg-[#F7FAFC]" style={{ border: '1px solid rgba(32,52,120,0.06)' }}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/el problema2.png"
                  alt={t('problema.subtitle')}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <h3
                  style={{
                    color: '#203478',
                    fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                    fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)',
                    fontWeight: 500,
                    lineHeight: 1.2,
                    marginBottom: '12px',
                  }}
                >
                  {t('problema.title')} <span style={{ color: '#5BA130' }}>{t('problema.titleAccent')}</span>
                </h3>
                <h4
                  style={{
                    color: '#203478',
                    fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    marginBottom: '12px',
                  }}
                >
                  {t('problema.subtitle')}
                </h4>
                <p
                  className="flex-1"
                  style={{
                    color: '#5a6a82',
                    fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                  }}
                >
                  {t('problema.description')}
                </p>
              </div>
            </div>

            {/* Solution card */}
            <div className="flex flex-col overflow-hidden rounded-2xl bg-[#F7FAFC]" style={{ border: '1px solid rgba(32,52,120,0.06)' }}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/soluci%C3%B3n%202.jpg"
                  alt={t('solucion.subtitle')}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <h3
                  style={{
                    color: '#203478',
                    fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                    fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)',
                    fontWeight: 500,
                    lineHeight: 1.2,
                    marginBottom: '12px',
                  }}
                >
                  {t('solucion.title')} <span style={{ color: '#5BA130' }}>{t('solucion.titleAccent')}</span>
                </h3>
                <h4
                  style={{
                    color: '#203478',
                    fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    marginBottom: '12px',
                  }}
                >
                  {t('solucion.subtitle')}
                </h4>
                <p
                  className="flex-1 mb-6"
                  style={{
                    color: '#5a6a82',
                    fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                  }}
                >
                  {t('solucion.description')}
                </p>
                <a
                  href="#nuestras-soluciones"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 w-fit"
                  style={{
                    background: '#5BA130',
                    fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                    boxShadow: '0 8px 24px rgba(91,161,48,0.3)',
                  }}
                >
                  {t('solucion.cta')}
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
