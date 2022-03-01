# 构建部署

## 构建

X-BUILD 提供了两种打包方案：**预生产环境**和**正式环境**，项目开发完成之后，根据环境要求，执行两个命令其中之一：

<CodeGroup>
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
</CodeGroup>

构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件，文件包含 `.gz` 文件是同时生成的，如果服务器支持 gzip，用户访问时仅会请求更小的 `.gz` 文件。

## 预览

你可以使用以下命令来本地预览：

<CodeGroup>
  <CodeGroupItem title="本地预览">

```bash:no-line-numbers
npm run serve
```

  </CodeGroupItem>
</CodeGroup>

使用此命令的前提是你已经执行过构建命令，且保证 `/dist` 目录存在。

## 服务端部署

部署只需将构建后的文件发布到你的 cdn 或服务器，`index.html` 是唯一的入口页面。

生成的 HTML 文件引入的 js 和 css 文件路径可能并非你是服务端配置的路径，这时你可能需要修改 `.env.production` 中的 `VITE_PUBLIC_PATH` 属性：

```sh
# 根据自己路径来配置更改，注意需要以 / 开头和结尾
VITE_PUBLIC_PATH=/
VITE_PUBLIC_PATH=/xxx/
```

## 路由模式

前端路由使用 vue-router，它提供了两种方式：history 和 hash。

- hash 默认会在 url 后面拼接 # （不美观）
- history 需要服务器配合

X-BUILD 默认使用 `hash` 路由，如果后端可以协助你配置 `history` 路由，你可以在 `src/router/index.ts` 内进行修改

```ts
createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
});
```