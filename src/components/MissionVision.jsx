import React from 'react'
import { Target, Eye, Heart } from 'lucide-react'
import { useParallax, useScrollAnimation } from '../hooks/useParallax'

export default function MissionVision() {
  const missionRef = useScrollAnimation(0.15)
  const visionRef = useScrollAnimation(0.2)
  const valuesRef = useScrollAnimation(0.25)
  return (
    <section id="mision-vision" className="relative py-16 sm:py-24 overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6">
        
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
            MISIÓN, <span style={{ color: '#5BA130' }}>VISIÓN</span> Y VALORES
          </h2>
          <div className="my-6 mx-auto" style={{ width: '56px', height: '3px', borderRadius: '2px', background: '#5BA130' }} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* MISIÓN */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full" style={{ border: '1px solid rgba(32,52,120,0.06)' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(91,161,48,0.1)', color: '#5BA130' }}>
                  <Target size={24} />
                </div>
                <h2
                  style={{
                    color: '#203478',
                    fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  MISIÓN
                </h2>
              </div>
              <p style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Brindar soluciones profesionales de control solar que mejoren el confort, la privacidad y la
                protección de los espacios, acompañando a nuestros clientes con asesoría especializada para que
                comprendan cómo funciona cada tecnología y puedan tomar decisiones informadas.
              </p>
            </div>
          </div>

          {/* VISIÓN */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full" style={{ border: '1px solid rgba(32,52,120,0.06)' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(91,161,48,0.1)', color: '#5BA130' }}>
                  <Eye size={24} />
                </div>
                <h2
                  style={{
                    color: '#203478',
                    fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  VISIÓN
                </h2>
              </div>
              <p style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Ser una empresa referente en soluciones de control solar, reconocida por la calidad de nuestros
                productos, la excelencia de nuestro servicio y nuestro compromiso con la asesoría especializada y
                la innovación.
              </p>
            </div>
          </div>

          {/* VALORES */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full" style={{ border: '1px solid rgba(32,52,120,0.06)' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(91,161,48,0.1)', color: '#5BA130' }}>
                  <Heart size={24} />
                </div>
                <h2
                  style={{
                    color: '#203478',
                    fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  VALORES
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Excelencia', 'Integridad', 'Innovación', 'Compromiso', 'Servicio', 'Profesionalismo'].map((valor) => (
                  <span 
                    key={valor} 
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{ 
                      background: '#F7FAFC', 
                      color: '#203478', 
                      border: '1px solid rgba(32,52,120,0.1)',
                      fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif'
                    }}
                  >
                    {valor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
