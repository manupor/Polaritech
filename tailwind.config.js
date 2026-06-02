/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Newry theme pairing: Rubik for UI/headings, Merriweather for editorial body
        sans:  ['Rubik', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      colors: {
        // ─── EXACT Polaritech Brand Colors (Libro de Marca) ───────────────────
        brand: {
          navy:    '#203478',   // EXACT — WEB: 203478 from brand book
          'navy-dark':  '#121F48',   // darkened navy for dark backgrounds
          'navy-deep':  '#0A1330',   // very dark navy (page base)
          teal:    '#3EB5CC',   // brand sky-blue (logo top quadrant / page 4 gradient)
          'teal-light': '#6DCDE0',   // lighter teal
          green:   '#88C140',   // brand lime-green (page 5 — action color)
          'green-light': '#A8D960',  // lighter green
          'green-dark':  '#6BAD2E',  // darker green
        },
        // Override Tailwind cyan → brand teal
        cyan: {
          300: '#7ECDE0',
          400: '#6DCDE0',
          500: '#3EB5CC',   // = brand.teal
          600: '#2B96AD',
          700: '#1E718A',
        },
        // Override Tailwind emerald → brand green
        emerald: {
          400: '#A8D960',
          500: '#88C140',   // = brand.green
          600: '#6BAD2E',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-grid': "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'counter': 'counter 0.3s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
