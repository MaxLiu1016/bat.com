/** @type {import('tailwindcss').Config} */
const theme = require("./theme/config.commentJs.js");
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "600px",
      md: "960px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: theme.primary,
        lightPrimary: theme.lightPrimary,
        secondary: theme.secondary,
        primary: '#CFCFCF',
        lightPrimary: '#616161',
        secondary: '#381E25',
        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
        },
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],

}
