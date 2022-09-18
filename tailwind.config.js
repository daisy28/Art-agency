/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./index.html"],
  theme: {
    extend: {
      colors : {
        pink: "#EE0382",
        lightPink: "rgb(206, 145, 155)"
      }
    },

    fontFamily : {
      "sans": ('PT Sans', 'sans-serif')
    }
  },
  plugins: [],
}
