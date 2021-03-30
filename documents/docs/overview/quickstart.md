# 快速上手

本节将介绍如何在全局环境安装 X-BUILD 和通过命令行快速的生成项目。

## 安装 CLI

### 准备

- 需要在本地安装 [node.js](https://nodejs.org/en/) 和 [git](https://git-scm.com/)。
- （可选）全局安装 vue-cli@4.5，本项目基于 vue-cli@4.5 构建，理论上支持所有功能。

### 安装

我们推荐使用 npm 的方式进行**全局**安装：

```
npm install x-build -g
```

mac、linux 用户需要权限增加 sudo。

使用方式类似于 @vue/cli，提供了终端里的 x-build 或 x（简写）命令。

## 相关工具

- [Vue Dev-Tools](https://github.com/vuejs/vue-devtools): Vue 在浏览器下的调试工具。

- [Vetur](https://github.com/vuejs/vetur): VS Code 插件。

## 创建项目

### 创建

通过以下指令创建一个新项目：

```
x create [name]
```

### 安装依赖

- 输入命令后，模板文件会自动创建名字为[name] 的文件夹，并将模板文件复制到此文件夹内。
- 自动初始化 Git。
- 依赖会自动安装，会跟你你所安装的包管理工具按优先级选择：

优先级：yarn > npm

::: tip 提示

强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。若还是不行，可使用 yarn 替代 npm。

:::

### 创建完成

根据安装后的相关提示，输入相关命令以继续。

### 开发与生产

开发与生产环境与 @vue/cli 命令一致。

开发：

```
npm run serve
```

生产（测试环境）：

```
npm run build:test
```

生产（正式环境）：

```
npm run build
```
