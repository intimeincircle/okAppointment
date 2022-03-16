module.exports = {
  root: true,
  ignorePatterns: ['node_modules/*', 'node_modules/**', '**/node_modules/**'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    "plugin:vitest-globals/recommended",
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  "env": {
    "vitest-globals/env": true
  },
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: ['simple-import-sort'],
  rules: {
    'react/jsx-key': 'off',
    // Enforces no extra curly braces around string props or children
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Load imports with side-effects first, because duh
          ['^\\u0000'],
          // node, react + remix imports at the top
          ['^node:\\w', '^react(-dom)?/?', '^@remix-run/\\w'],
          // Other npm imports
          ['^@?\\w'],
          // Relative imports
          ['^~', '^\\.'],
        ],
      },
    ],
    complexity: ['error', { max: 15 }],
    'max-lines': ['error', 500],
    'max-params': ['error', 5],
    'no-useless-constructor': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['draft'] },
    ],
    'prefer-const': ['error'],
    'react-hooks/rules-of-hooks': ['error'],
    'react-hooks/exhaustive-deps': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/display-name': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'react/no-find-dom-node': 0,
    'react/jsx-curly-brace-presence': 2,
    'react/prop-types': 0,
    '@typescript-eslint/adjacent-overload-signatures': 0,
    '@typescript-eslint/no-empty-function': 0,
    'prettier/prettier': 'error',
    '@typescript-eslint/no-non-null-assertion': 0,
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-associated-control': ['error', { depth: 2 }],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/html-has-lang': 'off',
    'react/no-array-index-key': 'off',
    '@typescript-eslint/explicit-module-boundary-types': ['error'],
    'no-multi-assign': 'off',
    'no-use-before-define': 'off',
  },
};
