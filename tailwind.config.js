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
        // Cool academic palette: deep navy, slate gray, olive green accent.
        brand: {
          50: '#f0f4f8',
          100: '#dce6ef',
          200: '#bccfdf',
          300: '#92afc7',
          400: '#6287a9',
          500: '#46688d',
          600: '#365175',
          700: '#2c4260',
          800: '#27374e',
          900: '#1f2b3e',
          950: '#141c2b',
        },
        olive: {
          50: '#f6f8f1',
          100: '#eaf0dd',
          200: '#d6e2bc',
          300: '#bdcf95',
          400: '#a2b86c',
          500: '#84974a',
          600: '#67793a',
          700: '#4f5d2e',
          800: '#424a29',
          900: '#393f25',
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
