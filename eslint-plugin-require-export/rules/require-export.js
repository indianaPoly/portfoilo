module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'require export in .tsx files (except page.tsx and layout.tsx)',
      category: 'Possible Errors',
      recommended: true,
    },
    fixable: null,
    schema: [],
    messages: {
      noExport:
        'File must export at least one named or default export matching the filename ({{filename}}).',
    },
  },
  create(context) {
    const filename = context.getFilename();

    if (filename.includes('page.tsx') || filename.includes('layout.tsx')) {
      return {};
    }

    if (!filename.endsWith('.tsx')) {
      return {};
    }

    return {
      Program(node) {
        if (!node.body || node.body.length === 0) {
          const basename = filename.split('/').pop().replace('.tsx', '');
          context.report({
            node,
            messageId: 'noExport',
            data: {
              filename: basename,
            },
          });
          return;
        }

        const hasExport = node.body.some((statement) => {
          return (
            statement.type === 'ExportDefaultDeclaration' ||
            statement.type === 'ExportNamedDeclaration' ||
            (statement.type === 'ExportAllDeclaration' && statement.source)
          );
        });

        if (!hasExport) {
          const basename = filename.split('/').pop().replace('.tsx', '');
          context.report({
            node,
            messageId: 'noExport',
            data: {
              filename: basename,
            },
          });
        }
      },
    };
  },
};
