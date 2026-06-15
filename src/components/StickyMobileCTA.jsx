import React, { useState, useEffect } from 'react'
import { MessageCircle, Phone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function StickyMobileCTA() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 sm:hidden transition-transform duration-500 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white/98 backdrop-blur-xl border-t border-[rgba(32,52,120,0.10)] shadow-[0_-4px_20px_rgba(32,52,120,0.10)] px-4 py-3 flex gap-3">
        <a
          href="https://wa.me/50688888888?text=Hola%2C%20me%20interesa%20cotizar%20polarizado."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm text-white"
          style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
        >
          <MessageCircle size={16} />
          {t('stickyCTA.whatsapp')}
        </a>
        <a
          href="#cotizar"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm btn-primary"
        >
          <Phone size={16} />
          {t('stickyCTA.quote')}
        </a>
      </div>
    </div>
  )
}
