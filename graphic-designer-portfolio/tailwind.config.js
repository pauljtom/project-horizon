/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#FFB6C1',
        'secondary-pink': '#FFE4E1',
        'accent-pink': '#FF69B4',
        'dark-pink': '#DB7093',
        'light-pink': '#FFF0F5',
        'coral': '#FF7F7F',
        'peach': '#FFCCCB',
        'cream': '#FFF8DC',
        'grey-light': '#F5F5F5',
        'grey-medium': '#CCCCCC',
        'grey-dark': '#666666',
        'text-dark': '#333333',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FFB6C1 0%, #FF69B4 100%)',
        'gradient-soft': 'linear-gradient(135deg, #FFF0F5 0%, #FFE4E1 100%)',
        'gradient-sunset': 'linear-gradient(90deg, #FF7F7F 0%, #FFB6C1 50%, #FFCCCB 100%)',
      },
      boxShadow: {
        'soft': '0 4px 15px rgba(255, 182, 193, 0.2)',
        'medium': '0 8px 25px rgba(255, 182, 193, 0.3)',
        'strong': '0 15px 35px rgba(255, 182, 193, 0.4)',
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        'xxl': '4rem',
      },
      fontFamily: {
        'primary': ['Comfortaa', 'cursive'],
        'secondary': ['Quicksand', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease',
        'fade-left': 'fade-left 0.6s ease',
        'fade-right': 'fade-right 0.6s ease',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'fade-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-left': {
          'from': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-right': {
          'from': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      transitionDuration: {
        'medium': '300ms',
      },
    },
  },
  plugins: [],
}