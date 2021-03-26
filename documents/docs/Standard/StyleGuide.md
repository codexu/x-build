# 风格指南

x-build 的风格指南主要是参照 vue 官方的[风格指南](https://cn.vuejs.org/v2/style-guide/index.html)。

## 项目命名

全部采用小写方式，以中划线分隔。

::: details 查看示例
- x-build
:::

## 目录命名
全部采用小写方式，以中划线分隔，有复数结构时，要采用复数命名法，缩写不用复数。

::: details 查看示例
- styles
- demo-styles
:::

## 命名严谨性

代码中的命名严禁使用拼音，一律使用英文。

- 使用有意义，可读性好的变量名。
- 使用易于检索名称，例如常量需要定义全大写以下划线拼接的变量名。

## 组件

所有的Component文件都是以大写开头 (PascalCase)，这也是[官方](https://cn.vuejs.org/v2/style-guide/index.html#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)所推荐的。

排除 index.vue 和 内置组件 wm-***。

::: details 查看示例
- @/components/BackToTop/index.vue
- @/components/Charts/Line.vue
- @/views/example/components/Button.vue
:::

## JS 文件

所有的.js文件都遵循横线连接 (kebab-case)。

::: details 查看示例
- @/utils/open-window.js
- @/views/svg-icons/require-icons.js
- @/components/MarkdownEditor/default-options.js
:::

## 页面 Views

在views文件下，代表路由的.vue文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。

::: details 查看示例
- @/views/svg-icons/index.vue
- @/views/svg-icons/require-icons.js
:::

使用横线连接 (kebab-case)来命名views主要是出于以下几个考虑。

- 横线连接 (kebab-case) 是官方推荐的命名规范
- views 下的.vue文件代表的是一个路由，所以它需要和component进行区分(component 都是大写开头)
- 页面的url 也都是横线连接的，比如https://www.xxx.com/xxx，所以路由对应的view应该要保持统一
- 没有大小写敏感问题

## 注释

- 只对存在一定业务逻辑复杂性的代码进行注释。
- 不要在代码库中遗留被注释掉的代码。