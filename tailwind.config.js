module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'rubik': ['Rubik', 'Helvetica', 'Arial', 'sans-serif'],
      'roboto': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      'vollkorn': ['Vollkorn', 'Helvetica', 'Arial', 'sans-serif'],
      'fira': ['Fira Sans Condensed', 'Helvetica', 'Arial', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
