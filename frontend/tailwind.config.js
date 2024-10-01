/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/routes/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#2b4c7e",
        secondary: "#606d80",
        brandDark: "#606d80",
        dark: "#1f1f20",
        light: "#dce0e6",
      },
    },
    plugins: [],
  },
});
