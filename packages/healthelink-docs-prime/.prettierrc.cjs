module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  astroAllowShorthand: false,
  semi: true,
  useTabs: false,
  trailingComma: "all",
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
};
