// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Blue
        secondary: '#EAB308', // Yellow
        accent: '#EC4899', // Pink
        background: '#F3F4F6', // Light Gray
        card: '#FFFFFF', // White
        border: '#E5E7EB', // Light Border
        textPrimary: '#1F2937', // Dark Gray
        textSecondary: '#6B7280', // Gray
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
