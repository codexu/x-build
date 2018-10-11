# pug（模板引擎）

此处仅列举一部分常用语法，深入了解请查看：[参考文档](https://pug.bootcss.com/api/getting-started.html)

#### 什么是Pug

Pug是一种用于编写HTML的干净，空格敏感的语法，通过缩进的方式进行书写，例如：

```pug
#container.col
  p You are using pug!
```

编译为:

```html
<div id="container" class="col">
  <p>You are using pug!</p>
</div>
```

可见，这样的写法可以省去大量的代码，但要注意缩进关系。

#### 注释

```pug
// 一些内容
//- 这行不会被编译
```
#### 代码

开始一段不直接进行输出的代码

```pug
- var list = ["Cuatro", "Cinco", "Seis"]
```

#### 条件

```pug
- var isTrue = true
  if isTrue
    p ture
  else
    p false
```