/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "background-blue": "#2B4865",
        "deep-blue": "#002B5B",
        "light-blue": "#256D85",
        accent: "#8FE3CF",
      },
    },
  },
  plugins: [],
};
