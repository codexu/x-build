# 运行项目

#### 开发模式

执行开发模式：

```
  $ npm run dev
```

- 启动一个开发服务器基于`webpack-dev-server`并附带开箱即用的模块热重载`HMR`。

- **注意：**`pug`文件修改时请F5刷新浏览器，css和js无需刷新。

&emsp;

#### 生产模式

执行生产模式：

```
  $ npm run build
```

- 生产模式下将编译好的文件打包在`dist\`目录下，所有的静态文件都存放在`dist\static\`目录下。

- `index.pug`是`html`的入口文件，它引入了`app.pug`文件，编译后为`index.html`。

- 小于`8kb`的图片资源会以`base64`形式编译在html或css中。

- 第三方库会独立打包，以便更好的缓存。