import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020617",
          900: "#07120C",
          800: "#0a1a12",
          700: "#14261c",
        },
        accent: {
          DEFAULT: "#22C55E",
          light: "#6EE7B7",
          glow: "#10B981",
          mint: "#6EE7B7",
          lime: "#A3E635",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34,197,94,0.12), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
