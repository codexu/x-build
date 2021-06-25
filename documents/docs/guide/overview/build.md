# 构建部署

## 构建

当项目等待测试或开发完毕准备上线时，与 @vue/cli 一样，只需要运行一行命令就可以打包你的应用：

<CodeGroup>
  <CodeGroupItem title="正式环境">

```bash:no-line-numbers
npm run build
```

  </CodeGroupItem>
  <CodeGroupItem title="测试环境">

```bash:no-line-numbers
npm run build:test
```

  </CodeGroupItem>
</CodeGroup>

## 配置打包路径

通常情况下，测试环境都会放在本地服务器下，所以打包路径显得尤为重要。大多数项目在没有正式上线前，我们访问的地址可能都是 `IP` + `项目名` 的形式访问，所以默认打包路径会附带项目的名称，当然你可以通过 vue.config.js 中的 publicPath 改变此规则。

::: tip 提示
打包的项目取自 `package.json` 的 `name` 属性。
:::

## 环境变量

不论是开发、测试还是生产，都配备了对应的文件来处理不同环境下需要打包的内容，这与你执行的命令息息相关，它将直接影响你的打包结果。

想了解更多关于环境变量的内容，请查看[环境变量](/core/env.md)章节。

## 分析包体积

如果你的构建文件很大，超出了你的预料，运行下面的命令构建并分析依赖模块的体积分布，针对性的优化你的代码：

```bash:no-line-numbers
npm run analyzer
```

## Router Mode

默认情况下使用 hash 路由，如果想使用 history 路由可以在 `router/index.ts` 中配置，并与后端人员做好协调。

## 部署

上面提到的构建方式都是在我们自己的电脑上进行打包，这样效率很低，推荐配置 CI/CD 实现全自动化的上线流程。
