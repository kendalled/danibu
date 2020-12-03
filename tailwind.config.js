module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,css}',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
}
