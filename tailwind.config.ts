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
        void: {
          DEFAULT: "#08080f",
          deep: "#050508",
          panel: "#0f0f18",
          border: "#1e1e2e",
        },
        violet: {
          glow: "#a78bfa",
          DEFAULT: "#7c3aed",
        },
        coral: {
          DEFAULT: "#f97316",
          soft: "#fb7185",
        },
        hud: {
          cyan: "#22d3ee",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex)", "monospace"],
      },
      maxWidth: {
        shell: "72rem",
      },
      boxShadow: {
        hud: "0 0 0 1px rgba(167,139,250,0.15), 0 8px 32px rgba(0,0,0,0.5)",
        dock: "0 -4px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
