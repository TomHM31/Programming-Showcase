import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        text: "#030305",
        background: "#f3f3f4",
        primary: "#181823",
        secondary: "#537fe7",
        accent: "#c0eef2",
      },
    },
  },
  plugins: [],
} satisfies Config;
