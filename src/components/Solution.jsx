import React from 'react'
import { ArrowRight, Shield, Sun, Eye, CheckCircle2 } from 'lucide-react'
import { useParallax, useScrollAnimation, useParallaxScale } from '../hooks/useParallax'

const benefits = [
  'Retención IRR de 65% a 98%',
  'Protección UV',
  'Menor deslumbramiento',
  'Opciones transparentes o con privacidad',
]

export default function Solution() {
  const contentRef = useScrollAnimation(0.15)
  const imageRef = useParallax(0.3, 'up')
  const benefitsRef = useScrollAnimation(0.2)
  const scaleRef = useParallaxScale(0.9, 1.1, 0.002)
  return (
    <section id="solucion" className="relative py-20 sm:py-32 overflow-hidden" style={{ background: '#FFFFFF' }}>
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
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            LA <span style={{ color: '#5BA130' }}>SOLUCIÓN</span>
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
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            Tecnología diseñada para mejorar el desempeño de sus ventanas.
          </h3>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#5a6a82', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Cuando instalamos una película de control solar ayudamos a gestionar la energía que atraviesa el vidrio.
            </p>
            
            <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#5a6a82', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Dependiendo de la tecnología seleccionada, nuestras soluciones ofrecen una retención de radiación infrarroja (IRR) desde un 65% hasta un 98%.
            </p>
            
            <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#5a6a82', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
              Esta reducción contribuye significativamente a disminuir la sensación térmica y mejorar el confort de los espacios.
            </p>

            <div className="mb-8">
              <h4 
                style={{
                  fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#203478',
                  marginBottom: '16px'
                }}
              >
                Beneficios:
              </h4>
              <div className="space-y-3">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div style={{ 
                      width: '20px', 
                      height: '20px', 
                      borderRadius: '50%', 
                      background: '#5BA130',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <CheckCircle2 size={12} style={{ color: '#FFFFFF' }} />
                    </div>
                    <span style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#5a6a82', fontSize: '1rem', lineHeight: 1.6 }}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#cotizar" className="btn-primary">
              Solicitar asesoría
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ minHeight: '400px' }}>
              <img
                src="/450.jpg"
                alt="Solución Polaritech"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(32,52,120,0.1) 0%, rgba(91,161,48,0.1) 100%)'
                }}
              />
              
              {/* Technology icons at bottom of image in 2x2 grid */}
              <div className="hidden lg:flex absolute bottom-2 left-8 right-8 justify-center">
                <div className="grid grid-cols-2 gap-8 bg-black/30 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="icon-lux icon-lux-sm icon-lux-round mb-3" style={{ color: '#FFFFFF', background: 'rgba(91,161,48,0.8)' }}>
                      <Shield size={20} />
                    </div>
                    <span style={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 600, fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>Protección UV</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="icon-lux icon-lux-sm icon-lux-round mb-3" style={{ color: '#FFFFFF', background: 'rgba(91,161,48,0.8)' }}>
                      <Sun size={20} />
                    </div>
                    <span style={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 600, fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>Control Térmico</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="icon-lux icon-lux-sm icon-lux-round mb-3" style={{ color: '#FFFFFF', background: 'rgba(91,161,48,0.8)' }}>
                      <Eye size={20} />
                    </div>
                    <span style={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 600, fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>Transparencia</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="icon-lux icon-lux-sm icon-lux-round mb-3" style={{ color: '#FFFFFF', background: 'rgba(91,161,48,0.8)' }}>
                      <CheckCircle2 size={20} />
                    </div>
                    <span style={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 600, fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>Garantía</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
