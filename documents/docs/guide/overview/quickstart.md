# 快速上手

本节将介绍如何在全局环境安装 X-BUILD 和通过命令行快速的生成项目。

## 安装 CLI

### 准备

- 需要在本地安装 [node.js](https://nodejs.org/en/) 和 [git](https://git-scm.com/)。
- （可选）全局安装 vue-cli@4.5，本项目基于 vue-cli@4.5 构建，理论上支持所有功能。

### 安装

我们推荐使用 npm 的方式进行**全局**安装：

<CodeGroup>
  <CodeGroupItem title="npm">

```bash:no-line-numbers
npm install x-build@next -g
```

  </CodeGroupItem>
  <CodeGroupItem title="yarn">

```bash:no-line-numbers
yarn global add x-build@next
```

  </CodeGroupItem>
</CodeGroup>

mac、linux 用户需要权限增加 sudo。

使用方式类似于 @vue/cli，提供了终端里的 x-build 或 x（简写）命令。

## 创建项目

### 命令

通过以下指令创建一个新项目：

<CodeGroup>
  <CodeGroupItem title="命令">

```bash:no-line-numbers
x-build create [name]
```

  </CodeGroupItem>
  <CodeGroupItem title="缩写">

```bash:no-line-numbers
x create [name]
```

  </CodeGroupItem>
</CodeGroup>

### 选择特性

使用创建命令会提示一系列问题，需要你根据实际需求做出选择：

#### 选择默认 CSS 预处理器

- Scss
- Less

#### 选择默认组件库

- Element Plus
- Ant Design Vue
- Vant

### 安装依赖

- 输入命令后，模板文件会自动创建名字为[name] 的文件夹，并将模板文件复制到此文件夹内。
- 自动初始化 Git。
- 依赖会自动安装，会跟你你所安装的包管理工具按优先级选择：

优先级：yarn > npm

::: warning 提示

强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。若还是不行，可使用 yarn 替代 npm。

:::

## NPM Script

根据安装后的相关提示，输入相关命令以继续：

<CodeGroup>
  <CodeGroupItem title="开发环境">

```bash:no-line-numbers
npm run dev
```

  </CodeGroupItem>
  <CodeGroupItem title="预生产环境">

```bash:no-line-numbers
npm run staging
```

  </CodeGroupItem>
  <CodeGroupItem title="正式环境">

```bash:no-line-numbers
npm run build
```

  </CodeGroupItem>
  <CodeGroupItem title="包分析工具">

```bash:no-line-numbers
npm run analyzer
```

  </CodeGroupItem>
  <CodeGroupItem title="ESLint">

```bash:no-line-numbers
npm run lint
```

  </CodeGroupItem>
  <CodeGroupItem title="Stylelint">

```bash:no-line-numbers
npm run stylelint
```

  </CodeGroupItem>
</CodeGroup>

::: warning 提示
通常情况下 ESLint 与 Stylelint 没必要单独执行，husky 提供的 git commit 钩子会在你提交代码时对你缓存区里的代码做校验，这会节省你很多的时间。
:::

## 必备插件

推荐使用 vscode 作为代码编辑器，安装以下插件可以更好的体验脚手架：

- ESLint
- Prettier - Code formatter
- stylelint
- Tailwind CSS IntelliSense
- Volar
