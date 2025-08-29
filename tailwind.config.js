/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-nunito)", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        movePfp: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0)",
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            borderRadius: "0.5rem",
          },
          "50%": {
            transform: "translate3d(-36px, 18px, 5px)",
            boxShadow: "8px 8px 10px 0 #111",
            borderRadius: "0.625rem",
          },
        },
      },
      animation: {
        movePfp: "movePfp 6s linear infinite",
      },
    },
  },
  plugins: [],
};
