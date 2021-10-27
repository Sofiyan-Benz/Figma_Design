const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      ...defaultTheme.screens,
      sm: { max: "767px", min: "200px" },
    },
    height: {
      "551px": "551px",
    },
    inset: {
      67: "67.1%",
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#4452FE",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0E0E0E 66.15%)",
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
