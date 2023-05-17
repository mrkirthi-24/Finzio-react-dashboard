module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "react-app", //this will give basic default eslinting behavior for react app
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh"],
  overrides: [
    {
      // Apply rule override only to files with the following extensions
      files: ["*.tsx", "*.jsx"],
      rules: {
        "@typescript-eslint/ban-types": [
          "error",
          {
            extendDefaults: true,
            types: {
              "{}": false,
            },
          },
        ],
        "react-refresh/only-export-components": "warn",
      },
    },
  ],
};
