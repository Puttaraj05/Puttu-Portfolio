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
          light: '#a7bfff',
          DEFAULT: '#4361ee',
          dark: '#3a0ca3',
        },
        accent: {
          light: '#f7b2ff',
          DEFAULT: '#b5179e',
          dark: '#72026c',
        },
        background: {
          light: '#f8f9fa',
          DEFAULT: '#f1f3f8',
          dark: '#232946',
        },
        glass: 'rgba(255,255,255,0.15)',
      },
      boxShadow: {
        '3d': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}