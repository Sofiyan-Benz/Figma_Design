const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        minWidth: { "476": "476px" },
        maxWidth: {
            "119": "119px",
            "308": "308px",
            "348": "348px",
            "352": "352px",
            "376": "376px",
            "268": "268px",
            "402": "402px",
            "431": "431px",
            "476": "476px",
            "591": "591px",
            "602": "602px",
            "709": "709px",
            "752": "752px",
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
                "297": "297.03px",
                "268": "268px",
                "379": "379px",
                "280": "280px",
                "294": "294px",
                "709": "709px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
