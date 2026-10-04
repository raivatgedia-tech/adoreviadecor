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
        ivory: "#FFF4EC",
        peach: {
          DEFAULT: "#FFF3EA",
          dark: "#FCE4D5",
        },
        teal: {
          DEFAULT: "#4E9E93",
          dark: "#2F7268",
          light: "#A9D6D3",
        },
        coral: {
          DEFAULT: "#E8887E",
          dark: "#D2685C",
          light: "#F6C7BE",
        },
        gold: {
          DEFAULT: "#ECC85C",
          dark: "#D4A93E",
          light: "#F5E0A0",
        },
        deepgreen: {
          DEFAULT: "#1D4C3A",
          dark: "#123527",
          light: "#2E6650",
        },
        maroon: "#8B3A3A",
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
        "gradient-ivory": "linear-gradient(135deg, #FFF4EC 0%, #FFFDF7 100%)",
        "gradient-teal": "linear-gradient(135deg, #4E9E93 0%, #A9D6D3 100%)",
        "gradient-coral": "linear-gradient(135deg, #EC8F80 0%, #D2685C 100%)",
        "gradient-hero": "linear-gradient(160deg, #FFF4EC 0%, #FCEEE3 55%, #FDF0E8 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "marquee": "marquee 28s linear infinite",
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
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
