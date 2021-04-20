# fe-code-helper
基于plop的前端模板代码生成工具，内置了常用react模板

如果需要自定义模板，并且不需要在多个项目间公用，请直接在项目内使用plop
如果需要自定义模板，并且需要在多个项目间公用，可以对本package
进行开发，或者自己对plop进行封装。

## 安装
```
npm i git+ssh://git@github.com:wind1996/fe-code-helper.git#master
```
## 使用
在 package.json的script添加
```json
"scripts": {
    "fe-code-helper": "fe-code-helper"
},
```

然后运行 `npm run fe-code-helper`，根据交互选择合适的模板创建代码。
或者可以在运行命令时直接输入generator Name 例如 fe-code-helper 模板名，即可。
具体generator如下
```
# 创建一个React函数组件
fe-code-helper rcFcComponent

# 创建一个页面
fe-code-helper rcFcPage

# 创建一个弹窗
fe-code-helper rcModal
```
## 思考
1. 与IDE的插件结合，比如vsCode,Jetbrains等
2. 可以在各自的项目内配置代码模板
3. 或者与一个模板代码管理平台相结合
