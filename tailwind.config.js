/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      backgroundImage:{ 
        'bahrin': "url(Bahrain-pic.jpg)"
      }
    },
  },
  plugins: [
    daisyui,
  ],
  
    //...
    daisyui: {
      themes: ["light", "dark", "cupcake"],
  }
}

