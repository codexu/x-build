# Stylus（css预处理）

此处仅列举一部分常用语法，深入了解请查看：[参考文档](https://www.zhangxinxu.com/jq/stylus/)

#### 什么是Stylus

Stylus的风格与Pug类似，所以在这里采用了这个css预处理器。

```stylus
.container
  padding 0
  .desc
    width 1200px
```

编译为:

```css
.container{
  padding: 0;
}
.container .desc{
  width: 1200px;
}
```

可见，这样的写法可以省去大量的代码，但要注意缩进关系。

#### 变量

```stylus
size = 16px
body
  font-size size
```