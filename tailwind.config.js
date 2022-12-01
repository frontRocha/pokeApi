module.exports = {
  content: ["./src/**/*.{tsx, jsx, js, css, html}"],
  theme: {
    extend: {
      colors: {
        yellow: '#FECA1B',
        blue: '#3761A8'
      },
      backgroundImage: theme => ({
        'pokedex-theme': "url('/src/assets/pokedexBackground.jpg')"
      }),
    },
  },
  plugins: [],
}