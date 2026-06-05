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
    <section id="problema" className="relative overflow-hidden">
        <div
          className="reveal opacity-0 translate-y-8 transition-all duration-700 grid lg:grid-cols-2"
        >

          {/* LEFT — image with overlay + centered headline */}
          <div className="relative min-h-[480px] lg:min-h-[540px]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/450.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(255,255,255,0.80)' }}
            />

            <div className="relative z-10 h-full flex items-center justify-center text-center p-8 lg:p-10">
              <h2
                className="font-black"
                style={{
                  color: '#203478',
                  fontFamily: 'Rubik, sans-serif',
                  fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                  fontWeight: 900,
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                }}
              >
                El problema<br />
                no es la luz.<br />
                Es el infrarrojo.
              </h2>
            </div>
          </div>

          {/* RIGHT — light panel with bullets */}
          <div
            className="flex items-center px-6 py-12 sm:px-10 lg:px-14"
            style={{ background: '#EEF4F8' }}
          >
            <div className="w-full space-y-8">
              {bullets.map((b, i) => (
                <div
                  key={i}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 flex items-start gap-5 group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="icon-lux icon-lux-sm icon-lux-round">
                    {b.icon}
                  </div>
                  <p
                    style={{
                      fontFamily: 'Rubik, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: '#203478',
                      lineHeight: 1.5,
                      paddingTop: '10px',
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
