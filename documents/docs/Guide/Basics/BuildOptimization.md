# 构建优化

## 使用包分析工具

基于 [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)，可以通过以下命令对打包后的文件进行分析：

```
npm run analyzer
```

> 指令执行成功后会占用 8888 端口生成一个分析结果的网页，请注意是否被占用。

## moment

moment 是 ant-design-vue 中有强依赖该插件，所以使用 webpack 插件减小打包体积，这里我们只保留 zh-cn 语言包：

```js
chainWebpack: (config) => {
  config
    .plugin('ContextReplacementPlugin')
    .use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/]);
},
```

此操作大约可以减小打包后体积 200Kb 左右。

## @ant-design/icons

> 目前官方并没有提供解决图标按需加载的功能。

在 webpack 中配置：

```js
configureWebpack: {
  resolve: {
    alias: {
      '@ant-design/icons/lib/dist$':
        path.resolve(__dirname, './src/assets/icons.js'),
    },
  },
},
```

@assets/icons.js 文件中按需加载组件库所需要的图标：

```js
export {
  default as LoadingOutline
} from '@ant-design/icons/lib/outline/LoadingOutline';
```

此操作大约可以减少打包后体积 500Kb 左右。

## gzip

默认已经开启 gzip 打包：

```js
chainWebpack: (config) => {
  config
    .plugin('CompressionPlugin')
    .use(CompressionPlugin, []);
},
```

开启 gzip 大约可以将体积压缩到 1/3 左右。

## 路由懒加载

当打包构建应用时，Javascript 包会变得非常大，影响页面加载速度。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

结合 Vue 的[异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6)和 Webpack 的[代码分割](https://www.webpackjs.com/guides/code-splitting/)功能，轻松实现路由组件的懒加载。如：

```js {4-6}
{
  path: 'home',
  name: 'Home',
  component: () => import(
    /* webpackChunkName: "home" */ '@/views/home/index.vue'
  ),
},
```

::: tip webpack 注释
/* webpackChunkName: "home" */
增加此条注释，在打包时，切片的文件名前会加上此项的 name，便于区分打包后页面对应的文件。
:::

## Preload

`<link rel="preload">` 是一种 resource hint，用来指定页面加载后很快会被用到的资源，所以在页面加载的过程中，我们希望在浏览器开始主体渲染之前尽早 preload。

默认情况下，一个 Vue CLI 应用会为所有初始化渲染需要的文件自动生成 preload 提示。

这些提示会被 [@vue/preload-webpack-plugin](https://github.com/vuejs/preload-webpack-plugin) 注入，并且可以通过 chainWebpack 的 config.plugin('preload') 进行修改和删除。

## Prefetch

`<link rel="prefetch">` 是一种 resource hint，用来告诉浏览器在页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容。

默认情况下，一个 Vue CLI 应用会为所有作为 async chunk 生成的 JavaScript 文件 (通过动态 import() 按需 code splitting 的产物) 自动生成 prefetch 提示。

这些提示会被 [@vue/preload-webpack-plugin](https://github.com/vuejs/preload-webpack-plugin) 注入，并且可以通过 chainWebpack 的 config.plugin('prefetch') 进行修改和删除。