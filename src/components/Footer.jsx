import React from 'react'
import { Instagram, Facebook, Twitter, Linkedin, ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react'

const footerLinks = {
  Empresa: [
    { label: 'Sobre nosotros', href: '#nosotros' },
    { label: 'Nuestros servicios', href: '#productos' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Aplicaciones', href: '#aplicaciones' },
  ],
  Productos: [
    { label: 'Polarizado Básico', href: '#productos' },
    { label: 'Polarizado Seguridad', href: '#productos' },
    { label: 'Nano Cerámica', href: '#productos' },
    { label: 'Anti-UV Transparente', href: '#productos' },
    { label: 'Silver Espejo', href: '#productos' },
    { label: 'Black Out / White Out', href: '#productos' },
  ],
  Soporte: [
    { label: 'Preguntas frecuentes', href: '#faq' },
    { label: 'Solicitar cotización', href: '#cotizar' },
    { label: 'Contacto', href: '#cotizar' },
  ],
}

const socials = [
  { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
  { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
  { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
  { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#EEF4F8', borderTop: '1px solid rgba(32,52,120,0.08)' }}>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="sm:col-span-2">
            <a href="#inicio" className="flex items-center mb-6 group w-fit">
              <img
                src="/logo-color.png"
                alt="Polaritech — Soluciones en Polarizado"
                className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-70"
              />
            </a>
            <p className="text-sm leading-relaxed mb-4 max-w-xs font-light" style={{ color: '#5a6a82' }}>
              Distribuidor autorizado en Costa Rica desde 2016. Polarizado arquitectónico
              premium para hogares, oficinas y edificios en todo el país.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-xs" style={{ color: '#5a6a82' }}>
                <MapPin size={12} className="text-[#3EB5CC] shrink-0" />
                <span>Costa Rica — Servicio a domicilio nacional</span>
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: '#5a6a82' }}>
                <Phone size={12} className="text-[#3EB5CC] shrink-0" />
                <a href="tel:+50688888888" className="hover:text-[#203478] transition-colors">+506 8888-8888</a>
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: '#5a6a82' }}>
                <Mail size={12} className="text-[#3EB5CC] shrink-0" />
                <a href="mailto:info@polaritech.net" className="hover:text-[#203478] transition-colors">info@polaritech.net</a>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="icon-lux icon-lux-round icon-lux-hover"
                  style={{ width: '42px', height: '42px' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <a
              href="#cotizar"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#3EB5CC] hover:text-[#203478] transition-colors duration-200 group"
            >
              Solicitar cotización
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[#203478] font-semibold text-sm mb-4 tracking-wide">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-[#203478] transition-colors duration-150 font-light"
                      style={{ color: '#5a6a82' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(32,52,120,0.12)' }}>
          <p className="text-xs" style={{ color: '#6b7a99' }}>
            © {new Date().getFullYear()} Polaritech. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs hover:text-[#203478] transition-colors duration-150" style={{ color: '#6b7a99' }}>
              Política de privacidad
            </a>
            <a href="#" className="text-xs hover:text-[#203478] transition-colors duration-150" style={{ color: '#6b7a99' }}>
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
