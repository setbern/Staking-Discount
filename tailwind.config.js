/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myPurple: "#5446F3",
        myGray: "#626362"
      }
    },
  },
  plugins: [],
}