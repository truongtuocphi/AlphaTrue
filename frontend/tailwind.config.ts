import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor: {
        card: "#f4f3f1",
        secondBody: "#292929",
        body: "#FAFAFA",
      },
      boxShadow: {
        "custom-lg": "0px 15px 30px 0px rgba(0, 15, 10, 0.05)",
        "custom-sm": "0px 5px 10px 0px rgba(0, 15, 10, 0.05)",
        "custom-inset": "0px 0px 100px 0px rgba(0, 185, 252, 0.2) inset",
        "custom-inset-portfolio":
          "0px 0px 100px 0px rgba(0, 185, 252, 0.2) inset",
      },
      backgroundImage: {
        bgCoverFlow:
          "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.198545) 12.06%, rgba(0, 0, 0, 0.267009) 16.25%, rgba(0, 0, 0, 0.364) 27.26%, rgba(0, 0, 0, 0.547062) 79.67%, rgba(0, 0, 0, 0.7) 104.83%)",
        bgTimeLine:
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 60%, #FFFFFF 100%);",
      },
      colors: {
        primary: {
          5: "rgb(0,17,50)",
          10: "rgb(0,29,88)",
          20: "rgb(0,42,126)",
          30: "rgb(0,55,163)",
          40: "rgb(0,67,201)",
          50: "rgb(0,84,251)",
          60: "rgb(51,118,252)",
          70: "rgb(102,152,253)",
          80: "rgb(153,187,253)",
          90: "rgb(204,221,254)",
          95: "rgb(242,246,255)",
        },
        second: {
          5: "rgb(0,37,50)",
          10: "rgb(0,65,88)",
          20: "rgb(0,93,126)",
          30: "rgb(0,120,164)",
          40: "rgb(0,148,202)",
          50: "rgb(0,185,252)",
          60: "rgb(51,199,253)",
          70: "rgb(102,213,253)",
          80: "rgb(153,227,254)",
          90: "rgb(204,241,254)",
          95: "rgb(242,251,255)",
        },
        third: {
          5: "rgb(0,49,41)",
          10: "rgb(0,85,72)",
          20: "rgb(0,122,104)",
          30: "rgb(0,158,135)",
          40: "rgb(0,194,166)",
          50: "rgb(0,243,207)",
          60: "rgb(51,245,217)",
          70: "rgb(102,248,226)",
          80: "rgb(153,250,236)",
          90: "rgb(204,253,245)",
          95: "rgb(242,254,253)",
        },
        black: {
          5: "rgb(10,10,10)",
          10: "rgb(17,18,18)",
          20: "rgb(24,26,25)",
          30: "rgb(31,34,33)",
          40: "rgb(38,42,41)",
          50: "rgb(48,52,51)",
          60: "rgb(89,93,92)",
          70: "rgb(131,133,133)",
          80: "rgb(172,174,173)",
          90: "rgb(214,214,214)",
          95: "rgb(245,245,245)",
          100: "rgb(255,255,255)",
        },
        backgroundHeader: "rgba(69, 69, 69, 0.5)",
        backgroundGrayHeader: "rgba(190, 190, 190, 0.2)",
        backgroundHeaderMobile: "rgba(69, 69, 69, 0.5)",
        backgroundContact: "rgb(230,241,245)",
        border: "#303433",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-animated")],
} satisfies Config;

export default config;
