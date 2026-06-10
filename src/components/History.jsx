import React from 'react'
import { Calendar, Award, Users } from 'lucide-react'
import { useParallax, useScrollAnimation, useParallaxScale } from '../hooks/useParallax'

export default function History() {
  const contentRef = useScrollAnimation(0.15)
  const imageRef = useParallax(0.4, 'up')
  const statsRef = useScrollAnimation(0.2)
  const scaleRef = useParallaxScale(0.9, 1.1, 0.002)
  return (
    <section 
      id="historia" 
      className="relative py-20 sm:py-32 overflow-hidden" 
      style={{ 
        background: '#FFFFFF'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
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
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              NUESTRA <span style={{ color: '#5BA130' }}>HISTORIA</span>
            </h2>

            <div
              className="my-6"
              style={{ width: '56px', height: '3px', borderRadius: '2px', background: '#5BA130' }}
            />

            <div style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
              <p className="mb-6">
                Polaritech nace en <strong>2016</strong> con el propósito de ofrecer soluciones profesionales de control solar para
                hogares, oficinas y proyectos arquitectónicos.
              </p>
              <p className="mb-6">
                Desde entonces hemos desarrollado proyectos residenciales, comerciales y corporativos,
                construyendo una trayectoria basada en la confianza de nuestros clientes, la calidad de nuestros
                materiales y la excelencia en cada instalación.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center text-center p-4 rounded-xl" style={{ background: '#F7FAFC', border: '1px solid rgba(32,52,120,0.08)' }}>
                <Calendar size={24} style={{ color: '#5BA130', marginBottom: '8px' }} />
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#203478' }}>2016</div>
                <div style={{ fontSize: '0.85rem', color: '#6b7a99' }}>Fundación</div>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl" style={{ background: '#F7FAFC', border: '1px solid rgba(32,52,120,0.08)' }}>
                <Users size={24} style={{ color: '#5BA130', marginBottom: '8px' }} />
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#203478' }}>500+</div>
                <div style={{ fontSize: '0.85rem', color: '#6b7a99' }}>Proyectos</div>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl" style={{ background: '#F7FAFC', border: '1px solid rgba(32,52,120,0.08)' }}>
                <Award size={24} style={{ color: '#5BA130', marginBottom: '8px' }} />
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#203478' }}>8+</div>
                <div style={{ fontSize: '0.85rem', color: '#6b7a99' }}>Años experiencia</div>
              </div>
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 relative hidden lg:block">
            <img
              src="/image.png"
              alt="Historia Polaritech"
              className="w-full object-cover"
              style={{ 
                maxHeight: '700px',
                transform: 'translateY(60px)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
