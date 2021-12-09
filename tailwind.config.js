const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        minWidth: { "476": "476px" },
        maxWidth: {
            "119": "119px",
            "308": "308px",
            "336": "336px",
            "348": "348px",
            "319": "319px",
            "352": "352px",
            "376": "376px",
            "268": "268px",
            "402": "402px",
            "407": "407px",
            "513": "513px",
            "549": "549px",
            "541": "541px",
            "544": "544px",
            "431": "431px",
            "476": "476px",
            "479": "479px",
            "585": "585px",
            "591": "591px",
            "602": "602px",

            "709": "709px",
            "752": "752px",
            "1219": "1219px",
        },

        boxShadow: {
            "xl": "0px 4px 31px 0px #00000026",
        },

        borderRadius: {
            "large": "33px",
            DEFAULT: "10px",
        },
        borderColor: (theme) => ({
            ...theme("borderColors"),
            "primary": "#DEDEDE",
        }),
        screens: {
            ...defaultTheme.screens,
            sm: { max: "767px", min: "200px" },
        },
        height: {
            "551": "551px",
            "624": "624px",
        },

        fontFamily: {
            sans: ["Graphik", "sans-serif"],
        },
        backgroundColor: (theme) => ({
            ...theme("colors"),
            primary: "#4452FE",
            secondary: "#1E1E1E",
            danger: "#e3342f",
        }),
        extend: {
            // lineHeight: {
            //     "25": "25px",
            // },
            backgroundImage: {
                "hero-pattern":
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0E0E0E 66.15%)",
            },
            width: {
                "476": "476px",
                "25": "25.321rem",
                "36.5": "36.563rem",
                "348": "348px",
                "405": "405px",
                "297": "297.03px",
                "268": "268px",
                "379": "379px",
                "383": "383px",
                "280": "280px",
                "294": "294px",
                "591": "591px",
                "709": "709px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
