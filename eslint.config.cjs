module.exports = {
  env: {
    browser: true,
    es2019: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // import React를 강제하는 룰을 비활성화합니다.
    'plugin:react-hooks/recommended',
    'plugin:sort-export-all/recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:prettier/recommended', // prettier는 extends 끝에 와야 합니다.
  ],
  ignorePatterns: ['eslint.config.js'],
  globals: {
    JSX: 'readonly',
    React: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'react',
    'sort-destructure-keys',
    'typescript-sort-keys',
  ],
  root: true,
  settings: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
    react: {
      version: 'detect',
    },
  },
};
