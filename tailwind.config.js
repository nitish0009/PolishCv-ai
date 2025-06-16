/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: "#6366F1", // indigo-500
          dark: "#4F46E5",    // indigo-600
          light: "#A5B4FC",   // indigo-300
        },
        background: "#f9fafb",
        text: "#1f2937", // neutral-800
      },
      boxShadow: {
        soft: "0 2px 12px rgba(0, 0, 0, 0.05)",
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
        opacity: "opacity",
        transform: "transform",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fade: "fade 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};
