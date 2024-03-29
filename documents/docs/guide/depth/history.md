# 历史版本

X-BUILD 从 2017年至今已经历到 6.x 版本，每一次版本的提升也是我个人能力的提升，从这里面我学到了很多东西，下面简单介绍一下 X-BUILD 的发展史：

## v1.x

基于 Gulp 的前端项目模板，支持 Sass、Babel、图片压缩、代码、监听文件变化刷新浏览器等基础功能。

## v2.x

基于 Gulp + Webpack 的模块化开发前端模版，增加了服务热更新、Jade 模板引擎（后改名为 Pug）。

## v3.x

移除 Gulp，全面使用 Webpack 作为构建工具，增加了对小图片的 base 64 处理、rem 布局方案。

## v4.x

简单的脚手架，Webpack 升级至 4.x 版本，内置了丰富的功能，具备简单的使用文档，通过拉取 Github 模板来创建项目。

## v5.x

丰富脚手架功能，可以本地读取写入模板，支持了灵活的配置，例如 CSS 预处理器、ES-Lint、Typescript 等，具备了完整的[文档](https://codexu.github.io/)，但它没有携带任何框架，只适合一些小型项目或插件开发。

## 关于 vue2

由于公司技术栈全面倾向于 vue2.x，并且给了一定的时间来开发脚手架，所以这个版本的脚手架我们只上传到公司的 npm 私服。此版本开发结束后，我做了一篇总结[《基于Vue的前端架构，我做了这15点》](https://juejin.cn/post/6901466994478940168)，收获了不少的赞，这也坚定了我继续更新一个开源脚手架的决心。

::: tip 帮助
提供部分源码预览，仅供学习与分享，请访问 dev 分支[查看](https://github.com/code-device/x-build/tree/dev)。
:::