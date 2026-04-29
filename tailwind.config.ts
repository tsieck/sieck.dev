import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#0b0f0c",
          900: "#101511",
          850: "#161d17",
          800: "#1d251e",
          700: "#2c352c",
        },
        grove: {
          500: "#8bb89f",
          400: "#a9d2b7",
          300: "#cce7d3",
        },
        ember: {
          500: "#d7ad7a",
          300: "#f0d0a7",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      boxShadow: {
        monitor: "0 30px 90px rgba(0, 0, 0, 0.45), 0 0 80px rgba(169, 210, 183, 0.12)",
        soft: "0 18px 55px rgba(0, 0, 0, 0.32)",
      },
    },
  },
  plugins: [],
} satisfies Config;
