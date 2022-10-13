module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main_blue": "#1c163c",
        "main_beige": "#dfc494",
        "dark_blue": "#0b052c",
        Black: "#000000",
        white: "#ffffff",
        Gris: {
          700: "#383a3d",
        },
      },
      fontSize: {
        base: "0.75rem",
      },
      fontFamily: {
        "made-okine-sans-personal-use": "MADE Okine Sans PERSONAL USE",
      },
      borderRadius: {
        none: "0",
        xs: "0.125rem",
        sm: "0.1875rem",
        default: "0.3125rem",
        lg: "0.48501574993133545rem",
        xl: "0.625rem",
        "2xl": "0.6875rem",
        "3xl": "1.25rem",
        "4xl": "1.5625rem",
        "5xl": "2.1875rem",
        "6xl": "2.25rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
