import React from 'react'
import { Check } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useParallax'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function History() {
  const { t } = useLanguage()
  const contentRef = useScrollAnimation(0.15)
  const rightRef = useScrollAnimation(0.2)

  return (
    <section 
      id="historia" 
      className="relative py-16 sm:py-24 overflow-hidden" 
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2
            style={{
              color: '#203478',
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {t('history.title')} <span style={{ color: '#5BA130' }}>{t('history.titleAccent')}</span>
          </h2>
        </div>

        {/* Two column layout - adjusted proportions */}
        <div className="grid lg:grid-cols-[0.9fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* LEFT - Text content */}
          <div 
            ref={contentRef.ref}
            className="reveal opacity-0 translate-y-8 transition-all duration-700"
            style={{
              transform: `translateY(${contentRef.isVisible ? '0px' : '40px'})`,
              opacity: contentRef.isVisible ? 1 : 0,
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
              <p className="mb-6">
                {t('history.p1')} <strong style={{ color: '#203478' }}>{t('history.year')}</strong> {t('history.p1b')}
              </p>
              <p className="mb-6">
                {t('history.p2')}
              </p>
              <p>
                {t('history.p3')}
              </p>
            </div>
          </div>

          {/* RIGHT - Bullets + Image */}
          <div 
            ref={rightRef.ref}
            className="reveal opacity-0 translate-y-8 transition-all duration-700"
            style={{
              transform: `translateY(${rightRef.isVisible ? '0px' : '40px'})`,
              opacity: rightRef.isVisible ? 1 : 0,
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Bullet points */}
            <div className="mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#5BA130' }}>
                    <Check size={12} style={{ color: 'white' }} />
                  </div>
                  <span style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1rem', lineHeight: 1.6 }}>
                    <strong style={{ color: '#203478' }}>{t('history.bullet1')}</strong> {t('history.bullet1b')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#5BA130' }}>
                    <Check size={12} style={{ color: 'white' }} />
                  </div>
                  <span style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1rem', lineHeight: 1.6 }}>
                    <strong style={{ color: '#203478' }}>{t('history.bullet2')}</strong> {t('history.bullet2b')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#5BA130' }}>
                    <Check size={12} style={{ color: 'white' }} />
                  </div>
                  <span style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1rem', lineHeight: 1.6 }}>
                    <strong style={{ color: '#203478' }}>{t('history.bullet3')}</strong> {t('history.bullet3b')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#5BA130' }}>
                    <Check size={12} style={{ color: 'white' }} />
                  </div>
                  <span style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1rem', lineHeight: 1.6 }}>
                    <strong style={{ color: '#203478' }}>{t('history.bullet4')}</strong> {t('history.bullet4b')}
                  </span>
                </li>
              </ul>
            </div>

            {/* Mockup image - transparent, no container */}
            <img
              src="/mockup-2.png"
              alt={t('history.imageAlt')}
              className="w-full h-auto object-contain max-h-[280px] sm:max-h-[400px]"
            />
          </div>
        </div>
      </div>

      {/* Bottom color bar */}
      <div className="flex w-full mt-16" style={{ height: '6px' }}>
        <div style={{ flex: 1, background: '#203478' }} />
        <div style={{ flex: 1, background: '#5BA130' }} />
        <div style={{ flex: 1, background: '#3EB5CC' }} />
      </div>
    </section>
  )
}
