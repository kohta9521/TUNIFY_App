/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark Neon Pink UI Color Scheme
        background: "#121212",
        surface: "#1E1E1E",
        inactive: "#535353",
        subtext: "#B3B3B3",
        accent: "#FF10F0",
        text: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
