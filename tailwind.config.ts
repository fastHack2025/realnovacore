// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // 🌙 Dark mode by class
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo 600 - ton violet classe
        secondary: "#6366F1", // Indigo 500
        accent: "#C084FC", // Violet flashy
        background: "#F9FAFB",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // 🔥 Modern Font
        heading: ['Oswald', 'sans-serif'], // 🔥 Headings ultra stylés
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'hero-pattern': "url('/backgrounds/hero-bg.svg')",
        'footer-texture': "url('/backgrounds/footer-texture.png')",
      },
      animation: {
        fade: "fadeIn 2s ease-in-out",
        bounceSlow: "bounce 2s infinite",
        pulseFast: "pulse 1s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // ✍️ Meilleur style pour Blog / Articles
    require('@tailwindcss/forms'), // 📝 Forms clean
    require('@tailwindcss/aspect-ratio'), // 📺 Responsive images/videos
    require('tailwind-scrollbar-hide'), // 🛹 Cacher scrollbar
  ],
};

export default config;
