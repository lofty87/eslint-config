# @lofty87/eslint-config

vscode 에서 typescript, eslint, prettier 가 사용되는 프로젝트를 위해 작성한 eslint rules config (react rules config 포함) 입니다. 이 eslint rules config 는 [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript) 를 기반으로 작성되었으며, 아래 과정을 다 진행할 경우 `F11` 을 통해 **prettier formatting** 과 `save` 를 통해 **eslint auto fix formatting** 을 적용할 수 있습니다. 이 formatting 을 활용하여 나 또는 팀의 code convention 을 정의하고 모두가 일관성있는 코드를 작성할 수 있습니다.

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

**2. react (base 포함)**

- eslint-plugin-jsx-a11y
- eslint-plugin-react
- eslint-plugin-react-hooks

## 3. Installation

Using npm :

**1. base**

```bash
npm install --save @lofty87/eslint-config
```

**2. react**

```bash
npm install --save @lofty87/eslint-config eslint-plugin-jsx-a11y@6.4.1 eslint-plugin-react@7.21.5 eslint-plugin-react-hooks@2.5.1
```

## 4. Configuration

**1. prettier formatting**

프로젝트 root 에 `.prettierrc` 파일을 생성하고 아래 내용을 추가합니다.

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

vscode 의 user `settings.json` 을 열어 아래 내용을 추가합니다.

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

vscode 의 *File-Preferences-Keyboard Shortcuts* 로 가서 **Format Document** 값을 `F11` 로 변경합니다.

자, 이제 `F11` 을 통해 **prettier formatting** 을 할 수 있습니다.

**2. eslint formatting**

프로젝트 root 에 `.eslintrc.json` 파일을 생성하고 아래 내용을 추가합니다.

```json
{
  "extends": [
    "@lofty87/eslint-config"
  ]
}
```

또는 react 프로젝트 일 경우,

```json
{
  "extends": [
    "@lofty87/eslint-config/react"
  ]
}
```

vscode 의 user `settings.json` 을 열어 아래 내용을 추가합니다.

```json
{
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

자, 이제 `save` 를 통해 **eslint auto fix formatting** 을 할 수 있습니다.

## 5. Namespaces

- @lofty87/eslint-config(=base)
- @lofty87/eslint-config/base
- @lofty87/eslint-config/react