/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
  ,],
  theme: {
    extend: {
      backgroundColor: {
        'primaryDark': '#1D1D1D',
        'primaryGold': '#D3A03C',
        'secondaryGold': '#B8860B',
      }, 
      colors: {
        'primaryGold': '#D3A03C',
        'secondaryGold': '#B8860B',
      },
      textColor: {
        'primaryText': '#1D1D1D',
        'secondaryText': '#D3A03C',
      }
    },
  },
  plugins: [],
}

