module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Blue & Neon Green Tech Palette
        primary: '#5BC0BE', // Neon Green Accent
        secondary: '#3A506B', // Mid Blue
        accent: '#5BC0BE', // Neon Green for highlights
        'dark-blue': '#0B132B', // Deep Dark Blue
        'blue-steel': '#1C2541', // Blue Steel
        'gradient-start': '#0B132B', // Gradient start
        'gradient-end': '#1C2541', // Gradient end
        'text-primary': '#F5F5F5', // Main text color (white smoke)
        'text-secondary': '#C0C0C0', // Secondary text (light gray)
        'bg-light-section': '#FAFAFA', // Light section background
        success: '#059669', // Emerald - Growth & Analytics
        warning: '#d97706', // Amber - Attention & Highlights
        
        // Sophisticated Neutrals
        neutral: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        
        // Data & Analytics Colors
        'data-blue': '#1e40af',    // Deep analytical blue
        'data-purple': '#6d28d9',  // Computing purple
        'data-teal': '#0f766e',    // Database teal
        'data-orange': '#ea580c',  // Visualization orange
        'data-green': '#16a34a',   // Success green
        
        // Professional Grays
        'gray-cool': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        
        // Legacy colors for backward compatibility
        'blue-corporate': '#1E3A8A',
        'gray-charcoal': '#374151',
        'blue-accent': '#3B82F6',
        'green-professional': '#059669',
        'gray-medium': '#6B7280',
        'gray-dark': '#111827',
        'gray-light': '#E5E7EB',
        'bg-light': '#F9FAFB',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        display: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'Inter', 'system-ui', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
