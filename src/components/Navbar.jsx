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
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between" style={{ height: '90px' }}>
        {/* Logo with curved/skewed container - ConstructZilla style */}
        <a href="#inicio" className="flex items-center relative group" style={{ height: '90px' }}>
          {/* Skewed background */}
          <div 
            className="absolute left-0 top-0 h-full flex items-center px-8"
            style={{ 
              background: '#203478',
              transform: 'skewX(-20deg)',
              transformOrigin: 'top left',
              width: '280px',
              left: '-40px'
            }}
          >
            {/* Inner container to un-skew the logo */}
            <div style={{ transform: 'skewX(20deg)' }}>
              <img
                src="/logo-white.png"
                alt="Polaritech"
                className="h-10 w-auto object-contain"
                onError={(e) => { e.target.src = '/logo-color.png'; e.target.style.filter = 'brightness(0) invert(1)'; }}
              />
            </div>
          </div>
          {/* Spacer for the skewed container */}
          <div style={{ width: '240px' }}></div>
        </a>

        <ul className="hidden lg:flex items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-4 py-8 text-sm transition-colors duration-200 block relative group"
                style={{ 
                  fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', 
                  fontSize: '15px', 
                  fontWeight: 500,
                  color: '#555'
                }}
              >
                <span className="group-hover:text-[#5BA130] transition-colors">{link.label}</span>
                <span className="absolute bottom-6 left-4 right-4 h-0.5 bg-[#5BA130] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
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
              padding: '12px 28px',
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            Cotizar ahora
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-[#203478] hover:text-[#5BA130] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-white border-t border-[rgba(32,52,120,0.10)] ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-3 text-sm text-[#555] hover:text-[#5BA130] hover:bg-[rgba(91,161,48,0.05)] rounded-lg transition-colors duration-150"
              style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <a 
              href="#cotizar" 
              className="block w-full text-center text-white font-semibold py-3"
              style={{ 
                fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                background: '#5BA130',
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
              onClick={() => setMobileOpen(false)}
            >
              Cotizar ahora
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
