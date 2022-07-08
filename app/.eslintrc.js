module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    it: 'readonly',
    describe: 'readonly',
    expect: 'readonly',
    beforeAll: 'readonly',
    afterAll: 'readonly',
    page: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      modules: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.13.1',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: [
    'react',
  ],
  rules: {
    'object-curly-newline': 0,
    camelcase: 0,
    'react/prop-types': 'off',
    'newline-before-return': 'error',
    'object-curly-spacing': 'error',
    'no-multiple-empty-lines': 'error',
    'function-call-argument-newline': 'error',
    'newline-per-chained-call': 'error',
    'max-len': ['error', { comments: 70, code: 70 }],
    'newline-after-var': ['error', 'always'],
    indent: ['error', 2],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['*'],
        next: ['block-like'],
      },
      {
        blankLine: 'always',
        prev: ['block-like'],
        next: ['*'],
      },
    ],
    'comma-dangle': 'off',
    semi: 'error',
    'arrow-parens': 'off',
    'function-paren-newline': 'off'
  },
};
