# 规范化

## ESLint

不管是多人合作还是个人项目，代码规范都是很重要的。这样做不仅可以很大程度地避免基本语法错误，也保证了代码的可读性。

### Airbnb 规范

了解 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)，[中文参考](https://github.com/lin-123/javascript)。

::: tip 为什么选择 Airbnb 规范

- 最严谨的 ESlint 配置
- Github 超过 100k star
:::

### 手动校验代码

```bash:no-line-numbers
npm run lint
```

### 配置

项目的 eslint 配置位于根目录下 .eslintrc.js内，可以根据团队自行修改代码规范。

### 跳过验证

一般情况下，可以通过**注释**的方式取消校验。

```js
/* eslint-disable */
...
/* eslint-enable */
```

指定的规则启用或禁用警告:

```js
/* eslint-disable no-alert, no-console */
...
/* eslint-enable no-alert, no-console */
```

单行跳过验证：

```js
// eslint-disable-next-line
```

## StyleLint

StyleLint 是一个强大的、现代化的 CSS 检测工具, 与 ESLint 类似, 是通过定义一系列的编码风格规则帮助我们避免在样式表中出现错误，配合编辑器的自动修复，可以很好的统一团队项目 css 风格。

### 配置

stylelint 配置位于根目录下stylelint.config.js

### 插件

如果您使用的是 vscode 编辑器的话，只需要安装`StyleLint`插件，即可在保存的时候自动格式化文件内部 css 样式。

## CommitLint

在多人协作的背景下，git 仓库和 workflow 的作用很重要。而对于 commit 提交的信息说明存在一定规范，现使用 `commitlint` + `husky` 规范 `git commit -m ""` 中的描述信息。我们都知道，在使用 git commit 时，git 会提示我们填入此次提交的信息。可不要小看了这些 commit，团队中规范了 commit 可以更清晰的查看每一次代码提交记录，还可以根据自定义的规则，自动生成 changeLog 文件。

### 格式

提交格式（注意冒号后面有空格）

```bash:no-line-numbers
<type>[optional scope]: <description>
```

- **type** ：用于表明我们这次提交的改动类型。
- **optional scope**：可选，用于标识此次提交主要涉及到代码中哪个模块。
- **description**：一句话描述此次提交的主要内容，做到言简意赅。

### Type 类型

| 类型     | 描述                                                   |
| -------- | ------------------------------------------------------ |
| build    | 编译相关的修改，例如发布版本、对项目构建或者依赖的改动 |
| chore    | 其他修改, 比如改变构建流程、或者增加依赖库、工具等     |
| ci       | 持续集成修改                                           |
| docs     | 文档修改                                               |
| feat     | 新特性、新功能                                         |
| fix      | 修改bug                                                |
| perf     | 优化相关，比如提升性能、体验                           |
| refactor | 代码重构                                               |
| revert   | 回滚到上一个版本                                       |
| style    | 代码格式修改, 注意不是 css 修改                        |
| test     | 测试用例修改                                           |

## Git Hook

git hook 结合 ESLint 与 StyleLint，在 git 提交代码的时候进行代码风格校验，如果校验没通过，则提交失败。

### husky

当我们执行 npm run lint 的时候，系统会校验我们所有的代码，这将浪费大量的时间，如果项目从一开始就保证了提交前校验代码的工作，那么多余的代码校验都是徒劳的。所以我们只想校验我们自己提交的代码，这个时候我们引用了 `husky`。

`husky` 的解决方案就是将代码校验放到本地，在 commit 之前先对缓存区里的代码做一次 Lint 校验。

### 跳过检查

**不建议**你这么做，但你执意如此：

```bash:no-line-numbers
git commit -m "xxx" --no-verify
```
