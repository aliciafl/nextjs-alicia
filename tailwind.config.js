// tailwind.config.js
module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily:{
          sans: [
            '-apple-system',
            '"Helvetica Neue"',
            'sans-serif',
          ],
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
}