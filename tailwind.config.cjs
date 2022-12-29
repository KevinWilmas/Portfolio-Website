/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          a: "#66bfbf",
          b: "#EAF6F6",
          c: "#1b7f69",
          d: "#66bf93",
          e: "#F76B8A",
          f: "#6482BE",
          g: "#bfbf66",
          h: "#6464BE",
          i: "#BE8264",
          j: "#9cd6d6",
          k: "#F76B8A",
          l: "#9cd69c"
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
