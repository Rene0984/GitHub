/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html',],
  theme: {
    extend: {
      fontFamily: {
        sans: ['New Super Mario Font U', 'sans-serif']
      },
      backgroundImage: theme => ({
        'wave-pattern': "url('.public/img/wave-white.png')",
        'wave-pattern-dots': "url('../img/pattern-white-dots.png')",
        'pattern-characters-red': "url('../img/pattern-characters-red.png')",
        'character-mario': "url('../img/character-l.png')",
        'wave-pink': "url('../img/wave-pink.png')",
        'yellow-dots': "url('../img/pattern-yellow-dots.png')",
      }),
      screens:{
        'xsm': '320px'

      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}