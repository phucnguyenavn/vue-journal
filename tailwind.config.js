const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        "screen-85": "85vh",
        "screen-90": "90vh",
        "screen-95": "95vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      inset: {
        "top-3px": "3px",
      },
    },
    colors: {
      whilte: colors.white,
      black: colors.black,
      gray: colors.warmGray,
      red: colors.red,
      blue: colors.sky,
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
      ringColor: ["hover", "active"],
    },
  },
  plugins: [],
};
