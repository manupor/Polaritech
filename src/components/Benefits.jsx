import React from 'react'
import { ArrowRight } from 'lucide-react'

const pillars = [
  {
    num: '01',
    title: 'Experiencia',
    desc: 'Más de 10 años en la industria nos han permitido entender las necesidades reales de cada cliente y cada proyecto. Asesoramos con soluciones precisas y efectivas que realmente marcan la diferencia.',
  },
  {
    num: '02',
    title: 'Siempre a la vanguardia en fabricantes y desarrollo de film',
    desc: 'Trabajamos con los mejores fabricantes y desarrolladores de film a nivel mundial, incorporando innovación constante para ofrecer soluciones más eficientes, duraderas y con el mejor desempeño del mercado.',
  },
  {
    num: '03',
    title: 'Instalación profesional y acabados premium',
    desc: 'Nuestro equipo certificado garantiza una instalación precisa, limpia y duradera, cuidando cada detalle en cada proyecto. Acabados impecables y atención premium de principio a fin.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">

        {/* Header + intro */}
        <div className="max-w-3xl mx-auto text-center reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2
            style={{
              fontFamily: 'Rubik, sans-serif',
              fontSize: 'clamp(2.8rem, 4.2vw, 3.6rem)',
              fontWeight: 900,
              color: '#203478',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
            }}
          >
            ¿Por qué <span style={{ color: '#5BA130' }}>Polaritech</span>?
          </h2>
          <div className="my-6 mx-auto" style={{ width: '56px', height: '3px', borderRadius: '2px', background: '#5BA130' }} />
          <p style={{ color: '#5a6a82', fontSize: '1.05rem', lineHeight: 1.7 }}>
            No solo instalamos polarizado. Diseñamos bienestar, eficiencia y protección
            para cada espacio. Soluciones que combinan{' '}
            <strong style={{ color: '#203478', fontWeight: 700 }}>ciencia, experiencia</strong> y
            los <strong style={{ color: '#203478', fontWeight: 700 }}>mejores materiales</strong>.
          </p>
        </div>

        {/* 3 numbered pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-16">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col px-0 md:px-8 py-8 md:py-0"
              style={{
                transitionDelay: `${i * 100}ms`,
                borderTop: '1px solid rgba(32,52,120,0.10)',
              }}
            >
              <div className="flex items-start gap-4">
                <span
                  style={{
                    fontFamily: 'Rubik, sans-serif',
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    color: '#5BA130',
                    paddingTop: '20px',
                  }}
                >
                  {p.num}.
                </span>
                <div className="flex-1 pt-4">
                  <h3
                    style={{
                      fontFamily: 'Rubik, sans-serif',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#203478',
                      lineHeight: 1.3,
                      marginBottom: '14px',
                    }}
                  >
                    {p.title}
                  </h3>
                  <div className="mb-4" style={{ width: '32px', height: '2px', background: '#5BA130' }} />
                  <p
                    style={{
                      fontFamily: 'Rubik, sans-serif',
                      fontSize: '0.9rem',
                      color: '#6b7a99',
                      lineHeight: 1.65,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip — Más que polarizado, ingeniería del confort */}
        <div
          className="reveal opacity-0 translate-y-8 transition-all duration-700 mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl px-8 py-8"
          style={{ border: '1px solid rgba(32,52,120,0.12)', background: '#F7FAFC' }}
        >
          <h3
            style={{
              fontFamily: 'Rubik, sans-serif',
              fontSize: 'clamp(1.3rem, 2.4vw, 1.7rem)',
              fontWeight: 800,
              color: '#203478',
              lineHeight: 1.2,
            }}
          >
            Más que polarizado,<br />
            <span style={{ color: '#5BA130' }}>ingeniería del confort.</span>
          </h3>
          <a href="#cotizar" className="btn-primary shrink-0">
            Cotizar mi proyecto
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  )
}
