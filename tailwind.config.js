/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        keyframes: {
            shrink: {
                "0%": { height: "100vh" },
                "100%": { height: "0" },
            },
            moveup: {
                "0%": { transform: "translateY(100vh)" },
                "100%": { transform: "translateY(0)" },
            },
            appear: {
                "0%, 60%": { opacity: "0%" },
                "100%": { opacity: "100%" },
            },
            start: {
                "0%": { opacity: "0%" },
                "100%": { opacity: "100%" },
            },
        },
        animation: {
            shrink: "shrink 0.7s ease-in-out",
            moveup: "moveup 0.7s ease-out",
            appear: "appear 1s ease-in-out",
            start: "start 0.3s ease-in-out",
        },
    },
  },
  plugins: [],
}

