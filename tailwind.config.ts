import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        heading: ['Instrument Serif', 'Georgia', 'serif'],
      },
      fontWeight: {
        'heading': '400',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
    },
  },
  plugins: [],
}
export default config