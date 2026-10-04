import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F5EF",
        teal: {
          DEFAULT: "#79C5C8",
          dark: "#5BADB0",
          light: "#A8DCE0",
        },
        coral: {
          DEFAULT: "#E8B0A8",
          dark: "#D4877D",
          light: "#F2CFC9",
        },
        sage: {
          DEFAULT: "#8EA89A",
          dark: "#6D8C7D",
          light: "#B5C9BF",
        },
        charcoal: "#222222",
        offwhite: "#FDFAF6",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
        accent: ["'Playfair Display'", "Georgia", "serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(34, 34, 34, 0.06)",
        card: "0 8px 40px rgba(34, 34, 34, 0.08)",
        hover: "0 16px 60px rgba(34, 34, 34, 0.12)",
      },
      backgroundImage: {
        "gradient-ivory": "linear-gradient(135deg, #F8F5EF 0%, #FDFAF6 100%)",
        "gradient-teal": "linear-gradient(135deg, #79C5C8 0%, #A8DCE0 100%)",
        "gradient-coral": "linear-gradient(135deg, #E8B0A8 0%, #F2CFC9 100%)",
        "gradient-hero": "linear-gradient(160deg, #F8F5EF 0%, #EDF5F5 50%, #F5EEF0 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
