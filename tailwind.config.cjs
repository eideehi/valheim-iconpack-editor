const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,svelte}"],
  theme: {
    backgroundColors: {
      "base-color": "rgb(var(--bg-color) / <alpha-value>)",
      "light": "rgb(var(--bg-color-light) / <alpha-value>)",
      "dark": "rgb(var(--bg-color-dark) / <alpha-value>)",
    },
    borderColors: {
      "base-color": "rgb(var(--border-color) / <alpha-value>)",
      "light": "rgb(var(--border-color-light) / <alpha-value>)",
      "dark": "rgb(var(--border-color-dark) / <alpha-value>)",
      "hover": "rgb(var(--border-color-hover) / <alpha-value>)",
    },
    textColors: {
      "base-color": "rgb(var(--text-color) / <alpha-value>)",
      "light": "rgb(var(--text-color-light) / <alpha-value>)",
      "dark": "rgb(var(--text-color-dark) / <alpha-value>)",
      "hover": "rgb(var(--text-color-hover) / <alpha-value>)",
      "link": "rgb(var(--text-color-link) / <alpha-value>)",
    },
    backgroundColor: ({ theme }) => ({
      ...theme("colors"),
      ...theme("backgroundColors"),
    }),
    borderColor: ({ theme }) => ({
      ...theme("colors"),
      ...theme("borderColors"),
    }),
    textColor: ({ theme }) => ({
      ...theme("colors"),
      ...theme("textColors"),
    }),
    extend: {
      colors: {
        "ui-red": "rgb(var(--ui-color-red) / <alpha-value>)",
        "ui-green": "rgb(var(--ui-color-green) / <alpha-value>)",
        "ui-blue": "rgb(var(--ui-color-blue) / <alpha-value>)",
        "ui-yellow": "rgb(var(--ui-color-yellow) / <alpha-value>)",
        "ui-white": "rgb(var(--ui-color-white) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["Noto Sans JP", "Noto Sans", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
