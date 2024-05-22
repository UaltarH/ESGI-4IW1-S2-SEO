/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'secondary': 'var(--secondary)',
        'secondary-light': 'var(--secondary-light)',
        'danger': 'var(--danger)',
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'dark-blue': 'var(--dark-blue)',
        'dark-blue-dark': 'var(--dark-blue-dark)',
      },
    },
    flex: {
      '0.5': '0.5 0.5 0%',
      '1': '1 1 0%',
      '2': '2 2 0%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

