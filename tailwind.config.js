/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["index.html", "./public/**/*.{html,js}"],
  theme: {
    container : {
      center: true,
      padding : '16px'
    },

    extend: {
      colors: {
        // primary: '#be123c',
        primary: '#b63939',
        secondary: '#475569',
        icons: '#cbd5e1',
        black: '#1e293b',
      },
    },
  },
  plugins: [],
};
