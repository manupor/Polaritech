import React, { useState, useRef, useCallback, useEffect } from 'react'
import { ArrowLeftRight } from 'lucide-react'

const BEFORE_STYLE = {
  background: 'linear-gradient(135deg, #b45309 0%, #92400e 30%, #78350f 60%, #451a03 100%)',
}
const AFTER_STYLE = {
  background: 'linear-gradient(135deg, #3EB5CC 0%, #2B8BA8 30%, #203478 65%, #121F48 100%)',
}

const METRICS = [
  { label: '↓ 85% calor', bg: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-300' },
  { label: '↓ 99% UV', bg: 'bg-blue-500/20 border-blue-500/30 text-blue-300' },
  { label: '↑ Confort', bg: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300' },
]

export default function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)
  const containerRef = useRef(null)

  const move = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const newPos = Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100))
    setPos(newPos)
  }, [])

  const onMouseMove = useCallback((e) => { if (dragging.current) move(e.clientX) }, [move])
  const onMouseUp = useCallback(() => { dragging.current = false }, [])
  const onTouchMove = useCallback((e) => {
    if (!dragging.current) return
    e.preventDefault()
    move(e.touches[0].clientX)
  }, [move])

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp)
    return () => window.removeEventListener('mouseup', onMouseUp)
  }, [onMouseUp])

  return (
    <section id="proyectos" className="relative py-16 sm:py-24 overflow-hidden" style={{ background: '#EEF4F8' }}>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
            LA DIFERENCIA QUE VES Y SIENTES
          </h2>
          <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.85rem', color: '#6b7a99' }}>
            Desliza el control para comparar el antes y el después.
          </p>
          <span className="title-accent" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div
            ref={containerRef}
            className="relative h-72 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl shadow-black/60"
            onMouseMove={onMouseMove}
            onMouseLeave={() => { dragging.current = false }}
            onTouchMove={onTouchMove}
            onTouchEnd={() => { dragging.current = false }}
          >
            {/* BEFORE panel */}
            <div className="absolute inset-0 flex flex-col" style={BEFORE_STYLE}>
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.08) 59px, rgba(255,255,255,0.08) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.08) 59px, rgba(255,255,255,0.08) 60px)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-black text-white/20 leading-none">40°C</div>
                  <div className="text-white/30 text-sm mt-2 tracking-widest uppercase">Sin control solar</div>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/90 text-white text-xs font-bold uppercase tracking-wider">
                  ANTES
                </div>
                <div className="text-orange-200/70 text-xs font-medium">Calor · Resplandor · Gasto</div>
              </div>
            </div>

            {/* AFTER panel — clipped */}
            <div
              className="absolute inset-0 flex flex-col"
              style={{
                clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`,
                ...AFTER_STYLE,
              }}
            >
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.08) 59px, rgba(255,255,255,0.08) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.08) 59px, rgba(255,255,255,0.08) 60px)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-black text-white/20 leading-none">24°C</div>
                  <div className="text-white/30 text-sm mt-2 tracking-widest uppercase">Con Polaritech</div>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/90 text-white text-xs font-bold uppercase tracking-wider">
                  DESPUÉS
                </div>
                <div className="text-cyan-200/70 text-xs font-medium">Fresco · Privado · Eficiente</div>
              </div>
              {/* Metrics top right */}
              <div className="absolute top-5 right-5 flex flex-col gap-2">
                {METRICS.map((m) => (
                  <div key={m.label} className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold backdrop-blur-sm ${m.bg}`}>
                    {m.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Divider line */}
            <div
              className="absolute top-0 bottom-0 w-px bg-white/60 backdrop-blur-sm pointer-events-none"
              style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
            />

            {/* Drag handle */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center cursor-ew-resize z-10 select-none"
              style={{ left: `${pos}%` }}
              onMouseDown={() => { dragging.current = true }}
              onTouchStart={() => { dragging.current = true }}
            >
              <ArrowLeftRight className="w-5 h-5 text-slate-700" />
            </div>

            {/* Drag hint */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-none">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 text-xs font-medium">
                <ArrowLeftRight className="w-3 h-3" />
                Arrastra para comparar
              </div>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { value: '85%', label: 'Calor rechazado', sub: 'Nano Cerámica' },
              { value: '99%', label: 'Rayos UV bloqueados', sub: 'Protección total' },
              { value: '25%', label: 'Ahorro energético', sub: 'Menos A/C' },
            ].map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-5 text-center hover:border-[rgba(62,181,204,0.40)] transition-colors duration-300">
                <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
                <div className="text-sm font-semibold" style={{ color: '#203478' }}>{s.label}</div>
                <div className="text-xs mt-0.5" style={{ color: '#6b7a99' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
