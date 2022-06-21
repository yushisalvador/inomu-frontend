module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#ec7263",
        background: "#0e2431",
        nav: "#f0d9da",
        navClick: "#e7b3b3",
      },
      fontFamily: {
        body: ["Dosis", "Alfa Slab One"],
      },
    },
  },
  plugins: [],
};
