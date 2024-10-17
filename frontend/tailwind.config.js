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
        nav: "#2B302E",
        button: "#ABA596",
        home: "#E8E4D9",
        footer: "#023D26",
        footer1: "gray-900",
        caja: "#012E1C",
        text: "#5A615D",
        lal: "#9DAB00",
        lal5: "#7B0D1E",
        lal2: "#AD2E24",
        lal3: "#114d4d",
        lal4: "#2d3839",
      },
    },
    plugins: [],
  },
});
