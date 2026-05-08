import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0d1117",
        surface: "#161b22",
        border: "#30363d",
        muted: "#8b949e",
        accent: "#58a6ff",
        "accent-2": "#3fb950",
        stage: {
          1: "#58a6ff",
          2: "#3fb950",
          3: "#d2991d",
          4: "#bc8cff",
          5: "#f778ba",
          6: "#f0883e",
        },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "'Cascadia Code'", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
