const colors = require("tailwindcss/colors");

console.log(`colors`, colors);

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
};
