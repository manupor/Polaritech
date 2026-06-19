import React from 'react'
import { Instagram, ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()

  const productList = t('footer.productsList')
  const productLinks = [
    { label: productList[0], href: '#nuestras-soluciones?tab=0' }, // NANOCERÁMICA
    { label: productList[1], href: '#nuestras-soluciones?tab=1' }, // SEGURIDAD
    { label: productList[2], href: '#nuestras-soluciones?tab=2' }, // SANDBLASTING
    { label: productList[3], href: '#nuestras-soluciones?tab=3' }, // ECONÓMICA
    { label: productList[4], href: '#nuestras-soluciones?tab=4' }, // WHITE OUT / BLACK OUT
  ]
  
  const footerLinks = {
    [t('footer.company')]: [
      { label: t('footer.about'), href: '#nosotros' },
      { label: t('footer.services'), href: '#nuestras-soluciones' },
      { label: t('footer.howItWorks'), href: '#como-funciona' },
      { label: t('footer.applications'), href: '#soluciones' },
    ],
    [t('footer.products')]: productLinks,
    [t('footer.support')]: [
      { label: t('footer.faq'), href: '#faq' },
      { label: t('footer.quote'), href: '#cotizar' },
      { label: t('footer.contact'), href: '#contacto' },
    ],
  }

  const socials = [
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="relative overflow-hidden" style={{ background: '#1a1a2e' }}>
      {/* Top accent line */}
      <div style={{ height: '3px', background: '#5BA130' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="sm:col-span-2">
            <a href="#inicio" className="flex items-center mb-6 group w-fit">
              <img
                src="/logo-white.png"
                alt="Polaritech"
                className="h-10 w-auto object-contain"
                onError={(e) => { e.target.src = '/logo-color.png'; e.target.style.filter = 'brightness(0) invert(1)'; }}
              />
            </a>
            <p className="text-sm leading-relaxed mb-4 max-w-xs" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>
              {t('footer.description')}
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <MapPin size={14} style={{ color: '#5BA130' }} className="shrink-0" />
                <span style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>{t('footer.location')}</span>
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <Phone size={14} style={{ color: '#5BA130' }} className="shrink-0" />
                <a href="tel:+50640343879" className="hover:text-white transition-colors" style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>{t('footer.phone')}</a>
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <Mail size={14} style={{ color: '#5BA130' }} className="shrink-0" />
                <a href="mailto:solucionesintegrales@polaritech.net" className="hover:text-white transition-colors" style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>{t('footer.email')}</a>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center transition-all duration-300 hover:bg-[#5BA130]"
                  style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', color: 'white' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <a
              href="#cotizar"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group"
              style={{ color: '#5BA130', fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif' }}
            >
              {t('footer.requestQuote')}
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4 tracking-wide" style={{ color: 'white', fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif' }}>{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors duration-150"
                      style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>
            © {new Date().getFullYear()} Polaritech. {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs hover:text-white transition-colors duration-150" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-xs hover:text-white transition-colors duration-150" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
