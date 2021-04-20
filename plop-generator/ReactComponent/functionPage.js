const path = require('path');

const directoryBasePath = path.join(process.cwd());
module.exports = function (plop) {
  plop.setGenerator('rcFfcPage', {
    description: '创建一个函数组件作为页面（可将组件注册到路由）',
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
      },
      {
        type: 'confirm',
        name: 'cssModule',
        message: '是否需要css module(默认需要)',
        default: true,
        when: data => data.needLess
      }, {
        type: 'confirm',
        name: 'addRouter',
        message: '确认要追加到路由配置文件（默认需要）',
        default: true,
      }, {
        type: 'file-tree-selection',
        name: 'routerPath',
        root: directoryBasePath,
        message: '请选择路由文件',
        when: res => res.addRouter
      }, {
        type: 'directory',
        name: 'pagePath',
        basePath: directoryBasePath,
        default: '/',
        message: '请选页面位于的文件夹',
      }, {
        type: 'input',
        name: 'pageTitle',
        message: '请输入页面的标题（可选）',
        default: '页面标题',
      }],
    actions(data) {
      const actions = [];
      const routerFilePath = data.routerPath;
      const pagePath = path.join(directoryBasePath, data.pagePath);
      const pageRouterPath = path.relative(path.join(process.cwd(), '/src/'), `${pagePath}/${data.name}/`)
          .replace(/\\/g, '/');
      if (data.needLess) {
        const lessFileName = data.cssModule ? "index.module" : "index"
        actions.push({
          type: 'add',
          path: `${pagePath}/${data.name}/index.js`,
          data:{lessFileName},
          templateFile: 'plop-templates/ReactTemplate/functionPageWithLess/index.hbs',
        });
        actions.push({
          type: 'add',
          path: `${pagePath}/${data.name}/${lessFileName}.less`,
          templateFile: 'plop-templates/ReactTemplate/functionPageWithLess/index.style.hbs',
        });
      } else {
        actions.push({
          type: 'add',
          path: `${pagePath}/${data.name}/index.js`,
          templateFile: 'plop-templates/ReactTemplate/functionPage/index.hbs',
        });
      }
      if (data.addRouter) {
        actions.push({
          type: 'append',
          path: routerFilePath,
          pattern: /\/\* inject \*\//,
          data: {pageRouterPath},
          templateFile: 'plop-templates/ReactTemplate/injectRouter.hbs',
        });
      }
      return actions;
    },
  });
};
