/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f5f0ff',
          100: '#ede0ff',
          200: '#dbc5ff',
          300: '#c39bff',
          400: '#a86bff',
          500: '#8b3dff',
          600: '#7c22f5',
          700: '#6a14de',
          800: '#5812b5',
          900: '#481093',
          950: '#2d0663',
        },
        gold: {
          300: '#fcd97a',
          400: '#f9c040',
          500: '#f0a500',
          600: '#d48800',
        },
        neutral: {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-sm':  'clamp(0.875rem, 0.825rem + 0.25vw, 1rem)',
        'fluid-base':'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        'fluid-lg':  'clamp(1.125rem, 1.05rem + 0.375vw, 1.375rem)',
        'fluid-xl':  'clamp(1.25rem, 1.15rem + 0.5vw, 1.625rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.35rem + 0.75vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.65rem + 1.125vw, 2.625rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.95rem + 1.5vw, 3.25rem)',
        'fluid-5xl': 'clamp(2.75rem, 2.25rem + 2.5vw, 4.5rem)',
      },
      animation: {
        'fade-in':      'fadeIn 0.6s ease-out forwards',
        'slide-up':     'slideUp 0.6s ease-out forwards',
        'slide-in-left':'slideInLeft 0.5s ease-out forwards',
        'float':        'float 6s ease-in-out infinite',
        'pulse-slow':   'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'gradient-radial':   'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero':     'linear-gradient(135deg, #2d0663 0%, #481093 40%, #7c22f5 100%)',
        'gradient-gold':     'linear-gradient(135deg, #f0a500 0%, #fcd97a 100%)',
        'gradient-subtle':   'linear-gradient(180deg, #f5f0ff 0%, #fafafa 100%)',
        'mesh-purple':       'radial-gradient(at 40% 20%, #8b3dff22 0px, transparent 50%), radial-gradient(at 80% 0%, #f0a50022 0px, transparent 50%), radial-gradient(at 0% 50%, #6a14de22 0px, transparent 50%)',
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(139, 61, 255, 0.3)',
        'glow-gold':   '0 0 20px rgba(240, 165, 0, 0.4)',
        'card':        '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover':  '0 12px 40px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
