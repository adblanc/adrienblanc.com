module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.mdx",
    "./projects/**/*.mdx",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            h1: {
              color: theme("colors.grey.100"),
            },
            h2: {
              color: theme("colors.grey.100"),
            },
            h3: {
              color: theme("colors.grey.100"),
            },
            h4: {
              color: theme("colors.grey.100"),
            },
            p: {
              color: theme("colors.grey.100"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      borderColor: ["dark"],
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
