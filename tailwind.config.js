const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {

      'large': '33px',
    },
    borderColor: theme => ({
      ...theme('borderColors'),
      'primary': '#DEDEDE',
    }),
    screens: {
      ...defaultTheme.screens,
      sm: { max: "767px", min: "200px" },
    },
    height: {
      "551px": "551px",
    },
    

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#4452FE",
      secondary: "#343434",
      danger: "#e3342f",
    }),
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0E0E0E 66.15%)",
      },
      width: {
        '29': '29.75rem',
        '25': '25.321rem',
        '36': '36.563rem'


      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
