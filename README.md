# eslint-config-lofty87

It can be applied to projects using typescript, eslint and prettier in vscode. (also, react projects)

This eslint config is based on [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript).

After pressing `F11`, you can be formatting it through save.

## 1. Prerequisite

- typescript(>=3.6, tsconfig.json)
- eslint(>=7.3)
- vscode plugin(ESLint, Prettier - Code formatter)

## 2. Dependencies

**1. base**

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint-config-airbnb-typescript
- eslint-config-prettier
- eslint-plugin-import

**2. react (include base)**

- eslint-plugin-jsx-a11y
- eslint-plugin-react
- eslint-plugin-react-hooks

## 3. Installation

**Using npm :**

#### 1. base

```bash
npm install --save eslint-config-lofty87
```

#### 2. react

```bash
npm install --save eslint-config-lofty87 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react@^7.19.0 eslint-plugin-react-hooks@^2.5.0
```

## 4. Configuration

#### 1. prettier

create `.prettierrc` in project root and copy json below

```json
{
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "arrowParens": "always",
  "endOfLine": "lf",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "requirePragma": false,
  "insertPragma": false,
  "proseWrap": "preserve",
  "vueIndentScriptAndStyle": false
}
```

go to vscode user `settings.json` and include json below

```json
{
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[graphql]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

go to vscode *File-Preferences-Keyboard Shortcuts*,

change the **Format Document** value to `F11`.

now, you can be prettier formatting it through `F11`

#### 2. eslint

create `.eslintrc.json` in project root and copy json below

```json
{
  "extends": [
    "eslint-config-lofty87"
  ]
}
```

or

```json
{
  "extends": [
    "eslint-config-lofty87/react"
  ]
}
```

or you can omit the **eslint-config-** in front.

```json
{
  "extends": [
    "lofty87"
  ]
}
```

go to vscode user `settings.json` and include json below

```json
{
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

now, you can be eslint linting and can be formatting it by saving

## 5. Namespaces

- eslint-config-lofty87(=base)
- eslint-config-lofty87/base
- eslint-config-lofty87/react