import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],

  theme: {
    fontFamily: {
      primary: ["var(--font-primary)", "sans-serif"],
    },

    screens: {
      sm: "320px",
      md: "641px",
      lg: "1025px",
      xl: "1441px",
    },

    extend: {
      colors: {
        "dark-red": "#961439",
        green: "#1FAFA3",
        grey: "#F4F4F4",
        muted: "#6A6573",
        neutral: "#2b2438",
        purple: "var(--aqa-purple-primary)",
        blue: "#0989BF",
        "purple-20": "var(--aqa-purple-secondary)",
        "purple-40": "var(--aqa-purple-tertiary)",
        "purple-80": "#DCD8E5",
        red: "#C8194B",
        "red-60": "#DE7493",
        "sanity-purple": "var(--card-focus-ring-color)",
        transparent: "transparent",
        white: "#FFFFFF",
        "interface-blue": "#1847BF",
      },
      // Default configurations:
      // https://github.com/tailwindlabs/tailwindcss-container-queries?tab=readme-ov-file#configuration
      containers: {
        // AQA-specific container breakpoints
        csm: "320px", // Small container
        cmd: "640px", // Medium container
        clg: "1024px", // Large container
        cxl: "1440px", // Extra large container
      },
    },

    // zIndex: {
    //   dropdown: "50",
    //   sticky: "60",
    //   fixed: "70",
    //   "modal-backdrop": "80",
    //   modal: "90",
    //   popover: "100",
    //   tooltip: "110",
    // }
  },

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/container-queries")],
};

export default config;
