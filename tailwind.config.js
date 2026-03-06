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
          DEFAULT: '#7F1D1D',
          dark: '#991B1B',
          light: '#B91C1C',
        },
        accent: '#F59E0B',
        success: '#10B981',
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#FEF2F2',
        },
        text: {
          dark: '#111827',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],
}
