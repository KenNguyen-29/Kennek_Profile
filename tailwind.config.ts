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
          DEFAULT: "#050a08",
          deep: "#020604",
          panel: "#0a120e",
          border: "#1a2e22",
        },
        emerald: {
          glow: "#6ee7b7",
          DEFAULT: "#10b981",
          dim: "#059669",
        },
        mint: {
          DEFAULT: "#34d399",
          soft: "#a7f3d0",
        },
        forest: {
          DEFAULT: "#14532d",
          light: "#166534",
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
        hud: "0 0 0 1px rgba(16,185,129,0.12), 0 8px 32px rgba(0,0,0,0.45)",
        dock: "0 -4px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(110,231,183,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
