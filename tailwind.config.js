/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#89CFF0',
        secondary: '#808080',
        tertiary: '#6082B6',
        success: '#00A36C',
        error: '#FF5733',
        text: '#444'
      },
      fontFamily: {
        heading: '',
        subheading: '',
        paragraph: 'Arial, Helvetica, sans-serif;'
      },
      fontSize: {
        h1: '2.5rem',
        h2: '2rem',
        h3: '1.75rem',
        h4: '1.5rem',
        h5: '1.25rem',
        h6: '1rem',
        link: '1rem',
        paragraph: '1rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
