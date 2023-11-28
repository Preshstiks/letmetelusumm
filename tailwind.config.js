/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      bebas: ["Bebas Neue", "sans-serif"],
      playfair: ["Playfair Display", "serif"],
    },
    colors: {
      red: "#951216",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#E5E4E2",
      dime: "#FCFCFC",
      dark: "#F2F2F2",
    },
    screens: {
      minism: "530px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      minilg: "900px",

      lg: "1024px",
      maxlg: "1050px",
      // => @media (min-width: 1024px) { ... }
      minixl: "1120px",
      smxl: "1170px",

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
