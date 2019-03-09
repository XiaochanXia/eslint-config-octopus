module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
    worker: true,
  },
  globals: {
    window: true,
    document: true,
  },
  rules: {
    strict: 'error',
    semi: ['error', 'always'],
    'semi-style': ['error', 'last'],
    'no-unused-vars': 'error',
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'no-console': 0,
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    'prefer-destructuring': 0,
  },
};
