module.exports = {
  "rules": {
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error", "always", {
      "objectsInArrays": false,
      "arraysInArrays": false
    }],
    "array-callback-return": ["error", {
      "allowImplicit": true
    }],
    "array-element-newline": ["error", "consistent"],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": "error",
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": ["error", "1tbs"],
    "camelcase": ["error", {
      "ignoreDestructuring": true
    }],
    "comma-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never", {
      "enforceForClassMembers": true
    }],
    "consistent-return": ["error", {
      "treatUndefinedAsUnspecified": true
    }],
    "constructor-super": "error",
    "curly": "error",
    "dot-location": ["error", "property"],
    "eqeqeq": ["error", "always"],
    "eol-last": ["error", "always"],
    "for-direction": "error",
    "func-call-spacing": ["error", "never"],
    "func-style": ["error", "declaration", {
      "allowArrowFunctions": true
    }],
    "function-call-argument-newline": ["error", "consistent"],
    "generator-star-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "getter-return": ["error", {
      "allowImplicit": true
    }],
    "key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true,
      "mode": "strict"
    }],
    "keyword-spacing": ["error", {
      "before": true,
      "after": true,
      "overrides": {
        "break": { "after": false },
        "catch": { "after": false },
        "continue": { "after": false },
        "for": { "after": false },
        "if": { "after": false },
        "super": { "after": false },
        "switch": { "after": false },
        "this": { "after": false },
        "while": { "after": false }
      }
    }],
    "linebreak-style": ["error", "unix"],
    "max-classes-per-file": "off",
    "max-nested-callbacks": ["error", 5],
    "multiline-ternary": ["error", "always-multiline"],
    "new-cap": ["error", {
      "newIsCap": true,
      "capIsNew": false,
      "properties": false
    }],
    "new-parens": "error",
    "newline-per-chained-call": ["error", {
      "ignoreChainWithDepth": 5
    }],
    "no-class-assign": "error",
    "no-cond-assign": ["error", "always"],
    "no-confusing-arrow": "error",
    "no-const-assign": "error",
    "no-constant-condition": ["error", {
      "checkLoops": false
    }],
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-label": "error",
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": ["error", "both"],
    "no-invalid-regexp": ["error", {
      "allowConstructorFlags": ["u", "y"]
    }],
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-new-func": "error",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-redeclare": "error",
    "no-return-assign": ["error", "always"],
    "no-return-await": "off",
    "no-self-assign": ["error", {
      "props": false
    }],
    "no-self-compare": "error",
    "no-shadow-restricted-names": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-trailing-spaces": ["error", {
      "ignoreComments": true
    }],
    "no-underscore-dangle": "off",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": ["error", {
      "defaultAssignment": false
    }],
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-use-before-define": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "off",
    "no-useless-rename": "error",
    "no-var": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "nonblock-statement-body-position": ["error", "below"],
    "object-curly-newline": ["error", {
      "consistent": true
    }],
    "object-curly-spacing": ["error", "always", {
      "arraysInObjects": true,
      "objectsInObjects": true
    }],
    "object-property-newline": ["error", {
      "allowAllPropertiesOnSameLine": false
    }],
    "object-shorthand": [2, "properties"],
    "operator-linebreak": ["error", "after"],
    "padded-blocks": ["error", "never"],
    "padding-line-between-statements": ["error",
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      },
      {
        "blankLine": "always",
        "prev": ["const", "let", "var"],
        "next": "*"
      },
      {
        "blankLine": "any",
        "prev": ["const", "let", "var"],
        "next": ["const", "let", "var"]
      },
      {
        "blankLine": "always",
        "prev": "directive",
        "next": "*"
      },
      {
        "blankLine": "any",
        "prev": "directive",
        "next": "directive"
      }
    ],
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "as-needed"],
    "quotes": ["error", "single", {
      "allowTemplateLiterals": true
    }],
    "rest-spread-spacing": ["error", "never"],
    "require-await": "error",
    "semi": ["error", "always"],
    "semi-spacing": ["error", { "before": false, "after": true }],
    "semi-style": ["error", "last"],
    "sort-imports": ["error", {
      "ignoreCase": true,
      "ignoreDeclarationSort": true
    }],
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always", {
      "exceptions": ["/", "!", "-", "*", "<"],
      "markers": ["global", "/", "!", "-", "*", "<", "!<"]
    }],
    "switch-colon-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "template-curly-spacing": "error",
    "template-tag-spacing": "error",
    "vars-on-top": "error",
    "yield-star-spacing": ["error", "after"],
    "import/default": "error",
    "import/export": "error",
    "import/extensions": "off",
    "import/first": "error",
    "import/named": "error",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-cycle": "off",
    "import/no-duplicates": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-useless-path-segments": "error",
    "import/order": ["error", {
      "newlines-between": "always"
    }],
    "import/prefer-default-export": "off",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/explicit-member-accessibility": ["error", {
      "accessibility": "explicit",
      "overrides": {
        "accessors": "off",
        "constructors": "no-public",
        "parameterProperties": "off"
      }
    }],
    "@typescript-eslint/lines-between-class-members": ["error", {
      "exceptAfterOverload": true
    }],
    "@typescript-eslint/member-ordering": ["error", {
      "default": ["field", "constructor", "method"]
    }],
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-misused-promises": ["error", {
      "checksConditionals": true,
      "checksVoidReturn": false
    }],
    "@typescript-eslint/no-unnecessary-condition": ["error", {
      "allowConstantLoopConditions": true
    }],
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/type-annotation-spacing": ["error", {
      "before": false,
      "after": true,
      "overrides": {
        "arrow": {
          "before": true,
          "after": true
        }
      }
    }],
    "@typescript-eslint/unified-signatures": "error"
  }
};