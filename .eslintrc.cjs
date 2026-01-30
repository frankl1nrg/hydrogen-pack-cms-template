/**
 * @type {import("@types/eslint").Linter.BaseConfig}
 */
module.exports = {
  extends: [
    '@remix-run/eslint-config',
    'plugin:hydrogen/recommended',
    'plugin:hydrogen/typescript',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
  plugins: ['react-refresh'],
  rules: {
    'no-console': 'off',
    'no-inline-styles': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'hydrogen/prefer-image-component': 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    'no-case-declarations': 'off',
    'jest/no-deprecated-functions': 'off',
    'react-refresh/only-export-components': [
      'error',
      {
        allowExportNames: [
          'meta',
          'links',
          'headers',
          'loader',
          'action',
          'shouldRevalidate',
        ],
      },
    ],
    /**
     * Tailwind ESLint rules disabled due to lack of Tailwind v4 support in
     * eslint-plugin-tailwindcss. The plugin cannot:
     * 1. Parse our CSS-based config in app.css (no tailwind.config.js)
     * 2. Recognize custom class definitions
     * 3. Detect custom breakpoints (e.g., 'xs')
     *
     * This isn't a major issue since the Tailwind LSP server provides proper
     * autocomplete and validation in the editor.
     *
     * When eslint-plugin-tailwindcss adds Tailwind v4 support, re-enable with:
     * 'tailwindcss/classnames-order': 'warn',
     * 'tailwindcss/no-custom-classname': [
     *   'warn',
     *   {whitelist: ['theme-\\S+', 'swiper-\\S+']},
     * ],
     */
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'import/order': [
      'error',
      {
        /**
         * @description
         *
         * This keeps imports separate from one another, ensuring that imports are separated
         * by their relative groups. As you move through the groups, imports become closer
         * to the current file.
         *
         * @example
         * ```
         * import fs from 'fs';
         *
         * import package from 'npm-package';
         *
         * import xyz from '~/project-file';
         *
         * import index from '../';
         *
         * import sibling from './foo';
         * ```
         */
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
      },
    ],
  },
  globals: {
    document: true,
    window: true,
  },
};
