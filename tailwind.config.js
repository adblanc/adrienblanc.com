module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.mdx",
    "./projects/**/*.mdx",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderColor: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
