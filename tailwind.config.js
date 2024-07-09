/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1f85b5',
        secondary: '#808080',
        tertiary: '#6082B6',
        success: '#00A36C',
        error: '#FF5733',
        text: '#444'
      },
      fontFamily: {
        heading: 'Arial, Helvetica, sans-serif;',
        subheading: 'Times New Roman, Helvetica, sans-serif;',
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
      },
      borderRadius: {
        // common practice is to have a child element's border-radius be half of the container's
        outer: '0.5rem',
        inner: '0.25rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
