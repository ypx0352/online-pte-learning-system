module.exports = {
  root: true,
  plugins: ["@typescript-eslint", "import", "react-hooks"],
  env: {
    es6: true,
    node: true,
    // avoid errors like it/describe in test
    jest: true,
    // avoid errors like window/document
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  rules: {
    //
    "prettier/prettier": "warn",
    "prefer-const": "warn",
    "prefer-arrow-callback": "warn",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "no-undef": "error",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { vars: "all", args: "none", ignoreRestSiblings: true },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
        },
      },
    ],
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal"],
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: false,
    },
    project: ["./tsconfig.eslint.json"],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "import/no-unresolved": "off",
        "import/named": "off",
        "import/defaut": "off",
        "import/namespace": "off",
        "react/self-closing-comp": [
          "error",
          {
            component: true,
          },
        ],
      },
      parser: "@typescript-eslint/parser",
    },
  ],
};
