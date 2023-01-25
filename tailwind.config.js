/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      '1': '20px',
      '2': '120px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    }, 
    extend: { 
      colors:{
      tahiti:{
        300:'#03a1fc',
        400: '#3425'
      },
    },
    },
  },
  plugins: [],
}
