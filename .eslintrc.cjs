module.exports = {
  env: { browser: true, es2020: true, node: true, "jest/globals": true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style"
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "jest"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/prop-types": 0,
    // "jest/no-disabled-tests": "warn",
    // "jest/no-focused-tests": "error",
    // "jest/no-identical-title": "error",
    // "jest/prefer-to-have-length": "warn",
    // "jest/valid-expect": "error",
  },
};
