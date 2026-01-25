/**
 * ESLint 커스텀 플러그인: require-export
 */
const requireExport = require('./require-export');

module.exports = {
  rules: {
    'require-export': requireExport,
  },
};
