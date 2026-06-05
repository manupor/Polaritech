import React from 'react'

function SpectrumVisual() {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-3 mb-3">
        <div style={{ fontSize: '26px', lineHeight: 1 }}>☀️</div>
        <div className="flex-1 relative">
          <div
            style={{
              height: '26px',
              borderRadius: '3px',
              background: 'linear-gradient(90deg, #7c3aed 0%, #3b82f6 22%, #22c55e 42%, #facc15 58%, #f97316 74%, #ef4444 88%, #b91c1c 100%)',
            }}
          />
          <div
            className="flex justify-between mt-1"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: '9px', fontWeight: 700, color: '#6b7a99' }}
          >
            <span>UV</span>
            <span>LUZ VISIBLE</span>
            <span>IR</span>
          </div>
        </div>
      </div>
      <p
        className="text-center"
        style={{ fontFamily: 'Rubik, sans-serif', fontSize: '11px', color: '#6b7a99', fontWeight: 500 }}
      >
        El calor está en el IR
      </p>
    </div>
  )
}

function BarChartVisual() {
  return (
    <div className="flex items-end justify-center gap-8 mt-5">
      <div className="flex flex-col items-center">
        <div
          style={{
            width: '54px',
            height: '96px',
            background: '#d95d1a',
            borderRadius: '3px 3px 0 0',
          }}
        />
        <div className="h-px w-full" style={{ background: '#cbd5e1' }} />
        <div className="mt-2 text-center">
          <div
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: '1.5rem', fontWeight: 900, color: '#203478' }}
          >
            80%
          </div>
          <div style={{ fontFamily: 'Rubik, sans-serif', fontSize: '10px', color: '#6b7a99' }}>
            IR (Infrarrojo)
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div
          style={{
            width: '54px',
            height: '24px',
            background: '#94a3b8',
            borderRadius: '3px 3px 0 0',
          }}
        />
        <div className="h-px w-full" style={{ background: '#cbd5e1' }} />
        <div className="mt-2 text-center">
          <div
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: '1.5rem', fontWeight: 900, color: '#203478' }}
          >
            20%
          </div>
          <div style={{ fontFamily: 'Rubik, sans-serif', fontSize: '10px', color: '#6b7a99' }}>
            Luz visible
          </div>
        </div>
      </div>
    </div>
  )
}

function ParticleVisual() {
  const dots = [
    [20, 18], [40, 12], [60, 22], [80, 14],
    [25, 38], [50, 32], [72, 40],
    [15, 55], [38, 58], [62, 52], [82, 60],
    [28, 74], [55, 70], [76, 78],
  ]
  return (
    <div className="mt-5 relative" style={{ height: '100px' }}>
      <svg width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* IR arrows coming in from left */}
        {[20, 40, 60, 80].map((y) => (
          <line key={y} x1="0" y1={y} x2="28" y2={y} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrow-orange)" />
        ))}
        {/* Deflected arrows going right */}
        {[15, 35, 55, 75].map((y, i) => (
          <line key={`d${i}`} x1="72" y1={y} x2="100" y2={y - 8} stroke="#3EB5CC" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />
        ))}
        {/* Particle dots */}
        {dots.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 4 : 2.5} fill="#203478" opacity="0.75" />
        ))}
        <defs>
          <marker id="arrow-orange" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
          </marker>
          <marker id="arrow-blue" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="#3EB5CC" />
          </marker>
        </defs>
      </svg>
    </div>
  )
}

function ToneVisual() {
  return (
    <div className="flex gap-3 mt-5">
      <div className="flex-1 text-center">
        <div
          style={{
            height: '64px',
            background: 'linear-gradient(160deg, #c8ddf0 0%, #a8c8e8 100%)',
            border: '1px solid #b0c8de',
            borderRadius: '3px',
          }}
        />
        <div
          className="mt-2 font-bold"
          style={{ fontFamily: 'Rubik, sans-serif', fontSize: '12px', color: '#203478' }}
        >
          Claro
        </div>
        <div style={{ fontFamily: 'Rubik, sans-serif', fontSize: '10px', color: '#6b7a99' }}>
          Alto rendimiento
        </div>
      </div>
      <div className="flex-1 text-center">
        <div
          style={{
            height: '64px',
            background: 'linear-gradient(160deg, #3a4a5c 0%, #1e2a36 100%)',
            border: '1px solid #4a5a6c',
            borderRadius: '3px',
          }}
        />
        <div
          className="mt-2 font-bold"
          style={{ fontFamily: 'Rubik, sans-serif', fontSize: '12px', color: '#203478' }}
        >
          Oscuro
        </div>
        <div style={{ fontFamily: 'Rubik, sans-serif', fontSize: '10px', color: '#6b7a99' }}>
          Bajo rendimiento
        </div>
      </div>
    </div>
  )
}

const cards = [
  {
    title: 'Luz visible ≠ calor',
    desc: 'La luz visible es solo una pequeña parte de la energía solar.',
    Visual: SpectrumVisual,
  },
  {
    title: 'El IR es el principal causante del calor',
    desc: 'El infrarrojo (IR) es responsable de hasta el 80% del calor que entra por los vidrios.',
    Visual: BarChartVisual,
  },
  {
    title: 'Nano cerámica ≠ convencional',
    desc: 'La nano cerámica utiliza tecnología de partículas cerámicas que bloquean el IR sin depender del tinte.',
    Visual: ParticleVisual,
  },
  {
    title: 'La nano cerámica NO depende del tono',
    desc: 'Una lámina clara puede reducir más calor que una oscura convencional.',
    Visual: ToneVisual,
  },
]

export default function Science() {
  return (
    <section id="ciencia-legacy" className="relative overflow-hidden" style={{ background: '#EEF4F8' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="text-center mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2
            className="font-black"
            style={{
              fontFamily: 'Rubik, sans-serif',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontWeight: 900,
              color: '#203478',
              letterSpacing: '0.01em',
            }}
          >
            LA CIENCIA LO EXPLICA
          </h2>
          <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.85rem', color: '#6b7a99' }}>
            Educamos para generar confianza.
          </p>
          <span className="title-accent" />
        </div>

        {/* 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col px-6 py-6"
              style={{
                transitionDelay: `${i * 90}ms`,
                borderLeft: i > 0 ? '1px solid rgba(32,52,120,0.12)' : 'none',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#203478',
                  lineHeight: 1.35,
                  marginBottom: '8px',
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontSize: '0.82rem',
                  color: '#6b7a99',
                  lineHeight: 1.55,
                }}
              >
                {card.desc}
              </p>
              <card.Visual />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
