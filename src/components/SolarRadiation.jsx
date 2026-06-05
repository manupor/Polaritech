import React from 'react'

const rows = [
  {
    title: 'Luz visible',
    accent: '#7c3aed',
    titleColor: '#203478',
    desc: 'Permite la entrada de iluminación natural.',
  },
  {
    title: 'Infrarrojo (IR)',
    accent: '#f97316',
    titleColor: '#e85d2a',
    desc: 'Es la principal responsable del calor que entra al interior.',
  },
  {
    title: 'Ultravioleta (UV)',
    accent: '#88C140',
    titleColor: '#5BA130',
    desc: 'Puede deteriorar muebles, pisos, cortinas, obras de arte y la piel.',
  },
]

export default function SolarRadiation() {
  return (
    <section id="ciencia" className="relative py-20 sm:py-32 overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Top band: text + photo ─────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-28">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2
              style={{
                color: '#203478',
                fontFamily: 'Rubik, sans-serif',
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              ¿Sabías que el <span style={{ color: '#5BA130' }}>calor</span> no siempre es visible?
            </h2>

            <div
              className="my-6"
              style={{ width: '56px', height: '3px', borderRadius: '2px', background: '#5BA130' }}
            />

            <p style={{ color: '#5a6a82', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '46ch' }}>
              La mayor parte de la energía que sentimos al entrar a un espacio no proviene
              de la luz, sino de la radiación infrarroja que atraviesa los vidrios.
            </p>
          </div>

          <div
            className="reveal opacity-0 translate-y-8 transition-all duration-700 relative rounded-2xl overflow-hidden shadow-xl shadow-[rgba(32,52,120,0.12)]"
            style={{ minHeight: '380px' }}
          >
            <img
              src="/450.jpg"
              alt="Luz solar entrando por ventanales"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ── Centered heading ───────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
          <h3
            style={{
              color: '#203478',
              fontFamily: 'Rubik, sans-serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
            }}
          >
            Así interactúa <span style={{ color: '#5BA130' }}>el sol</span> con tus espacios
          </h3>
          <p className="mt-4" style={{ color: '#5a6a82', fontSize: '1rem', lineHeight: 1.7 }}>
            La energía solar está compuesta por diferentes tipos de radiación. Algunas iluminan,
            otras generan calor y otras pueden deteriorar interiores con el tiempo.
          </p>
        </div>

        {/* ── Radiation table ────────────────────────────────────────── */}
        <div className="glass-card rounded-2xl overflow-hidden max-w-4xl mx-auto reveal opacity-0 translate-y-8 transition-all duration-700">
          {rows.map((r, i) => (
            <div
              key={r.title}
              className="grid sm:grid-cols-[minmax(0,0.9fr)_1.4fr]"
              style={{ borderTop: i > 0 ? '1px solid rgba(32,52,120,0.08)' : 'none' }}
            >
              <div className="flex items-center gap-4 px-6 sm:px-8 py-7">
                <span style={{ width: '4px', height: '30px', borderRadius: '2px', background: r.accent }} />
                <span
                  style={{
                    fontFamily: 'Rubik, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    color: r.titleColor,
                  }}
                >
                  {r.title}
                </span>
              </div>
              <div
                className="flex items-center px-6 sm:px-8 py-5 sm:py-7 border-t sm:border-t-0 sm:border-l border-[rgba(32,52,120,0.08)]"
                style={{
                  color: '#5a6a82',
                  fontSize: '0.98rem',
                  lineHeight: 1.6,
                }}
              >
                {r.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
