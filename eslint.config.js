import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier/recommended';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
  {
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
  },
  // ts
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
  },
  eslintPluginUnicorn.configs.recommended,
  {
    rules: {
      'unicorn/filename-case': [
        'warn',
        { cases: { kebabCase: true, pascalCase: true } },
      ],
    },
  },
  // vue
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    rules: {
      'vue/no-unused-vars': 'error',
      'vue/no-v-html': 'off',
    },
  },
  // prettier
  prettier,
  {
    rules: {
      'prettier/prettier': ['warn', { singleQuote: true }],
      'no-console': 'warn',
    },
  },
];
