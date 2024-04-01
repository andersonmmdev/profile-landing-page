module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    "dist",
    "scripts/*",
    // ".eslintrc.cjs",
    "prettierrc.js",
    "vite.config.ts",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    "no-console": "error",
    "import/no-unresolved": "off",
    "react-refresh/only-export-components": "warn",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase"],
      },
      {
        selector: "variable",
        modifiers: ["const"],
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: [
          "is",
          "has",
          "can",
          "did",
          "open",
          "show",
          "will",
          "when",
          "need",
          "should",
          "disabled",
        ],
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "parameter",
        format: ["camelCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "enumMember",
        format: ["UPPER_CASE"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
}
