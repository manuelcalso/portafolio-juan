/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kalnia: ["Kalnia-Medium", "sans-serif"],
      },
      animation: {
        "bg-pan-top": "bg-pan-top 3s ease-in-out infinite", // Puedes ajustar la duración y el tipo de temporización aquí
      },
      keyframes: {
        "bg-pan-top": {
          "0%": {
            backgroundPosition: "50% 100%",
          },
          "100%": {
            backgroundPosition: "50% 0%",
          },
        },
      },
    },
  },
  plugins: [],
};
