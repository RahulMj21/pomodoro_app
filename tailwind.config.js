/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#323437",
        bgTextFade: "#646669",
        borderColor: "#4c4d4d",
      },
    },
  },
  plugins: [],
};
