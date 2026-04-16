/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        'light-bg': '#09090b', /* Overridden to dark zinc for dark theme global background */
        'light-text': '#f4f4f5',
        'dark-bg': '#09090b', 
        'dark-card': '#18181b',
        'gray-text': '#666666',
        'accent-orange': '#FF8C42',
        'accent-blue': '#4F46E5',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'soft-gradient': 'linear-gradient(135deg, #FDFDFD 0%, #F3F4F6 100%)',
      }
    },
  },
  plugins: [],
}
