/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        // Light mode
        primary: "#fdf2f8",
        secondary: "#ffffff",
        popover: "#f1e2eb",
        text: "#020617",
        warning: "#dd1313",

        // Dark mode
        "primary-dark": "#2b2d30",
        "secondary-dark": "#1f2023",
        "popover-dark": "#171919",
        "text-dark": "#f8fafc",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}