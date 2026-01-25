/**
 * ESLint 커스텀 규칙: .tsx 파일에 export가 있는지 확인
 * page.tsx와 layout.tsx는 제외
 */
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
    const sourceCode = context.getSourceCode();

    // page.tsx와 layout.tsx는 제외
    if (filename.includes('page.tsx') || filename.includes('layout.tsx')) {
      return {};
    }

    // .tsx 파일만 체크
    if (!filename.endsWith('.tsx')) {
      return {};
    }

    return {
      Program(node) {
        // 파일이 비어있는지 확인
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

        // export 문이 있는지 확인
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
