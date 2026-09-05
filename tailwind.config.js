/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          // Dark mode (Matrix theme)
          matrix: {
            bg: '#000000',
            primary: '#00ff41', // Neon green
            secondary: '#008f11',
            accent: '#ff0000', // Red
            text: '#ffffff',
            muted: '#565656',
          },
          // Light mode
          royal: {
            bg: '#ffffff',
            primary: '#1e40af', // Royal blue
            secondary: '#3b82f6',
            accent: '#0369a1',
            text: '#0f172a',
            muted: '#64748b',
          },
          // Shared colors
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        },
        fontFamily: {
          matrix: ['Orbitron', 'sans-serif'],
          base: ['Sora', 'system-ui', 'sans-serif'],
        },
        animation: {
          'matrix-flow': 'matrix-flow 20s linear infinite',
          'fade-in': 'fade-in 0.5s ease-in-out',
          'slide-up': 'slide-up 0.5s ease-out',
        },
        keyframes: {
          'matrix-flow': {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(100%)' },
          },
          'fade-in': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          'slide-up': {
            '0%': { transform: 'translateY(10px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  };