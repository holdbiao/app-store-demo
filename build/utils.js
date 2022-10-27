const path = require('path');

/** 处理构建过程中目录绝对路径 */
exports.rootDir = function(pathStr = '') {
  return path.resolve(__dirname, '../', pathStr)
}