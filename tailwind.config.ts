import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Path to Tremor module
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      colors: {
        asomamecoPrimary: {
          DEFAULT: "#eaa159",
          50: "#fcf4eb",
          100: "#f9e3cd",
          200: "#f5d0ac",
          300: "#f0bd8b",
          400: "#edaf72",
          500: "#eaa159",
          600: "#e79951",
          700: "#e48f48",
          800: "#e1853e",
          900: "#db742e",
          A100: "#ffffff",
          A200: "#fff2ea",
          A400: "#ffd2b7",
          A700: "#ffc39d",
        },
        asomamecoDarkBlue: {
          DEFAULT: "#07305d",
          50: "#e1e6ec",
          100: "#b5c1ce",
          200: "#8398ae",
          300: "#516e8e",
          400: "#2c4f75",
          500: "#07305d",
          600: "#062b55",
          700: "#05244b",
          800: "#041e41",
          900: "#021330",
          A100: "#6992ff",
          A200: "#366cff",
          A400: "#0347ff",
          A700: "#003fe8",
        },
        asomamecoLightOrange: {
          DEFAULT: "#f0bb86",
          50: "#fdf7f0",
          100: "#fbebdb",
          200: "#f8ddc3",
          300: "#f5cfaa",
          400: "#f2c598",
          500: "#f0bb86",
          600: "#eeb57e",
          700: "#ecac73",
          800: "#e9a469",
          900: "#e59656",
          A100: "#ffffff",
          A200: "#ffffff",
          A400: "#ffeee1",
          A700: "#ffe0c8",
        },
        asomamecoDarkOrange: {
          DEFAULT: "#e4872c",
          50: "#fcf1e6",
          100: "#f7dbc0",
          200: "#f2c396",
          300: "#ecab6b",
          400: "#e8994c",
          500: "#e4872c",
          600: "#e17f27",
          700: "#dd7421",
          800: "#d96a1b",
          900: "#d15710",
          A100: "#ffffff",
          A200: "#ffddcc",
          A400: "#ffba99",
          A700: "#ffa980",
        },
        AsomamecoBlue: {
          DEFAULT: "#0b488c",
          50: "#e2e9f1",
          100: "#b6c8dd",
          200: "#85a4c6",
          300: "#547faf",
          400: "#30639d",
          500: "#0b488c",
          600: "#0a4184",
          700: "#083879",
          800: "#06306f",
          900: "#03215c",
          A100: "#8dabff",
          A200: "#5a85ff",
          A400: "#2760ff",
          A700: "#0e4dff",
        },
        // light mode
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
      },
      boxShadow: {
        // light
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // dark
        "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "dark-tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "dark-tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
      },
      fontSize: {
        "tremor-label": ["0.75rem", { lineHeight: "1rem" }],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [require("@headlessui/tailwindcss"), require("@tailwindcss/forms")],
};

export default config;
