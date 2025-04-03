import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        text: "hsl(var(--text))",
        background: "hsl(var(--background))",
        subsection: "hsl(var(--subsection))",
        ctaBg: "hsl(var(--cta-bg))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
