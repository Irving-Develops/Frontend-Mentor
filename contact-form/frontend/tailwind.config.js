/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
  ,],
  theme: {
    extend: {
      backgroundColor: {
        'primaryGold': '#D3A03C',
        'secondaryGold': '#B8860B',
      }, 
      colors: {
        'primaryGold': '#D3A03C',
        'secondaryGold': '#B8860B',
      },
      textColor: {
        'primary': '#1D1D1D'
      }
    },
  },
  plugins: [],
}

