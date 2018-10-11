# Mixins(Stylus)

---

#### loader(width, height)

- `width` [30px] 图标宽度

- `height` [30px] 图标高度

用于loading加载页面，宽高为屏幕的100%，子元素`<img>`水平垂直居中。

![](https://ws4.sinaimg.cn/large/006tNbRwly1fw20nmvmhqj30640d3js3.jpg)

---

#### Wrapper()

用于每一个模块的**包裹层**，`相对定位`、`宽度100%`、`overflow: hidden`。

---

#### Wrapper-background(width)

- `width` [750px] 背景图片宽度

用于**包裹层**的子元素，适用于`<img>`，不论包裹层如何变换宽度，背景图片始终保持在**包裹层**的正中间。

```stylus
.wrapper
  Wrapper()
  img.bg
    Wrapper-background(750px)
```

![](https://ws1.sinaimg.cn/large/006tNbRwly1fw22y2vahej308c0d374l.jpg)

---

#### Item-position(width, height, x, y, z-index)

- `width` [500px] 元素的宽度

- `height` [100px] 元素的高度

- `x` [0px] X轴偏移量

- `y` [0px] Y轴偏移量

用于元素定位，默认情况下定位在父元素的顶部正中间，x、y控制元素偏移。

![](https://ws2.sinaimg.cn/large/006tNbRwly1fw236lasx5j30640d374i.jpg)

#### Text(size, width, align, color)

- `size` [H1-H6 or P] 文字大小，参考config.styl => $FONT_H*_SIZE

- `width` [500px] 文本或段落宽度

- `align` [left, center, right] 文本对齐方式

- `color` [$FONT_DEFAULT_COLOR] 文本颜色

用于标题或文本段落，外层嵌套`Item-position`做定位。

#### Pseudo(align, x, y)

- `align` [left, right] 图标对齐位置

- `x` [0px] X轴偏移量

- `y` [0px] Y轴偏移量

用于伪类定位图标，需要单独设置**背景图**和**宽高**。

```stylus
.demo
  img()
    background-image url(...)
    width 20px
    height 20px
  &:before
    Pseudo(left, 10px, 10px)
    img()
  &:after
    Pseudo(right, 10px, 10px)
    img()
```

![](https://ws4.sinaimg.cn/large/006tNbRwly1fw239wg3b3j30640d3jrj.jpg)