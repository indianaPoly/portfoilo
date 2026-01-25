/**
 * ESLint 커스텀 플러그인: require-export
 * .eslintrc.json에서 직접 require하여 사용
 */
const requireExport = require('./eslint-rules/require-export');

module.exports = {
  rules: {
    'require-export': requireExport,
  },
};
