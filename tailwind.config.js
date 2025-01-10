module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'p-red': '#FF3300',
        'light-grey': '#333333',
        'chrome-green': '#C3FC68'
      },
      fontSize: {
        '10px': '10px',
        '15px': '15px',
        '42px': '42px',
        '50px': '50px'
      },
      fontFamily: {
        'mono': ['Alegreya Sans', 'sans-serif']
      },
      height: {
        '25px': '25px',
        '60vh': '60vh' 
      },
      width: {
        '20%': '20%',
        '25%': '25%',
        '30%': '30%',
        '20px': '20px',
        '30px': '30px',
        '60px': '60px'
      },
      boxShadow: {
        '0xl': '0 1px 10px rgba(0, 0, 0)',
      },
      keyframes: {
        'move-sideways': {
          '0%': {
            backgroundPosition: 'right center'
          },
          '25%': {
            backgroundPosition: 'center center'
          },
          '50%': {
            backgroundPosition: 'left center'
          },
          '75%': {
            backgroundPosition: 'center center'
          },
          '100%': {
            backgroundPosition: 'right center'
          },
        },
        'pulse': {
          '0%': {
            transform: 'scale(1)'
          },
          '25%': {
            transform: 'scale(0.8)'
          },
          '50%': {
            transform: 'scale(1)'
          },
          '100%': {
            transform: 'scale(0.8)'
          },
        }
      },
      animation: {
        'move-sideways': 'move-sideways 27s ease-in-out infinite',
        'pulse': 'pulse 1.5s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
