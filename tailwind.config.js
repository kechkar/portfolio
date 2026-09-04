/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1e40af',
          primary: '#2563eb',
          purple: '#6366f1',
          violet: '#7c3aed',
          dark: '#0f172a',
          muted: '#64748b',
          lightBg: '#faf9fe',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        }
      },
      boxShadow: {
        'glow': '0 10px 40px -10px rgba(99, 102, 241, 0.25)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 40px -10px rgba(99, 102, 241, 0.15), 0 8px 20px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
