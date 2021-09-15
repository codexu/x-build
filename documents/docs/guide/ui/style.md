# 样式

主要介绍如何在模板中使用或规划样式开发。

## 预处理器

初始化模板时，可以选择你喜欢的预处理器：

- [Sass/Scss](https://sass.bootcss.com/documentation)
- [Less](https://less.bootcss.com/)

项目中使用的通用样式，都存放于 `src/styles/...` 目录下。

## Tailwind.css

开箱即用的 [Tailwind.css](https://tailwindcss.com/docs) 2.2 + JIT 编译器。

提供了非常方便的语法：

```html
<div class="relative w-full h-12 p-[13px]"></div>
```

## 体验优化

- 使用 [nprogress@0.2.0](https://github.com/rstacruz/nprogress) 美化页面载入**进度条**。
- 静态资源加载页面（减少白屏等待时间）。

## Scoped

`<style>`加 `scoped` 属性，避免造成全局污染。

```vue
<style scoped>
...
</style>
```

## 深度选择器

有时我们可能想明确地制定一个针对子组件的规则。

如果你希望 `scoped` 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 >>> 操作符。有些像 Sass 之类的预处理器无法正确解析 >>>。这种情况下你可以使用 /deep/ 或 ::v-deep 操作符取而代之——两者都是 >>> 的别名，同样可以正常工作。

使用 scoped 后，父组件的样式将不会渗透到子组件中，所以可以使用以下方式解决：

```vue
<style scoped>
  ::v-deep(.foo) {
  }
</style>
```