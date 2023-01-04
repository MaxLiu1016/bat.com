/** @type {import('tailwindcss').Config} */
const theme = require("./theme/config.commentJs.js");
module.exports = {
  darkMode: 'class',
  safelist: [
    {
      pattern: /text-(red|green|blue)-(100|400)/,
      variants: ['group-hover']
    },
    {
      pattern: /bg-(red|green|blue)-(100|400)/,
      variants: ['group-hover']
    }
  ],
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
        disabled: theme.disabled,
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
