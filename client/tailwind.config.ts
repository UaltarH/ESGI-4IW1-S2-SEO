import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'selector',
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
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
      width: {
        'xl': 'var(--xl)',
        'lg': 'var(--lg)',
        'md': 'var(--md)',
        'sm': 'var(--sm)',
      },
      maxWidth: {
        'xl': 'var(--xl)',
        'lg': 'var(--lg)',
        'md': 'var(--md)',
        'sm': 'var(--sm)',
      },
      minWidth: {
        'xl': 'var(--xl)',
        'lg': 'var(--lg)',
        'md': 'var(--md)',
        'sm': 'var(--sm)',
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

