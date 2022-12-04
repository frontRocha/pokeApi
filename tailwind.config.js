module.exports = {
  content: ["./src/**/*.{tsx, jsx, js, css, html}"],
  theme: {
    extend: {
      colors: {
        yellow: '#FECA1B',
        blue: '#3761A8'
      },
      backgroundImage: theme => ({
        'pokebola-theme': "url('/src/assets/pokebola-Theme.png')"
      }),
    },
  },
  plugins: [],
}