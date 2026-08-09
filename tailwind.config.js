/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#041328',
          900: '#072042',
          800: '#0d3161',
          700: '#144586',
          600: '#1e5ca8',
          50: '#f0f4fa',
        },
        gold: {
          600: '#866436',
          500: '#9b7745',
          400: '#b38e58',
          300: '#cbab74',
          200: '#e1ca9d',
          100: '#f5ebd9',
          50: '#faf6ee',
        },
        warm: {
          50: '#FCFBF9',
          100: '#FAF8F5',
          200: '#F4F0E8',
          300: '#EAE3D6',
          400: '#D6CBB8',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Merriweather', 'serif'],
      },
      boxShadow: {
        'executive': '0 20px 40px -15px rgba(7, 32, 66, 0.08), 0 0 15px rgba(155, 119, 69, 0.05)',
        'executive-hover': '0 30px 60px -12px rgba(7, 32, 66, 0.15), 0 0 25px rgba(155, 119, 69, 0.12)',
        'gold-glow': '0 0 25px -5px rgba(155, 119, 69, 0.3)',
      }
    },
  },
  plugins: [],
}
