import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'darker-grotesque-regular': ['Darker Grotesque', 'sans-serif'],
        'darker-grotesque-bold': ['Darker Grotesque', 'sans-serif'],
        'darker-grotesque-light': ['Darker Grotesque', 'sans-serif'],
        'darker-grotesque-medium': ['Darker Grotesque', 'sans-serif'],
        'darker-grotesque-semibold': ['Darker Grotesque', 'sans-serif'],
        'darker-grotesque-extrabold': ['Darker Grotesque', 'sans-serif'],
        'darker-grotesque-black': ['Darker Grotesque', 'sans-serif'],
    },
    fontWeight: {
        'darker-grotesque-regular': '400',
        'darker-grotesque-bold': '700',
        'darker-grotesque-light': '300',
        'darker-grotesque-medium': '500',
        'darker-grotesque-semibold': '600',
        'darker-grotesque-extrabold': '800',
        'darker-grotesque-black': '900',
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
