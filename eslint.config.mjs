import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['*.ts', '*.mjs'],
    ignores: ['**/node_modules/', 'dist/'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-async-promise-executor': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'no-control-regex': 'off',
      'no-empty': 'off',
    },
  },
];
