module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "nextjs"
  ],
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "cypress"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "no-param-reassign": "off",
    "no-console": "off",
    "no-new-wrappers": "off",
    "no-shadow": "off",
    "eqeqeq": "off"
  },
  "globals": {
    "React": "writable"
  },
  "env": {
    "cypress/globals": true
  },
};