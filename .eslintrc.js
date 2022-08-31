module.export = {
    root: true,
    env: {
      browser: true,
      amd: true,
      node: true,
      es6: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended',
      'next',
      'next/core-web-vittals',
    ],
    rules: {
      'semi': ['error','always'],
    },
    settings: {
      'import/resolver': {
        foo: { someConfig: value }
      }
    }
  }