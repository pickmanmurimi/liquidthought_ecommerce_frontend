module.exports = {
  purge: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Handlee': ['Handlee', 'cursive'],
        'Dosis': ['Dosis', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
      border: ['active', 'focus'],
      scale: ['group-hover'],
      rotate: ['group-hover'],
      translate: ['group-hover'],
      display: ['group-hover'],
      textColor: []
    },
  },
  plugins: [],
}
