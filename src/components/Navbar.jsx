import React, { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  const navLinks = [
    { label: t('nav.inicio'), href: '#inicio' },
    { label: t('nav.historia'), href: '#historia' },
    { label: t('nav.filosofia'), href: '#filosofia' },
    { label: t('nav.problema'), href: '#problema' },
    { label: t('nav.solucion'), href: '#solucion' },
    { label: t('nav.soluciones'), href: '#nuestras-soluciones' },
    { label: t('nav.aplicaciones'), href: '#soluciones' },
    { label: t('nav.contacto'), href: '#contacto' },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between" style={{ height: '90px' }}>
        {/* Logo */}
        <a href="#inicio" className="flex items-center px-6">
          <img
            src="/logo-color.png"
            alt="Polaritech"
            className="h-12 w-auto object-contain"
          />
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
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100"
            style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', color: '#555' }}
            aria-label="Toggle language"
          >
            <Globe size={16} />
            <span>{language === 'es' ? 'ES' : 'EN'}</span>
          </button>

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
            {t('nav.cotizar')}
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
          <div className="pt-4 space-y-2">
            {/* Language Toggle Mobile */}
            <button
              onClick={() => { toggleLanguage(); setMobileOpen(false) }}
              className="flex items-center gap-2 px-4 py-3 text-sm text-[#555] hover:text-[#5BA130] transition-colors duration-150 w-full"
              style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}
            >
              <Globe size={16} />
              {language === 'es' ? 'Cambiar a English' : 'Switch to Español'}
            </button>

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
              {t('nav.cotizar')}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
