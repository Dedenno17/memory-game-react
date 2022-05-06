module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#129b43",
      },
      animation: {
        goDown: "goDown .5s ease-in-out forwards",
      },
      keyframes: {
        goDown: {
          "100%": { top: "40px", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
