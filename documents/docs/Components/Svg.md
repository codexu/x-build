# SVG 图标

## 使用方法

首先将下载的 .svg 图标放入 `@/assets/icons` 文件夹下

然后使用组件

```vue
<m-svg name="svg文件名" />
```

## 参数

- name
  - 类型：String
  - 默认值：null
  - 说明：放置在 `@/assets/icons` 文件夹下的文件名

- fill
  - 类型：String
  - 默认值：null
  - 说明：颜色填充，使用此项会默认覆盖图标颜色

## 样式

- 图标的大小可以通过 width + height 属性改变。
- 通过改变 font-size 属性改变，宽高 = font-zise * 1.4