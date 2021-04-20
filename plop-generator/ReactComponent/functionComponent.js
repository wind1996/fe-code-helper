const path = require('path');

const directoryBasePath = path.join(process.cwd(), '/src');

module.exports = function (plop) {
  plop.setGenerator('rcFcComponent', {
    description: '创建一个函数组件',
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
        type: 'confirm',
        name: 'needLess',
        message: '是否需要样式文件（默认需要）',
        validate(val) {
          if (!val) {
            return '组件名必填';
          }
          return true;
        },
      }, {
        type: 'confirm',
        name: 'cssModule',
        message: '是否需要css module(默认需要)',
        default: true,
        when: data => data.needLess
      }, {
        type: 'directory',
        name: 'pagePath',
        basePath: directoryBasePath,
        default: '/',
        message: '请选页面位于的文件夹',
      }],
    actions(data) {
      const actions = [];
      const pagePath = path.join(directoryBasePath, data.pagePath);
      if (data.needLess) {
        const lessFileName = data.cssModule ? "index.module" : "index"
        actions.push({
          type: 'add',
          path: `${pagePath}/${data.name}/index.js`,
          data:{lessFileName},
          templateFile: 'plop-templates/ReactTemplate/functionComponentWithLess/index.hbs',
        });
        actions.push({
          type: 'add',
          path: `${pagePath}/${data.name}/${lessFileName}.less`,
          templateFile: 'plop-templates/ReactTemplate/functionComponentWithLess/index.style.hbs',
        });
      } else {
        actions.push({
          type: 'add',
          path: `${pagePath}/${data.name}/index.js`,
          templateFile: 'plop-templates/ReactTemplate/functionComponent/index.hbs',
        });
      }
      return actions;
    },
  });
};
