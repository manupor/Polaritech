import React from 'react'
import { Target, Eye, Heart } from 'lucide-react'
import { useParallax, useScrollAnimation } from '../hooks/useParallax'

export default function MissionVision() {
  const missionRef = useScrollAnimation(0.15)
  const visionRef = useScrollAnimation(0.2)
  const valuesRef = useScrollAnimation(0.25)
  return (
    <section id="mision-vision" className="relative py-16 sm:py-24 overflow-hidden" style={{ background: '#F7FAFC' }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* MISIÓN */}
        <div className="mb-20 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="flex items-center gap-4 mb-6">
            <div className="icon-lux icon-lux-sm icon-lux-round" style={{ color: '#5BA130' }}>
              <Target size={20} />
            </div>
            <h2
              style={{
                color: '#203478',
                fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                fontSize: 'clamp(2rem, 3.6vw, 2.8rem)',
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              MISIÓN
            </h2>
          </div>
          <div 
            className="max-w-7xl p-8 rounded-2xl"
            style={{ background: '#FFFFFF', border: '1px solid rgba(32,52,120,0.08)' }}
          >
            <p style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Brindar soluciones profesionales de control solar que mejoren el confort, la privacidad y la
              protección de los espacios, acompañando a nuestros clientes con asesoría especializada para que
              comprendan cómo funciona cada tecnología y puedan tomar decisiones informadas.
            </p>
          </div>
        </div>

        {/* VISIÓN */}
        <div className="mb-20 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="flex items-center gap-4 mb-6">
            <div className="icon-lux icon-lux-sm icon-lux-round" style={{ color: '#5BA130' }}>
              <Eye size={20} />
            </div>
            <h2
              style={{
                color: '#203478',
                fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                fontSize: 'clamp(2rem, 3.6vw, 2.8rem)',
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              VISIÓN
            </h2>
          </div>
          <div 
            className="max-w-7xl p-8 rounded-2xl"
            style={{ background: '#FFFFFF', border: '1px solid rgba(32,52,120,0.08)' }}
          >
            <p style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Ser una empresa referente en soluciones de control solar, reconocida por la calidad de nuestros
              productos, la excelencia de nuestro servicio y nuestro compromiso con la asesoría especializada y
              la innovación.
            </p>
          </div>
        </div>

        {/* VALORES */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="flex items-center gap-4 mb-6">
            <div className="icon-lux icon-lux-sm icon-lux-round" style={{ color: '#5BA130' }}>
              <Heart size={20} />
            </div>
            <h2
              style={{
                color: '#203478',
                fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                fontSize: 'clamp(2rem, 3.6vw, 2.8rem)',
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              VALORES
            </h2>
          </div>
          <div 
            className="p-8 rounded-2xl"
            style={{ background: '#FFFFFF', border: '1px solid rgba(32,52,120,0.08)' }}
          >
            <div style={{ 
              color: '#203478', 
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', 
              fontSize: '1.2rem', 
              fontWeight: 500,
              letterSpacing: '0.1em',
              textAlign: 'center'
            }}>
              Excelencia · Integridad · Innovación · Compromiso · Servicio · Profesionalismo
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
