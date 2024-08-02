/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
    },
    colors: {
      black: "#1C2124",
      cyan: "#40DFED",
      gray: "#adc4c3",
      red: "#ff9e81",
    },
  },
  plugins: [],
};
