/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          bg: '#06090E',
          surface: '#0B111A',
          card: '#0F1623',
          cardHover: '#151F32',
          border: 'rgba(16, 185, 129, 0.15)',
        },
        cyber: {
          emerald: '#10B981',
          mint: '#34D399',
          teal: '#2DD4BF',
          amber: '#F59E0B',
          glow: 'rgba(16, 185, 129, 0.25)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', '"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
