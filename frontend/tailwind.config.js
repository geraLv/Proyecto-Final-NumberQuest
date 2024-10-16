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
        nav: "#E3E2B2",
        button: "#0C301F",
        home: "#F8FADC",
        brandDark: "#606d80",
        dark: "#1f1f20",
        light: "#dce0e6",
        lal: "#ffffff",
        lal5: "#7B0D1E",
        lal2: "#AD2E24",
        lal3: "#C75146",
        lal4: "#580804",
      },
    },
    plugins: [],
  },
});
