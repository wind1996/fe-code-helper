const path = require('path');

const directoryBasePath = path.join(process.cwd(), '/src');

module.exports = function (plop) {
  plop.setGenerator('rcModal', {
    description: '创建一个弹窗组件',
    prompts: [{
      type: 'input',
      name: 'name',
      message: '请输入函数组件的名字（必填）',
      validate(val) {
        if (!val) {
          return '组件名必填';
        }
        return true;
      },
    },
    {
      type: 'directory',
      name: 'pagePath',
      basePath: directoryBasePath,
      default: '/',
      message: '请选页面位于的文件夹',
    }],
    actions(data) {
      const actions = [];
      const pagePath = path.join(directoryBasePath, data.pagePath);
      actions.push({
        type: 'add',
        path: `${pagePath}/${data.name}/index.js`,
        templateFile: 'plop-templates/ReactTemplate/generatorComponentModal/index.hbs',
      });
      return actions;
    },
  });
};
