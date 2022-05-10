module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#129b43",
        secondaryGreen: "#0f8639",
      },
      animation: {
        goDown: "goDown .5s ease-in-out forwards",
        goRightTime: "goRightTime .5s ease-in-out forwards",
        goDownTime: "goDownTime .3s ease-in-out forwards",
      },
      keyframes: {
        goDown: {
          "100%": { top: "40px", opacity: 1 },
        },
        goRightTime: {
          "100%": { left: "90px" },
        },
        goDownTime: {
          "100%": { top: "12px" },
        },
      },
    },
  },
  plugins: [],
};
