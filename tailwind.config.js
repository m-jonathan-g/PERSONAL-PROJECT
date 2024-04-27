/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
         scheme: {
          light: '#06141b',
          default:'#11212d',
          dark: '#ffefd5',
         }
      },
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': {'raw': '(max-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)' }, 
          '80%': {transform: 'scaleY(1.3)' }, 
          '100%': {transform: 'scaleY(1)' }, 
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      keyframes: {
        'slide-in' : {
          '0%': {transform: 'translateX(100%)' },
          '100%': {transform: 'translateX(0)' },
        }
      },
      animation: {
        'slide-in': 'slide-in 1s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

