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
        ivory: "#FAF6ED",
        teal: {
          DEFAULT: "#3E8F8F",
          dark: "#296666",
          light: "#A9D6D3",
        },
        coral: {
          DEFAULT: "#D97D62",
          dark: "#B85E45",
          light: "#F0C3AE",
        },
        sage: {
          DEFAULT: "#A88F63",
          dark: "#846D48",
          light: "#D9C7A0",
        },
        charcoal: "#26211C",
        offwhite: "#FFFDF7",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
        accent: ["'Playfair Display'", "Georgia", "serif"],
        signature: ["'Caveat'", "cursive"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        craft: "28px 28px 28px 6px",
        "craft-r": "28px 28px 6px 28px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(38, 33, 28, 0.07)",
        card: "0 10px 40px rgba(38, 33, 28, 0.09)",
        hover: "0 18px 60px rgba(38, 33, 28, 0.14)",
      },
      backgroundImage: {
        "gradient-ivory": "linear-gradient(135deg, #FAF6ED 0%, #FFFDF7 100%)",
        "gradient-teal": "linear-gradient(135deg, #3E8F8F 0%, #A9D6D3 100%)",
        "gradient-coral": "linear-gradient(135deg, #D97D62 0%, #F0C3AE 100%)",
        "gradient-hero": "linear-gradient(160deg, #FAF6ED 0%, #F1F2EA 55%, #F7EEE7 100%)",
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
