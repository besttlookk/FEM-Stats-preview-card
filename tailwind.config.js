module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue-dark": "hsl(233, 47%, 7%)", //main-bg
        "blue-dark-desaturate": "hsl(244, 38%, 16%)", //card-bg
        primary: "hsl(277, 64%, 61%)",
        "white-full": "hsl(0, 0%, 100%)", // main heading , stats
        "white-75": "hsla(0, 0%, 100%, 0.75)", // main para
        "white-60": "hsla(0, 0%, 100%, 0.6)",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lex: ["Lexend Deca", "sans-serif"],
      },

      width: {
        "90w": "90vw",
      },
    },
  },
  plugins: [],
};
