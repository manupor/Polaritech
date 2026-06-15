import React from 'react'
import { useParallax, useScrollAnimation, useParallaxRotate } from '../hooks/useParallax'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function SolarRadiation() {
  const { t } = useLanguage()
  const contentRef = useScrollAnimation(0.15)
  const imageRef = useParallax(0.3, 'up')
  const tableRef = useScrollAnimation(0.2)
  const rotateRef = useParallaxRotate(0.02)

  const rows = [
    {
      title: t('problema.luzVisible'),
      accent: '#7c3aed',
      titleColor: '#203478',
      desc: t('problema.luzDesc'),
    },
    {
      title: t('problema.infrarrojo'),
      accent: '#f97316',
      titleColor: '#e85d2a',
      desc: t('problema.infrarrojoDesc'),
    },
    {
      title: t('problema.uv'),
      accent: '#88C140',
      titleColor: '#5BA130',
      desc: t('problema.uvDesc'),
    },
  ]

  return (
    <section id="problema" className="relative py-16 sm:py-24 overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Top band: text + photo ─────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-28">
          <div 
            ref={contentRef.ref}
            className="reveal opacity-0 translate-y-8 transition-all duration-700"
            style={{
              transform: `translateY(${contentRef.isVisible ? '0px' : '40px'})`,
              opacity: contentRef.isVisible ? 1 : 0,
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
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
              {t('problema.title')} <span style={{ color: '#5BA130' }}>{t('problema.titleAccent')}</span>
            </h2>

            <div
              className="my-6"
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
              {t('problema.subtitle')}
            </h3>

            <p style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '46ch' }}>
              {t('problema.description')}
            </p>
          </div>

          <div
            className="reveal opacity-0 translate-y-8 transition-all duration-700 relative rounded-2xl overflow-hidden shadow-xl shadow-[rgba(32,52,120,0.12)] min-h-[240px] sm:min-h-[380px]"
          >
            <img
              src="/450.jpg"
              alt={t('problema.subtitle')}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ── Centered heading ───────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
          <h3
            style={{
              color: '#203478',
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
            }}
          >
            {t('problema.subtitle')}
          </h3>
          <p className="mt-4" style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#5a6a82', fontSize: '1rem', lineHeight: 1.7 }}>
            {t('problema.radiationDesc')}
          </p>
        </div>

        {/* ── Radiation table ────────────────────────────────────────── */}
        <div className="glass-card rounded-2xl overflow-hidden max-w-7xl mx-auto reveal opacity-0 translate-y-8 transition-all duration-700">
          {rows.map((r, i) => (
            <div
              key={r.title}
              className="grid sm:grid-cols-[minmax(0,0.9fr)_1.4fr]"
              style={{ borderTop: i > 0 ? '1px solid rgba(32,52,120,0.08)' : 'none' }}
            >
              <div className="flex items-center gap-4 px-6 sm:px-8 py-7">
                <span style={{ width: '4px', height: '30px', borderRadius: '2px', background: r.accent }} />
                <span
                  style={{
                    fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                    fontWeight: 500,
                    fontSize: '1.2rem',
                    color: r.titleColor,
                  }}
                >
                  {r.title}
                </span>
              </div>
              <div
                className="flex items-center px-6 sm:px-8 py-5 sm:py-7 border-t sm:border-t-0 sm:border-l border-[rgba(32,52,120,0.08)]"
                style={{
                  fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif',
                  color: '#5a6a82',
                  fontSize: '0.98rem',
                  lineHeight: 1.6,
                }}
              >
                {r.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
