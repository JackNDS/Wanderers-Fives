/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      xxs: '280px',
      xs: '320px',
      sm: '480px',
      md: '800px',
      lg: '976px',
      mobilenav: '1100px',
      xl: '1440px'
    },
    extend: {
      colors: {
        WSWRed: '#C60C30',
      },
     fontFamily: {
      'everlooser': ['everlooser', 'sans-serif'], 
      'gilroyLight': ['gilroyLight', 'sans-serif'], 
      'gilroyExtraBold': ['gilroyExtraBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
