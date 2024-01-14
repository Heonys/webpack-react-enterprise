module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "eslint-config-prettier",
    "plugin:jest/recommended",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended"],
      parser: "@typescript-eslint/parser",
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier", "jest"],
  rules: {
    "@typescript-eslint/no-explicit-any": ["off"],
    "prettier/prettier": "error",
    "@typescript-eslint/no-namespace": "off",
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
  },
};
