<h1 align="center">X-BUILD</h1>

<p align="center">
  <a href="https://v3.cn.vuejs.org/" target="blank">
    <img src="https://img.shields.io/badge/vue-3.2.6-brightgreen.svg" />
  </a>
  <a href="https://www.npmjs.com/package/x-build" target="blank">
    <img src="https://img.shields.io/npm/v/x-build/next" />
  </a>
  <a href="https://github.com/code-device/x-build/actions" target="blank">
    <img src="https://github.com/code-device/x-build/workflows/GitHub%20Actions/badge.svg" />
  </a>
  <a href="https://github.com/code-device/x-build/blob/next/LICENSE" target="blank">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" />
  </a>
  <a href="https://github.com/code-device/x-build" target="blank">
    <img src="https://img.shields.io/github/stars/code-device/x-build.svg?style=social&label=Stars" />
  </a>
</p>

<style>
a img{ padding-right: 5px; }
</style>

## 简介

> 一款协助你快速从"零"搭建大型应用的前端脚手架。

**X-BUILD** 基于 [vue3](https://v3.cn.vuejs.org/) + typescript，使用 Vite 构建项目，支持众多的开箱即用的功能和针对项目进行了不同程度的优化。不同于众多的中后台解决方案（[ant-design-pro](https://pro.ant.design/docs/getting-started-cn)、[vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/)、[d2-admin](https://d2.pub/zh/doc/d2-admin/) 等）。它的宗旨是快速创建一套**纯净**却具备强大基础功能的模板，协助开发者自由发挥快速搭建任何类型的项目。

另一个强大的功能，就是基于 Lerna 实现的包管理功能，如果你正负责一个前端团队，那这项功能将极大的提升你的团队开发效率，具体使用请查看[packages](/packages)。

::: tip 基础
在使用此脚手架前，请确保你对以下的技术有足够的知识储备：

- 语言基础：JavasSript、TypeScript
- Vue 基础：[vue3](https://v3.cn.vuejs.org/)、[vue-router4.0](https://next.router.vuejs.org/)、Vuex 和 [Pinia](https://pinia.esm.dev/)
- 前端工程化：[@vue/cli4](https://cli.vuejs.org/zh/guide/)、[Webpack](https://webpack.docschina.org/concepts/)
:::

## 浏览器支持

本地开发：推荐使用 <Badge text="Chrome" vertical="middle" /> 最新版浏览器，不支持 Chrome 80 以下版本。

生产环境：支持现代浏览器, **不支持 <Badge type="danger" text="IE" vertical="middle" />**。

| IE          | Edge            | Firefox         | Chrome          | Safari          |
| ----------- | --------------- | --------------- | --------------- | --------------- |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 基础设施

脚手架可以快速帮你创建一份空白模板，但这并不意味着脚手架什么也没做，下面从 5 个方面介绍脚手架为你做了哪些基础设施：

<CodeGroup>
  <CodeGroupItem title="&nbsp;UI&nbsp;">

```bash:no-line-numbers
- 内置功能：
  - 使用 Scss 作为主要的 CSS 预处理器
  - 内置全局变量并提供多个常用 Mixin
  - 自适应布局解决方案（根据需求自行根据文档配置）
  - 根据路由与环境变量自动变化的 title
- 页面美化：
  - 静态资源加载页面
  - 页面载入进度条
  - 美化滚动条
```

  </CodeGroupItem>

  <CodeGroupItem title="&nbsp;路由&nbsp;">

```bash:no-line-numbers
- 权限权限：页面访问权限、指令权限
- 菜单管理：扁平化菜单、模糊搜索
- 页面缓存（基于 keep-alive 实现）
```

  </CodeGroupItem>
  <CodeGroupItem title="&nbsp;功能&nbsp;">

```bash:no-line-numbers
- 开发环境
  - Mock 数据
  - 提供环境变量：开发环境、预生产环境、生产环境
- 组件、数据交互
  - 基于 Pinia 实现的全局状态管理，更好的支持 TS
  - 提供一个基于 mitt 的组件联动交互的解决方案（慎用）
  - 提供多个实用 Hooks
  - 基于 axios 异步请求封装
- 内置全局组件
  - 基于环境变量的静态资源组件
  - 自动加载 SVG 的图标组件
```

  </CodeGroupItem>
  <CodeGroupItem title="&nbsp;规范&nbsp;">

```bash:no-line-numbers
- ESLint Airbnb 规范 JavaScript
- Stylelint 规范 CSS
- husky & Commitlint 规范提交记录
```

  </CodeGroupItem>
  <CodeGroupItem title="&nbsp;优化&nbsp;">

```bash:no-line-numbers
- svg 雪碧图打包优化
- gzip
```

  </CodeGroupItem>
</CodeGroup>

## 贡献代码

文档代码在项目的 `/document` 中，由于文档中有部分 vue3 的功能演示，所以采用 vuepress2 开发。

有任何修改和建议都可以该项目 pr 和 issue，详情请参考 [贡献代码](/Contribution/README.md)。
