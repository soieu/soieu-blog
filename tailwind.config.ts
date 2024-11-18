import { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

/** @type {Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,md}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xl: "1400px",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
