import globals from 'globals';
import pluginCypress from 'eslint-plugin-cypress/flat';
import js from '@eslint/js';

export default [
  // Configuração base recomendada pelo ESLint
  js.configs.recommended,

  // Configuração base recomendada pelo plugin do Cypress
  pluginCypress.configs.recommended,

  // Sua configuração customizada
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // As mesmas regras que definimos antes
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn',
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
    },
  },
];
