/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        passion: ["Passion One", "cursive"],
      },
      colors: {
        title: "#213665",
        rosado: "#FFD1BD",
        azulclarito: "#B6EEFF",
      },
      fontSize: {
        sm: ["0.65rem", "0.75rem"],
      },
    },
  },
  plugins: [],
};
