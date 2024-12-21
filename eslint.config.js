import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsconfigParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config} */
export default {
    overrides: [
        {
            files: ['**/*.{js,mjs,cjs,ts,tsx}'],
            languageOptions: {
                globals: globals.browser,
                parser: tsconfigParser,
                parserOptions: {
                    ecmaVersion: 2020,
                    sourceType: 'module',
                    ecmaFeatures: { jsx: true },
                    project: './tsconfig.json',
                },
            },
            plugins: ['@typescript-eslint', 'react'],
            rules: {
                ...pluginJs.configs.recommended.rules,
                ...tseslint.configs.recommended.rules,
                ...pluginReact.configs.recommended.rules,
                'react/react-in-jsx-scope': 'off',
                'no-console': 'warn',
            },
        },
    ],
};
