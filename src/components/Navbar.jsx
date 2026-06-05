import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const products = [
  'Lámina Polarizado Básica',
  'Polarizado de Seguridad',
  'Polarizado Anti-UV Transparente',
  'Polarizado Nano Cerámica',
  'Control Solar con Privacidad',
  'Polarizado Silver Espejo',
  'Sand Blasting Decorativo',
  'Black Out / White Out',
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Productos', href: '#productos', hasDropdown: true },
    { label: 'Cómo Funciona', href: '#como-funciona' },
    { label: 'Aplicaciones', href: '#aplicaciones' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-[rgba(32,52,120,0.10)] py-3 shadow-lg shadow-[rgba(32,52,120,0.08)]'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center group">
          <img
            src="/logo-color.png"
            alt="Polaritech — Soluciones en Polarizado"
            className="h-9 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <li key={link.label} className="relative group">
                <button
                  className="flex items-center gap-1 px-4 py-2 text-sm text-[#203478] hover:text-[#3EB5CC] transition-colors duration-200 rounded-lg hover:bg-[rgba(32,52,120,0.05)]"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  {link.label}
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 transition-all duration-200 ${
                    productsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="rounded-xl p-2 shadow-2xl" style={{ background: '#FFFFFF', border: '1px solid rgba(32,52,120,0.10)' }}>
                    {products.map((p) => (
                      <a
                        key={p}
                        href="#productos"
                        className="block px-4 py-2.5 text-sm text-[#5a6a82] hover:text-[#203478] hover:bg-[rgba(32,52,120,0.05)] rounded-lg transition-colors duration-150"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm text-[#203478] hover:text-[#3EB5CC] transition-colors duration-200 rounded-lg hover:bg-[rgba(32,52,120,0.05)] block"
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#cotizar" className="btn-primary text-sm py-2.5 px-6">
            Cotizar ahora
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-[#203478] hover:text-[#3EB5CC] transition-colors"
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
