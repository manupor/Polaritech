import React from 'react'
import { ArrowRight, Shield, Sun, Eye, CheckCircle2 } from 'lucide-react'
import { useParallax, useScrollAnimation, useParallaxScale } from '../hooks/useParallax'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Solution() {
  const { t } = useLanguage()
  const contentRef = useScrollAnimation(0.15)
  const imageRef = useParallax(0.3, 'up')
  const benefitsRef = useScrollAnimation(0.2)
  const scaleRef = useParallaxScale(0.9, 1.1, 0.002)

  const benefits = [
    t('solucion.benefits.retention'),
    t('solucion.benefits.uv'),
    t('solucion.benefits.glare'),
    t('solucion.benefits.options'),
  ]

  return (
    <section id="solucion" className="relative py-16 sm:py-24 overflow-hidden" style={{ background: '#F7FAFC' }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div 
          ref={contentRef.ref}
          className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700"
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
            {t('solucion.title')} <span style={{ color: '#5BA130' }}>{t('solucion.titleAccent')}</span>
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
            {t('solucion.subtitle')}
          </h3>
        </div>

        {/* Main content — ConstructZilla style card layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10" style={{ border: '1px solid rgba(32,52,120,0.06)' }}>
              <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#5a6a82', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                {t('solucion.description')}
              </p>
              
              <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#5a6a82', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                {t('solucion.description')}
              </p>
              
              <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#5a6a82', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
                {t('solucion.description')}
              </p>

              <div className="mb-8 p-6 rounded-xl" style={{ background: '#F7FAFC', border: '1px solid rgba(91,161,48,0.15)' }}>
                <h4 
                  style={{
                    fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    color: '#203478',
                    marginBottom: '16px'
                  }}
                >
                  {t('ourSolutions.featuresTitle')}:
                </h4>
                <div className="space-y-3">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div style={{ 
                        width: '22px', 
                        height: '22px', 
                        borderRadius: '50%', 
                        background: '#5BA130',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <CheckCircle2 size={13} style={{ color: '#FFFFFF' }} />
                      </div>
                      <span style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#5a6a82', fontSize: '1rem', lineHeight: 1.6 }}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="#cotizar" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{ 
                  background: '#5BA130', 
                  fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                  boxShadow: '0 10px 30px rgba(91,161,48,0.3)'
                }}
              >
                {t('solucion.cta')}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ minHeight: '400px' }}>
              <img
                src="/450.jpg"
                alt="Solución Polaritech"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(32,52,120,0.15) 0%, rgba(91,161,48,0.15) 100%)'
                }}
              />
              
              {/* Technology icons at bottom of image in 2x2 grid */}
              <div className="hidden lg:flex absolute bottom-4 left-6 right-6 justify-center">
                <div className="grid grid-cols-2 gap-4 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg" style={{ border: '1px solid rgba(255,255,255,0.3)' }}>
                  {t('solucion.iconLabels').map((label, i) => {
                    const icons = [<Shield size={20} />, <Sun size={20} />, <Eye size={20} />, <CheckCircle2 size={20} />]
                    return (
                      <div key={label} className="flex flex-col items-center text-center p-3 rounded-xl transition-all duration-300 hover:bg-green-50">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ background: 'rgba(91,161,48,0.1)', color: '#5BA130' }}>
                          {icons[i]}
                        </div>
                        <span style={{ color: '#203478', fontSize: '0.85rem', fontWeight: 500, fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>{label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
