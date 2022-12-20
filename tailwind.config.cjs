/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          a: "#66bfbf",
          b: "#e0ebe8"
        }
      },
      fontFamily: {
        Merriweather: ["Merriweather", "Montserrat", "Sacramento"],
        Sacramento: ["Sacramento"]
      }
    }
  },
  plugins: []
}
