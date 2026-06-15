import React from 'react'
import { Lightbulb, TrendingUp, Search } from 'lucide-react'
import { useParallax, useScrollAnimation, useParallaxRotate } from '../hooks/useParallax'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Philosophy() {
  const { t } = useLanguage()
  const contentRef = useScrollAnimation(0.15)
  const cardsRef = useScrollAnimation(0.2)
  const floatingRef = useParallaxRotate(0.05)
  return (
    <section id="filosofia" className="relative py-16 sm:py-24 overflow-hidden" style={{ background: '#F7FAFC' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={contentRef.ref}
          className="max-w-7xl mx-auto text-center reveal opacity-0 translate-y-8 transition-all duration-700"
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
            {t('philosophy.title')} <span style={{ color: '#5BA130' }}>{t('philosophy.titleAccent')}</span>
          </h2>

          <div className="my-6 mx-auto" style={{ width: '56px', height: '3px', borderRadius: '2px', background: '#5BA130' }} />

          <div style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
            <p className="mb-8">
              {t('philosophy.p1')}
            </p>
            <p className="mb-12">
              {t('philosophy.p2')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300" style={{ border: '1px solid rgba(32,52,120,0.06)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(91,161,48,0.1)', color: '#5BA130' }}>
                <Lightbulb size={26} />
              </div>
              <h3 style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', fontSize: '1.2rem', fontWeight: 500, color: '#203478', marginBottom: '12px' }}>
                {t('philosophy.card1')}
              </h3>
              <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '0.9rem', color: '#6b7a99', lineHeight: 1.6 }}>
                {t('philosophy.card1Desc')}
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300" style={{ border: '1px solid rgba(32,52,120,0.06)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(91,161,48,0.1)', color: '#5BA130' }}>
                <TrendingUp size={26} />
              </div>
              <h3 style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', fontSize: '1.2rem', fontWeight: 500, color: '#203478', marginBottom: '12px' }}>
                {t('philosophy.card2')}
              </h3>
              <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '0.9rem', color: '#6b7a99', lineHeight: 1.6 }}>
                {t('philosophy.card2Desc')}
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300" style={{ border: '1px solid rgba(32,52,120,0.06)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(91,161,48,0.1)', color: '#5BA130' }}>
                <Search size={26} />
              </div>
              <h3 style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', fontSize: '1.2rem', fontWeight: 500, color: '#203478', marginBottom: '12px' }}>
                {t('philosophy.card3')}
              </h3>
              <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '0.9rem', color: '#6b7a99', lineHeight: 1.6 }}>
                {t('philosophy.card3Desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
