const { RiArrowGoBackFill } = require('react-icons/ri');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "/node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
        'lgMin': {'min': '1023px'},
        // => @media (min-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
        'mdMin': {'min': '767px'},
        // => @media (min-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        'smMin': {'min': '639px'},
        // => @media (min-width: 639px) { ... }
      },
      
      colors: {
  
        // ctr K + ctr G genera paleta de colores para tailwind
        // Color Rojo Primario
        primary: {
          100: "#d8e6fd",
          200: "#b1cdfb",
          300: "#89b4fa",
          400: "#629bf8",
          500: "#3b82f6",
          600: "#2f68c5",
          700: "#234e94",
          800: "#183462",
          900: "#0c1a31"
        },
  
        // Colores a utilizar
        version1: '#003973',
        version2: '#0c1a31',
        version3: '#E5E5BE',

        trendingButtong: 'hsl(0deg 0% 0% / 0.25)',
        
        // Colores del modo escuro
        sun: '#FCD34D',
        darkModeColorHover: '#183462',
        darkModeColor: '#0c1a31',
        
      },

      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
       },
  
       fontSize: {
        'h1Size': '3rem',
        'h2Size': '2.25rem',
        'h3Size': '1.2rem',
      },
  
      //  Sombras a mi estilo
       boxShadow: {
        'simpleSh': '1px 1px 12px rgba(0, 0, 0, 0.3)',
        'simpleSh+': '1px 1px 12px rgba(0, 0, 0, 0.5)',
        'simpleSh++': '1px 1px 12px rgba(0, 0, 0, 0.7)',
        'simpleSh+++': '1px 1px 12px rgba(0, 0, 0, 0.9)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
