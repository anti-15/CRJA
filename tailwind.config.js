/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  purge: ["./index.html"],
  theme: {
    extend: {
      colors: {
        cyan: '#9cdbff',
      }
    },
  },
  variants:{},
  plugins: []
}