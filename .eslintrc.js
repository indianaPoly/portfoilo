module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['import', 'unused-imports', 'filename-export', 'require-export'],
  rules: {
    'no-console': 'warn',
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'next'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-duplicates': 'warn',
    'import/no-unresolved': 'error',
    'import/no-relative-packages': 'warn',
    'import/no-relative-parent-imports': [
      'warn',
      {
        ignore: ['^@/'],
      },
    ],
    'filename-export/match-named-export': 'off',
    'filename-export/match-default-export': 'off',
    'require-export/require-export': 'off',
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      excludedFiles: ['**/page.tsx', '**/layout.tsx'],
      rules: {
        'filename-export/match-named-export': [
          'error',
          {
            casing: 'loose',
          },
        ],
        'filename-export/match-default-export': [
          'error',
          {
            casing: 'loose',
          },
        ],
        'require-export/require-export': 'error',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
};
