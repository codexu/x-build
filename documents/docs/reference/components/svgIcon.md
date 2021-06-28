# SVG 图标

## 使用方法

首先将下载的 .svg 图标放入 `@/assets/icons` 文件夹下

然后使用组件

```vue
<svg-icon name="filename" />
```

## 参数

| 属性 | 说明                                     | 类型   | 默认值 |
| ---- | ---------------------------------------- | ------ | ------ |
| name | 放置在 `@/assets/icons` 文件夹下的文件名 | string | -      |
| fill | 颜色填充，使用此项会默认覆盖图标颜色     | string | -      |

## 样式

- 图标的大小可以通过 width + height 属性改变。
- 通过改变 font-size 属性改变，宽高 = font-zise * 1.4
