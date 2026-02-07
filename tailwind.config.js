/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F0F",
        secondary: "#161616",
        card: "#1A1A1A",
        "card-hover": "#222222",
        border: "#2A2A2A",
        accent: "#00C896",
        "accent-hover": "#00E6AC",
        "accent-muted": "rgba(0, 200, 150, 0.1)",
        muted: "#888888",
        "text-primary": "#F5F5F5",
        "text-secondary": "#A0A0A0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
