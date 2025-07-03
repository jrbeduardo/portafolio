module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta profesional
        'blue-corporate': '#1E3A8A',
        'gray-charcoal': '#374151',
        'blue-accent': '#3B82F6',
        'green-professional': '#059669',
        'gray-medium': '#6B7280',
        'gray-dark': '#111827',
        'gray-light': '#E5E7EB',
        'bg-light': '#F9FAFB',
        // Colores legacy para compatibilidad
        theme: '#374151',
        tomato: '#fe5550',
        limon: '#059669',
        myyellow: '#dc9032',
        cafe: '#9e7a58',
        azul: '#3B82F6'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1232px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}
