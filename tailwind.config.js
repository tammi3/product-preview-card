/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        cream:' hsl(30, 38%, 92%)',
        cyan: ' hsl(158, 36%, 37%)',
        darkBlue: 'hsl(212, 21%, 14%)',
        darkGrayish:'hsl(228, 12%, 48%)'
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        fraunces:['Fraunces']
      },
      letterSpacing: {
        widest: '.3em',
      },
      width: {
        'mobile': ' 375px',
        // => @media (min-width: 375px) { ... }
  
        'laptop': '1440px',
        // => @media (min-width: 1440px) { ... }
  
  
      },
    },
  },
  plugins: [],
}

