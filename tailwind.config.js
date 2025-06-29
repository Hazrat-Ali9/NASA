/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'rocket-launch': 'rocket-launch 4s ease-out forwards',
        'rocket-landing': 'rocket-landing 3s ease-in forwards',
        'flame': 'flame 0.1s ease-in-out infinite alternate',
        'boost-trail': 'boost-trail 2s ease-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(147, 51, 234, 0.8)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'rocket-launch': {
          '0%': { 
            transform: 'translateX(-50%) translateY(0) scale(1) rotate(45deg)', 
            opacity: '1' 
          },
          '20%': { 
            transform: 'translateX(-50%) translateY(-20vh) scale(1.1) rotate(45deg)', 
            opacity: '1' 
          },
          '100%': { 
            transform: 'translateX(-50%) translateY(-120vh) scale(0.3) rotate(45deg)', 
            opacity: '0' 
          },
        },
        'rocket-landing': {
          '0%': { 
            transform: 'translateX(-50%) translateY(-50vh) scale(0.5) rotate(180deg)', 
            opacity: '0.8' 
          },
          '50%': { 
            transform: 'translateX(-50%) translateY(-20vh) scale(0.8) rotate(180deg)', 
            opacity: '1' 
          },
          '100%': { 
            transform: 'translateX(-50%) translateY(0) scale(1) rotate(180deg)', 
            opacity: '1' 
          },
        },
        flame: {
          '0%': { transform: 'scaleY(1) scaleX(1)' },
          '100%': { transform: 'scaleY(1.3) scaleX(1.1)' },
        },
        'boost-trail': {
          '0%': { 
            height: '0%', 
            opacity: '0' 
          },
          '50%': { 
            height: '100%', 
            opacity: '0.6' 
          },
          '100%': { 
            height: '100%', 
            opacity: '0' 
          },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};