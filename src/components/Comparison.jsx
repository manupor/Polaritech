import React from 'react'
import { X, Check } from 'lucide-react'

const rows = [
  { feature: 'Depende del tono',       conv: { label: 'Sí',                  good: false }, nano: { label: 'No',             good: true } },
  { feature: 'Transparencia',          conv: { label: 'Baja',                good: false }, nano: { label: 'Alta',           good: true } },
  { feature: 'Reducción térmica (IRR)',conv: { label: 'Media',               good: false }, nano: { label: 'Alta',           good: true } },
  { feature: 'Protección UV',          conv: { label: 'Parcial',             good: false }, nano: { label: '99.5%',          good: true } },
  { feature: 'Confort visual',         conv: { label: 'Variable',            good: false }, nano: { label: 'Superior',       good: true } },
  { feature: 'Durabilidad',            conv: { label: 'Media',               good: false }, nano: { label: 'Alta',           good: true } },
  { feature: 'Estabilidad de color',   conv: { label: 'Puede decolorarse',   good: false }, nano: { label: 'No se decolora', good: true } },
  { feature: 'Señal (celular, GPS)',   conv: { label: 'Puede interferir',    good: false }, nano: { label: 'No interfiere',  good: true } },
]

function Cell({ data, isNano }) {
  return (
    <td
      className="py-4 px-5 text-sm font-medium"
      style={isNano ? { background: 'rgba(136,193,64,0.06)' } : {}}
    >
      <div className="flex items-center gap-2">
        {data.good ? (
          <Check size={14} className="shrink-0" style={{ color: isNano ? '#88C140' : '#3EB5CC' }} />
        ) : (
          <X size={14} className="shrink-0" style={{ color: '#94a3b8' }} />
        )}
        <span style={{ color: data.good ? '#203478' : '#94a3b8' }}>
          {data.label}
        </span>
      </div>
    </td>
  )
}

export default function Comparison() {
  return (
    <section id="comparativa" className="relative py-20 sm:py-32 overflow-hidden" style={{ background: '#EEF4F8' }}>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
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
            COMPARATIVA
          </h2>
          <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.85rem', color: '#6b7a99' }}>
            Nano cerámica vs. polarizado convencional.
          </p>
          <span className="title-accent" />
        </div>

        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 glass-card rounded-2xl overflow-hidden">
         <div className="overflow-x-auto no-scrollbar">
          <table className="w-full border-collapse min-w-[560px]">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(32,52,120,0.12)' }}>
                <th className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-widest w-1/3" style={{ color: '#6b7a99' }}>
                  Característica
                </th>
                <th className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-widest w-1/3" style={{ color: '#6b7a99' }}>
                  Convencional
                </th>
                <th
                  className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-widest w-1/3"
                  style={{ color: '#88C140', background: 'rgba(136,193,64,0.05)' }}
                >
                  Nano Cerámica Polaritech
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  style={{
                    borderBottom: i < rows.length - 1 ? '1px solid rgba(32,52,120,0.06)' : 'none',
                  }}
                >
                  <td className="py-4 px-5 text-sm font-medium" style={{ color: '#203478' }}>{row.feature}</td>
                  <Cell data={row.conv} isNano={false} />
                  <Cell data={row.nano} isNano={true} />
                </tr>
              ))}
            </tbody>
          </table>
         </div>
        </div>

        <div className="mt-10 text-center reveal opacity-0 translate-y-8 transition-all duration-700">
          <a href="#cotizar" className="btn-primary">
            Quiero la tecnología nano cerámica
          </a>
        </div>
      </div>
    </section>
  )
}
