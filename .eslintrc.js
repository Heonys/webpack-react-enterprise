module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "eslint-config-prettier"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended"],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  ],
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
