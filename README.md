# X-BUILD

一款协助你快速从"零"搭建大型应用的前端脚手架。

## 简介

**X-BUILD** 基于 [`vue3`](https://v3.cn.vuejs.org/) + `typescript`，使用 `vite` 构建项目，支持众多的开箱即用的功能和针对项目进行了不同程度的优化，初始模板打包后体积仅为 **150kb / 50kb(gzip)**。它的宗旨是快速创建一套**纯净**却具备强大基础功能的模板，协助开发者自由发挥快速搭建任何类型的项目。

## 文档

[文档地址](https://code-device.github.io/x-build/)

## 如何使用？

### CLI

你可以通过全局安装 `X-BUILD`，它本质上是一款 `CLI` (command-line interface，中文：命令行界面) ，提供了一系列的选项，为你生成一套适合于你的前端开发模板，这套模板已经提供了许多通用的基础功能，为你的项目打下坚实的基础。

### 基于 X-BUILD 打造自己的脚手架

通常情况下，每个团队的习惯不同，尽管 `X-BUILD` 提供了可选项辅助生成个性化模板，但不能满足所有人的需求，所以基于 `X-BUILD` 打造一套自己的脚手架是一个更好的选择，你可以通过 `Fork` 本仓库，修改成你的团队的开发习惯。

## 核心功能

脚手架可以快速帮你创建一份空白模板，提供了许多通用的功能：

### 应用

- 基于文件的路由
- 提供`环境变量`：开发环境、预生产环境、生产环境
- 基于 `Pinia` 实现的全局状态管理，更好的支持 TS
- 提供一个基于 `mitt` 的组件联动交互的解决方案
- 提供实用 `Hooks`，更多情况下推荐使用 [vueuse](https://vueuse.org/guide/)
- 基于 `axios` 异步请求封装
- 基于环境变量的静态资源组件
- 自动加载 `SVG` 的图标组件，雪碧图打包
- 页面登录访问权限、指令权限
- 页面缓存（基于 `keep-alive` 实现）
- 支持 `gzip`
- 支持 PWA

### UI

- 布局系统
- 可选 `Less` 或 `Sass/Scss` 预处理器
- 根据路由与环境变量自动变化标签栏 Title
- 静态资源加载页面
- 页面载入进度条

### 规范

- ESLint **Airbnb** 规范
- Stylelint
- husky & Commitlint

## 浏览器支持

本地开发：推荐使用 <Badge text="Chrome" vertical="middle" /> 最新版浏览器，不支持 Chrome 80 以下版本。

生产环境：支持现代浏览器, **不支持 <Badge type="danger" text="IE" vertical="middle" />**。

| IE          | Edge            | Firefox         | Chrome          | Safari          |
| ----------- | --------------- | --------------- | --------------- | --------------- |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 贡献代码

文档代码在项目的 `/document` 中，由于文档中有部分 vue3 的功能演示，所以采用 vuepress2 开发。

有任何修改和建议都可以该项目 pr 和 issue，详情请参考 [贡献代码](/Contribution/README.md)。
