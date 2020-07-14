module.exports = {
  "rules": {
    "jsx-quotes": ["error", "prefer-double"],
    "no-alert": "off",
    "react/button-has-type": "error",
    "react/default-props-match-prop-types": "error",
    "react/destructuring-assignment": "error",
    "react/function-component-definition": [2, {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }],
    "react/jsx-boolean-value": [2, "never"],
    "react/jsx-closing-bracket-location": [2, "line-aligned"],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-brace-presence": [2, {
      "props": "never",
      "children": "never"
    }],
    "react/jsx-curly-newline": [2, {
      "singleline": "consistent",
      "multiline": "consistent"
    }],
    "react/jsx-curly-spacing": [2, {
      "when": "never",
      "children": true
    }],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-first-prop-new-line": [2, "multiline-multiprop"],
    "react/jsx-fragments": "error",
    "react/jsx-handler-names": [2, {
      "eventHandlerPrefix": "handle",
      "eventHandlerPropPrefix": "on",
      "checkLocalVariables": false
    }],
    "react/jsx-indent-props": [2, "first"],
    "react/jsx-indent": [2, 2, {
      "checkAttributes": false,
      "indentLogicalExpressions": true
    }],
    "react/jsx-key": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-one-expression-per-line": ["error", {
      "allow": "literal"
    }],
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-default-props": "error",
    "react/jsx-sort-props": ["error", {
      "ignoreCase": true,
      "callbacksLast": true,
      "shorthandLast": true,
      "reservedFirst": true
    }],
    "react/jsx-tag-spacing": [2, {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "never"
    }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "off",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "off",
    "react/no-danger": "off",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-multi-comp": "off",
    "react/no-redundant-should-component-update": "error",
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": "error",
    "react/react-in-jsx-scope": "error",
    "react/require-render-return": "error",
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": false
    }],
    "react/sort-prop-types": [2, {
      "ignoreCase": true,
      "callbacksLast": true
    }],
    "react/state-in-constructor": [2, "never"],
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error"
  }
};