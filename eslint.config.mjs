import { createRequire } from 'node:module';

import tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import importPlugin from 'eslint-plugin-import';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';

const require = createRequire(import.meta.url);
const requireExport = require('./eslint-plugin-require-export');

function getExportName(node) {
  if (!node) return null;
  if ('name' in node && node.name) return node.name;
  if ('id' in node && node.id) return getExportName(node.id);
  if ('exported' in node && node.exported) return getExportName(node.exported);
  if ('value' in node && node.value) return String(node.value);

  return null;
}

function getNamedExportNames(exportNode) {
  if (exportNode.declaration) {
    if (
      'declarations' in exportNode.declaration &&
      exportNode.declaration.declarations
    ) {
      return exportNode.declaration.declarations
        .map(getExportName)
        .filter(Boolean);
    }

    return [getExportName(exportNode.declaration)].filter(Boolean);
  }

  return (exportNode.specifiers ?? []).map(getExportName).filter(Boolean);
}

function normalizeExportName(value, options = {}) {
  const stripped = options.stripextra
    ? value.replace(/[^a-zA-Z0-9]/g, '')
    : value;

  return options.casing === 'strict' ? stripped : stripped.toLowerCase();
}

function isSkippedFilename(filenameSansExt) {
  return (
    ['index', 'types'].includes(filenameSansExt) ||
    /\.(test|spec|stories)$/.test(filenameSansExt)
  );
}

const filenameExport = {
  rules: {
    'match-named-export': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Enforce filename matches named export',
        },
        schema: [
          {
            type: 'object',
            properties: {
              stripextra: { type: 'boolean' },
              casing: { enum: ['strict', 'loose'], type: 'string' },
            },
            additionalProperties: false,
          },
        ],
        messages: {
          noMatchingExport: 'Filename does not match any named exports',
        },
      },
      create(context) {
        const options = context.options[0] ?? {};

        return {
          Program(node) {
            const filename = context.getFilename();
            const filenameSansExt = filename
              .split(/[\\/]/)
              .pop()
              .replace(/\.[^.]+$/, '');

            if (isSkippedFilename(filenameSansExt)) return;
            if (
              node.body.some(
                (statement) => statement.type === 'ExportDefaultDeclaration'
              )
            ) {
              return;
            }

            const namedExports = node.body.filter(
              (statement) => statement.type === 'ExportNamedDeclaration'
            );
            if (!namedExports.length) return;

            const normalizedFilename = normalizeExportName(
              filenameSansExt,
              options
            );
            const hasMatch = namedExports
              .flatMap(getNamedExportNames)
              .some(
                (name) =>
                  normalizeExportName(String(name), options) ===
                  normalizedFilename
              );

            if (!hasMatch) {
              context.report({ node, messageId: 'noMatchingExport' });
            }
          },
        };
      },
    },
    'match-default-export': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Enforce filename matches default export',
        },
        schema: [
          {
            type: 'object',
            properties: {
              stripextra: { type: 'boolean' },
              casing: { enum: ['strict', 'loose'], type: 'string' },
            },
            additionalProperties: false,
          },
        ],
        messages: {
          defaultExportDoesNotMatch:
            'Filename does not match the default export',
        },
      },
      create(context) {
        const options = context.options[0] ?? {};

        return {
          Program(node) {
            const filename = context.getFilename();
            const filenameSansExt = filename
              .split(/[\\/]/)
              .pop()
              .replace(/\.[^.]+$/, '');

            if (isSkippedFilename(filenameSansExt)) return;

            const defaultExport = node.body.find(
              (statement) => statement.type === 'ExportDefaultDeclaration'
            );
            if (!defaultExport) return;

            const defaultName = getExportName(defaultExport.declaration);
            if (!defaultName) return;

            if (
              normalizeExportName(String(defaultName), options) !==
              normalizeExportName(filenameSansExt, options)
            ) {
              context.report({
                node,
                messageId: 'defaultExportDoesNotMatch',
              });
            }
          },
        };
      },
    },
  },
};

export default defineConfig([
  globalIgnores([
    '.next/**',
    'node_modules/**',
    'out/**',
    'build/**',
    'coverage/**',
    'next-env.d.ts',
    'tsconfig.tsbuildinfo',
  ]),
  ...nextVitals,
  prettierRecommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImports,
      'filename-export': filenameExport,
      'require-export': requireExport,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
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
      'import/no-relative-parent-imports': 'off',
      'filename-export/match-named-export': 'off',
      'filename-export/match-default-export': 'off',
      'require-export/require-export': 'off',
    },
  },
  {
    files: ['**/*.test.ts'],
    rules: {
      'import/no-unresolved': [
        'error',
        {
          ignore: ['^bun:test$'],
        },
      ],
    },
  },
  {
    files: ['**/*.tsx'],
    ignores: [
      '**/page.tsx',
      '**/layout.tsx',
      '**/not-found.tsx',
      '**/error.tsx',
      '**/loading.tsx',
      '**/opengraph-image.tsx',
    ],
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
]);
