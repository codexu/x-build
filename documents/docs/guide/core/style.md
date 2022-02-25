# 样式

主要介绍如何在模板中使用样式、组件、图标、布局等开发。

## CSS

### 预处理器

初始化模板时，可以选择你喜欢的预处理器：

- [Sass/Scss](https://sass.bootcss.com/documentation)
- [Less](https://less.bootcss.com/)

项目中使用的通用样式，都存放于 `src/styles/...` 目录下。

### Tailwind.css

开箱即用的 [Tailwind.css](https://tailwindcss.com/docs) 2.2 + JIT 编译器。

提供了非常方便的语法：

```html
<div class="relative w-full h-12 p-[13px]"></div>
```

### 体验优化

- 使用 [nprogress@0.2.0](https://github.com/rstacruz/nprogress) 美化页面载入**进度条**。
- 静态资源加载页面（减少白屏等待时间）。

### Scoped

`<style>`加 `scoped` 属性，避免造成全局污染。

```vue
<style scoped></style>
```

### 深度选择器

有时我们可能想明确地制定一个针对子组件的规则。

如果你希望 `scoped` 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 >>> 操作符。有些像 Sass 之类的预处理器无法正确解析 >>>。这种情况下你可以使用 /deep/ 或 ::v-deep 操作符取而代之——两者都是 >>> 的别名，同样可以正常工作。

使用 scoped 后，父组件的样式将不会渗透到子组件中，所以可以使用以下方式解决：

```vue
<style scoped>
  ::v-deep(.foo) {
  }
</style>
```

## 图标

### 为什么选择 Svg 方案

- 支持多色图标了，不再受单色限制。
- 支持像字体那样通过font-size,color来调整样式。
- 支持 ie9+。
- 可利用CSS实现动画。
- 减少HTTP请求。
- 矢量，缩放不失真。
- 可以很精细的控制SVG图标的每一部分。

## 自动注册 Svg 图标

在 `src/assets/icons` 文件夹下的 svg 图表会被自动注册，这是因为使用了 [vite-plugin-svg-icons](https://github.com/anncwb/vite-plugin-svg-icons) 插件进行了相关设置，文件全部打包成 svg-sprite。

### 内置组件

通过全局注册的组件 `<svg-icon />` 即可显示已经注册的 svg 图表。

首先将下载的 .svg 图标放入 `@/assets/icons` 文件夹下，然后使用组件：

```vue
<svg-icon name="filename" />
```

| 属性 | 说明                                     | 类型   | 默认值 |
| ---- | ---------------------------------------- | ------ | ------ |
| name | 放置在 `@/assets/icons` 文件夹下的文件名 | string | -      |
| fill | 颜色填充，使用此项会默认覆盖图标颜色     | string | -      |

#### 样式

- 图标的大小可以通过 width + height 属性改变。
- 通过改变 font-size 属性改变，宽高 = font-zise * 1.4


## 布局

页面整体布局是一个产品最外层的框架结构，往往会包含导航、页脚、侧边栏、通知栏以及内容等。在页面之中，也有很多区块的布局结构。在真实项目中，页面布局通常统领整个应用的界面，有非常重要的作用。

布局组件存放在 `/layouts` 文件夹中。

### default

基础页面布局，包含了头部和底部，当然里面什么也没做，需要你自由发挥。

我们把具备同样功能的页面写在了 frameIn 中，它处于路由的 `/` 根路径下，所有的子页面都处于 default 之内。

### BlankLayout

真正的空白页面，比较适合例如登录这种独立的页面，处于 frameOut 中。

## 组件

### 静态资源

自动补全区分环境的静态资源展示组件。

```vue
<static-file src="filePath" type="img" />
```

| 属性     | 说明                                        | 类型    | 默认值  |
| -------- | ------------------------------------------- | ------- | ------- |
| src      | 静态资源的路径                              | string  | -       |
| type     | 文件类型，仅支持 img、video、audio          | 'img', 'video', 'audio' | 'img' |
| autoplay | 如果是 video 类型，可以控制视频是否自动播放 | boolean | true    |

### 组件库

为了提高开发效率，建议初始化项目时选择一个组件库，脚手架已经对其做好优化。

#### Tree Shaking

通过 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 插件，实现了只注册你使用的组件。

理论上 `unplugin-vue-components` 支持很多组件库，但目前脚手架安装时仅提供了 **Ant Design Vue**、**Element Plus**、**Vant**，如果你是用其他组件库可以查看文档，选择对应的 **Resolver** 进行配置。