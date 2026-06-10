import React from 'react'
import { Thermometer, Sun, Eye, AlertCircle } from 'lucide-react'

const bullets = [
  {
    icon: <Thermometer size={22} />,
    text: 'El calor entra por radiación infrarroja (IR).',
  },
  {
    icon: <Sun size={22} />,
    text: 'Los rayos UV deterioran muebles, pisos y piel.',
  },
  {
    icon: <Eye size={22} />,
    text: 'El resplandor genera molestia y fatiga visual.',
  },
  {
    icon: <AlertCircle size={22} />,
    text: 'Muchas soluciones oscurecen demasiado y no resuelven el calor.',
  },
]

export default function Problems() {
  return (
    <section id="problema" className="relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        
        {/* Header */}
        <div className="text-center mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
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
            EL <span style={{ color: '#5BA130' }}>PROBLEMA</span>
          </h2>
          <div className="my-6 mx-auto" style={{ width: '56px', height: '3px', borderRadius: '2px', background: '#5BA130' }} />
          <h3
            style={{
              color: '#203478',
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            El problema no es la luz. Es el infrarrojo.
          </h3>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT — Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl reveal opacity-0 translate-y-8 transition-all duration-700">
            <div
              className="min-h-[400px] lg:min-h-[500px]"
              style={{
                backgroundImage: "url('/450.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(32,52,120,0.6) 0%, rgba(91,161,48,0.4) 100%)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-center p-8">
              <div>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '2px solid rgba(255,255,255,0.3)' }}>
                  <AlertCircle size={32} style={{ color: '#FFFFFF' }} />
                </div>
                <p style={{ color: '#FFFFFF', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '300px' }}>
                  El calor no es visible, pero afecta directamente el confort de sus espacios.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Cards with bullets */}
          <div className="space-y-4">
            {bullets.map((b, i) => (
              <div
                key={i}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 flex items-center gap-5 p-5 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                style={{ transitionDelay: `${i * 100}ms`, border: '1px solid rgba(32,52,120,0.06)' }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(91,161,48,0.1)', color: '#5BA130' }}
                >
                  {b.icon}
                </div>
                <p
                  style={{
                    fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#203478',
                    lineHeight: 1.5,
                  }}
                >
                  {b.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
