import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Historia', href: '#historia' },
    { label: 'Filosofía', href: '#filosofia' },
    { label: 'El Problema', href: '#problema' },
    { label: 'La Solución', href: '#solucion' },
    { label: 'Soluciones', href: '#nuestras-soluciones' },
    { label: 'Aplicaciones', href: '#soluciones' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[rgba(32,52,120,0.08)]"
      style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: '70px' }}>
        <a href="#inicio" className="flex items-center group">
          <img
            src="/logo-color.png"
            alt="Polaritech — Soluciones en Polarizado"
            className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
          />
        </a>

        <ul className="hidden lg:flex items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-4 py-6 text-sm text-[#555555] hover:text-[#5BA130] transition-colors duration-200 block"
                style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '15px', fontWeight: 500 }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a 
            href="#cotizar" 
            className="inline-flex items-center justify-center text-white font-semibold transition-all duration-300 hover:opacity-90"
            style={{ 
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
              background: '#5BA130',
              padding: '10px 24px',
              fontSize: '14px',
              fontWeight: 600,
              borderRadius: '0',
              textTransform: 'uppercase',
              letterSpacing: '0.02em'
            }}
          >
            Cotizar ahora
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-[#203478] hover:text-[#5BA130] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/97 backdrop-blur-xl border-t border-[rgba(32,52,120,0.10)] px-6 py-4 space-y-1 shadow-lg shadow-[rgba(32,52,120,0.08)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-3 text-sm text-[#203478] hover:text-[#3EB5CC] hover:bg-[rgba(32,52,120,0.05)] rounded-xl transition-colors duration-150"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a href="#cotizar" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
              Cotizar ahora
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
