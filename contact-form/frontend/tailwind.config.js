/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      silver: {
        darkGrey: "#1D1D1D",
        gold: "#D3A03C",
        darkGold: "#B8860B",
        silver: "#F5F5F5",
        taupe: "#D2B48C",
        softGreen: "#98FB98",
      },
      colors: {
        // gold: "#D3A03C",
        // darkGold: "#B8860B",

        darkGrey: "#1D1D1D",
        gold: "#D3A03C",
        darkGold: "#B8860B",
        silver: "#F5F5F5",
        taupe: "#D2B48C",
        softGreen: "#98FB98",
      },
      textColor: {
        darkGrey: "#1D1D1D",
        gold: "#D3A03C",
        darkGold: "#B8860B",
        silver: "#F5F5F5",
        taupe: "#D2B48C",
        softGreen: "#98FB98",
        // darkGrey: "#1D1D1D",
        // gold: "#D3A03C",
      },
    },
  },
  plugins: [],
};

