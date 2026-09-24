import type { Config } from "tailwindcss";

const color = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: color("background"),
        surface: color("surface"),
        "surface-hover": color("surface-hover"),
        border: color("border"),
        "text-primary": color("text-primary"),
        "text-secondary": color("text-secondary"),
        accent: color("accent"),
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
