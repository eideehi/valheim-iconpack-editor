module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"],
  },
  extends: [
    "eslint:recommended",
    "plugin:svelte/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "plugin:svelte/prettier",
  ],
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["**/*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      }
    }
  ],
  rules: {
    "no-undef": "off",
    "svelte/no-at-html-tags": "warn",
    "svelte/valid-compile": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
