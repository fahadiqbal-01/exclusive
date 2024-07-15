/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1170px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#FFFFFF",
        white: "#FAFAFA",
        orange: "#DB4444",
        secondary: "#F5F5F5",
        yellow: "#FFAD33",
        border: "#7D8184",
      },
    },
  },
  plugins: [],
};
