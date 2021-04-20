// 为 prompt 增加目录选择功能
const promptDirectory = require('inquirer-directory');
const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt');

module.exports = function (plop) {
  plop.setPrompt('directory', promptDirectory);
  plop.setPrompt('file-tree-selection', inquirerFileTreeSelection);
};
