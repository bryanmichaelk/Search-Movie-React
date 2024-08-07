/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bisque: "#ffe4c4",
        coral: "#ff7f50",
      },
      perspective: {
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
