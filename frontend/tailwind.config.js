/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F8F5EF',
          200: '#F3EFE6',
          300: '#E9E3D5',
          400: '#DFD8C8',
        },
        forest: {
          50: '#EBF4EE',
          100: '#D5E6DA',
          500: '#2F543F',
          600: '#1F3B2C',
          700: '#162C21',
          800: '#0E1D16',
        },
        sand: {
          500: '#8C8275',
          700: '#5C5449',
          900: '#2A2621',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      boxShadow: {
        editorial: '0 4px 20px -2px rgba(31, 59, 44, 0.05), 0 2px 6px -1px rgba(31, 59, 44, 0.03)',
        card: '0 10px 30px -4px rgba(31, 59, 44, 0.06), 0 4px 12px -2px rgba(31, 59, 44, 0.04)',
        hover: '0 20px 40px -6px rgba(31, 59, 44, 0.1), 0 8px 16px -4px rgba(31, 59, 44, 0.05)',
        modal: '0 25px 50px -12px rgba(31, 59, 44, 0.25)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '24px',
      }
    },
  },
  plugins: [],
}
