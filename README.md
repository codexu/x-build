# x-build 4.2.0

### 开发模式
通过命令：`npm run dev`启动本地`Web Server(http://localhost:3000/)`，默认监听端口 3000，并实时监听文件，发生改动时，浏览器会自动热更新。

### 生产模式
通过命令：`npm run build` 对整个项目进行打包，目录（./output）。

### 功能&风格
- 使用`pug`作为模版引擎。
- 使用`stylus`作为css预处理语言。
- 使用`babel`编译es6代码。
- 图片进行压缩处理，对`8kb`以下的图片进行`base64`处理。