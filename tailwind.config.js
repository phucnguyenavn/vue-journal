const colors = require("tailwindcss/colors");
//const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        "screen-85": "85vh",
        "screen-90": "90vh",
        "screen-75": "75vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      width: (theme) => ({
        "screen-85": "85vw",
        "screen-90": "90vw",
        "screen-75": "75vw",
        "screen/2": "50vw",
        "screen/3": "calc(100vw / 3)",
        "screen/4": "calc(100vw / 4)",
        "screen/5": "calc(100vw / 5)",
      }),
      inset: {
        "top-3px": "3px",
      },
      fontSize: {
        xss: ".65rem",
        xxs: ".75rem",
      },
      backgroundImage: {
        1: "url('/src/assets/1.svg')",
        2: "url('/src/assets/2.svg')",
        3: "url('/src/assets/3.svg')",
        4: "url('/src/assets/4.svg')",
        5: "url('/src/assets/5.svg')",
      },
    },
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.warmGray,
      red: colors.red,
      blue: colors.sky,
      amber: colors.amber,
      green: colors.green,
    },
    minHeight : {
      '100px': '100px',
      "25px" : "25px"
    }
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
      ringColor: ["hover", "active"],
    },
  },
  plugins: [],
};
