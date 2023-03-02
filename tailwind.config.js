/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    extend: {
      colors: {
        green: "#1AD993",
        aquamarine: "#ABFFE0",
        blue: "#503AE7",
        purple: "#832BC1",
        black: "#14142B",
        gray: "#AFB0B9",
        lightGray: "#F4F2FF",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
