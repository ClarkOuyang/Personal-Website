/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
      colors: {
        // Fresh green & white academic palette: emerald green primary, soft green accent.
        brand: {
          50: '#f2faf5',
          100: '#def2e6',
          200: '#bfe7d2',
          300: '#92d4b4',
          400: '#5fbb92',
          500: '#3da377',
          600: '#2f8461',
          700: '#286a4f',
          800: '#235543',
          900: '#1e4638',
          950: '#132e25',
        },
        olive: {
          50: '#f4faf2',
          100: '#e6f3df',
          200: '#cde6bd',
          300: '#aed395',
          400: '#8cbb6b',
          500: '#6f9e4a',
          600: '#577d39',
          700: '#42602d',
          800: '#364d27',
          900: '#2f4223',
        },
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgb(0 0 0 / 0.04), 0 4px 16px -4px rgb(0 0 0 / 0.08)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
