/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#030712",
          secondary: "#090B15",
          surface: "rgba(15, 23, 42, 0.7)",
        },
        borderGlow: "rgba(255, 255, 255, 0.08)",
        accent: {
          blue: "#00D4FF",
          purple: "#7C3AED",
          success: "#00FF9D",
          warning: "#F59E0B",
        }
      },
      fontFamily: {
        sans: ["Inter", "Satoshi", "Geist", "ui-sans-serif", "system-ui"],
      },
      animation: {
        "pulse-glow": "pulse-glow 3s infinite alternate",
        "scan-line": "scan-line 4s linear infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%": { opacity: 0.3, transform: "scale(0.98)" },
          "100%": { opacity: 0.7, transform: "scale(1.02)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      }
    },
  },
  plugins: [],
}
