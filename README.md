# x-build 4.0.2

### 开发模式
通过命令：`npm run dev`启动本地`Web Server(http://localhost:3000/)`，默认监听端口 3000，并实时监听文件，发生改动时，浏览器会自动热更新。

### 生产模式
通过命令：`npm run build` 对整个项目进行打包，目录（./output）。

### 功能&风格
- 使用`pug（原jade）`作为模版引擎。
- 使用`stylus`, `less`作为css预处理语言。
- 使用`babel`编译es6代码。
- 图片进行压缩处理，对`8kb`以下的图片进行`base64`处理。

### 注意事项

- 在使用`pug`模版引擎时，图片`img`通过`src=require()`引入：
  ``` pug
    img(src=require('./images/logo.png'))
  ```

- rem布局使用：

    移动端建议使用'750px'设计稿，如果网页大于750px时，font-size为100px。

  rem换算：

    设计稿尺寸除100，例如设计稿'20px'，换算20 / 100 = 0.2rem