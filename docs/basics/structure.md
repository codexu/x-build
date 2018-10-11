# 目录结构

```
  .
  ├── .babelrc
  ├── .eslintrc.js # eslint配置，当程序报错时，可以参考注释
  ├── index.pug
  ├── package.json
  ├── postcss.config.js
  ├── webpack.config.js
  ├── node_modules/
  |   └── ...
  └── src/ # 源码目录
      ├── assets/ # 静态资源
      |   ├── images/
      ├── scripts/
      ├── styles/
      ├── utils/ # 工具集
      |   ├── config.styl # 用于字体、颜色等配置
      |   ├── hostcss.js # 配合px2rem使用
      |   ├── mixins.styl # 一些常用的css布局函数
      |   └── reset.styl
      ├── app.pug
      ├── index.js
      └── index.styl
```