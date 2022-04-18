module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        lightGray: "hsl(212, 45%, 89%)",
        grayishBlue: "hsl(220, 15%, 55%)",
        darkBlue: "hsl(218, 44%, 22%)",
      },
    },
  },
  plugins: [],
};
