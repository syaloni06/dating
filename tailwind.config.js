/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable dark mode with class strategy
  darkMode: "class", 
  
  // Specify the paths to all of your template files
  content: [
    "./index.html",      // Main HTML file
    "./index.js",        // Main JavaScript file (adjust based on your file structure)
    "./*.html",          // Ensure it scans all HTML files in the root directory
  ],
  
  theme: {
    extend: {
      // Custom box shadow utilities
      boxShadow: {
        'b': "0 0 20px 1px rgba(0,0,0,0.1)",   // Light shadow for subtle effects
        '3xl': "0 0 40px 3px rgba(0,0,0,0.1)", // Larger shadow for more pronounced effects
      },
      
      // Custom text shadow utilities
      textShadow: {
        'custom': '4px 4px 6px rgba(0, 0, 0, 0.6)', // Standard text shadow
        'dark': '3px 3px 6px rgba(255, 255, 255, 0.4)', // Light shadow for dark mode
      },
    },
  },

  variants: {
    extend: {
      boxShadow: ["hover"], // Enable hover variant for box shadows
      textShadow: ['responsive', 'hover', 'focus'], // Enable responsive and hover/focus variants for text shadows
    },
  },

  plugins: [
    // Custom plugin to add text shadow utilities
    function ({ addUtilities }) {
      const shadows = {
        '.text-shadow-custom': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)', // Standard text shadow
        },
        '.dark .text-shadow-custom': {
          textShadow: '3px 3px 6px rgba(255, 255, 255, 0.4)', // Text shadow for dark mode
        },
      };
      addUtilities(shadows, ['responsive', 'hover', 'focus']); // Register utilities for different states
    },
  ],
};
