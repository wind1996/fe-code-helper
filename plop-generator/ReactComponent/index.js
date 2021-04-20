const generatorFcComponent = require('./functionComponent');
const generatorFcPage = require('./functionPage');
const generatorComponentModal = require('./modal');

module.exports = function (plop) {
  generatorFcComponent(plop);
  generatorFcPage(plop);
  generatorComponentModal(plop);
};
