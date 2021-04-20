const reactComponentGenerator = require('./plop-generator/ReactComponent/index');
const prompts = require('./plugin/prompts');

module.exports = function (plop) {
  prompts(plop);
  reactComponentGenerator(plop);
};
