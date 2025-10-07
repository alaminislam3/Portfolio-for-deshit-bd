/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#FFBD39", 
            "secondary": "#FFBD39",
            "accent": "#37cdbe",
            "neutral": "#3d4451",
            "base-100": "#ffffff",
          },
        },
      ],
    },
    
  }
  