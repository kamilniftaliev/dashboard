const colors = require("tailwindcss/colors");

console.log(`colors`, colors);

module.exports = {
  mode: "jit",
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
};
