import stylistic from '@stylistic/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { includeIgnoreFile } from '@eslint/compat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends('plugin:prettier/recommended'),
  ...compat.extends('plugin:@next/next/recommended'),
  includeIgnoreFile(gitignorePath),
  {
    plugins: {
      stylistic,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        project: 'tsconfig.json',
      },
    },

    rules: {
      'stylistic/indent': 'off',

      'stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },

          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        },
      ],

      'no-unused-expressions': 'error',
      'stylistic/semi': ['error', 'always'],
      curly: 'error',
      eqeqeq: ['error', 'always'],
      'no-redeclare': 'error',
      'no-throw-literal': 'error',
    },
    ignores: ['node_modules/*', '.next/*', '.yarn/*', '*.config.*'],
  },
];
