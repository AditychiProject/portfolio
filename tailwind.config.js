/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    extend: {
      colors: {
        primary: "#1F2937",
        paragraph: "#6B7280",
        light: "#FFFFFF",
        section: "#F3F4F6",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
