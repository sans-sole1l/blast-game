module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier", // should always be the last one
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "simple-import-sort", "prettier"],
  rules: {
    "no-prototype-builtins": "warn",
    "no-redeclare": "warn",
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-console": "warn",

    quotes: ["error", "double", { avoidEscape: true }],
    "prettier/prettier": ["error", { printWidth: 80 }],
    "prefer-destructuring": [
      "error",
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [["^\\u0000"], ["^[^.]"], ["^src"], ["^\\."]],
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "multiline-block-like", next: "*" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        prev: "*",
        next: [
          "return",
          "throw",
          "try",
          "while",
          "do",
          "if",
          "switch",
          "function",
          "for",
          "multiline-const",
        ],
      },
      { blankLine: "always", prev: "multiline-const", next: "*" },
    ],
  },
};
