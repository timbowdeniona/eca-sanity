// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierConfig = require("./.prettierrc.js");

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:storybook/recommended",
    "plugin:tailwindcss/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "storybook"],
  rules: {
    // Possible errors
    "no-console": "warn",
    // Best practices
    "dot-notation": "error",
    "no-else-return": "error",
    "no-floating-decimal": "error",
    "no-sequences": "error",
    // Stylistic
    "array-bracket-spacing": "error",
    "computed-property-spacing": ["error", "never"],
    curly: "error",
    "no-lonely-if": "error",
    "no-unneeded-ternary": "error",
    "one-var-declaration-per-line": "error",
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: false,
        avoidEscape: true,
      },
    ],
    // ES6
    "array-callback-return": "off",
    "prefer-const": "error",
    // Imports
    "import/prefer-default-export": "off",
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    "no-unused-expressions": "off",
    "no-prototype-builtins": "off",
    // REACT
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/href-no-hash": [0],
    "react/display-name": 0,
    "react/no-deprecated": "error",
    "react/no-unsafe": [
      "error",
      {
        checkAliases: true,
      },
    ],
    "react/jsx-sort-props": [
      "error",
      {
        ignoreCase: true,
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": 0,
    // Prettier
    // eslint looks for the prettier config at the top level of the package/app
    // but the config lives in the `config/` directory. Passing the config here
    // to get around this.
    "prettier/prettier": ["error", prettierConfig],
    // Allows the use of the `inert` attribute until we update to react 19 https://github.com/facebook/react/pull/24730.
    "react/no-unknown-property": ["error", { ignore: ["inert"] }],
    // Ignore args/vars that start with `_`
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    tailwindcss: {
      // Manually added all custom classnames from `global.scss`
      // due to lack of support for SASS https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/206
      whitelist: [
        "bg-grey",
        "bg-purple",
        "fill-neutral",
        "fill-purple",
        "lead",
        "no-scrollbar",
        "page-header",
        "page-nested",
        "richtext",
        "scrollbar-purple-40",
        "text-neutral",
        "text-purple",
        "text-purple-40",
        "wrapper",
        "ot-sdk-show-settings",
        "optanon-category-",
        "simple-alert-danger",
        "simple-alert-success",
        "h1",
        "h2",
        "h3",
        "h4",
      ],
    },
  },
};
