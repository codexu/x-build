# CommitLint

在多人协作的背景下，git 仓库和 workflow 的作用很重要。而对于 commit 提交的信息说明存在一定规范，现使用 `commitlint` + `husky` 规范 `git commit -m ""` 中的描述信息。我们都知道，在使用 git commit 时，git 会提示我们填入此次提交的信息。可不要小看了这些 commit，团队中规范了 commit 可以更清晰的查看每一次代码提交记录，还可以根据自定义的规则，自动生成 changeLog 文件。

## 格式

提交格式（注意冒号后面有空格）

```bash:no-line-numbers
<type>[optional scope]: <description>
```

- **type** ：用于表明我们这次提交的改动类型。
- **optional scope**：可选，用于标识此次提交主要涉及到代码中哪个模块。
- **description**：一句话描述此次提交的主要内容，做到言简意赅。

## Type 类型

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
