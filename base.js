module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2020": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "airbnb-typescript/base",
    "prettier",
    "prettier/@typescript-eslint",
    "./rules/base.js"
  ],
  "rules": {}
};