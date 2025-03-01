/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mirage: {
          50: '#f6f6f9',
          100: '#ececf2',
          200: '#d4d5e3',
          300: '#afb1ca',
          400: '#8387ad',
          500: '#646993',
          600: '#4f517a',
          700: '#414363',
          800: '#383954',
          900: '#323348',
          950: '#1a1a25',
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
