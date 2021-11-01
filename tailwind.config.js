module.exports = {
  purge: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Handlee': ['Handlee', 'cursive']
      }
    },
  },
  variants: {
    extend: {
      border: ['active', 'focus'],
      textColor: []
    },
  },
  plugins: [],
}
