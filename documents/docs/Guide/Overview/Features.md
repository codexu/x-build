# 特性

## 框架

脚手架基于 [vue-cli4](https://cli.vuejs.org/zh/guide/) 构建，内置了路由（权限管理）、状态管理（模块化）。

| 依赖 | 依赖版本 | 脚手架版本 |
| ---- | ---- | ---- |
| @vue/cli | v4.5.0 | - |
| vue | v2.6.11 | - |
| vue-router | v3.2.0 | - |
| vuex | v3.4.0 | - |

## 功能

`✅ 已实现功能` `⭕ 未实现功能` `💛 筹划中`

| 状态 | 功能 | 依赖 | 依赖版本 | 脚手架版本 |
| ---- | ---- | ---- | ---- | ---- |
| ✅ | [登录/权限验证](/Guide/Basics/Permission.md) | @/router/permission.js | - | - |
| ✅ | [自动注册 SVG 图标](/Guide/Basics/SvgIcon.md) | svg-sprite-loader | v5.0.0 | - |
| ✅ | [公用样式/变量/Mixins](/Guide/Basics/Style.md) | Sass | v1.26.5 | - |
| ✅ | [数据持久化](/Guide/Basics/DB.md) | store.js | v2.0.12 | - |
| ✅ | [异步请求封装](/Guide/Basics/DB.md) | Axios | v0.20.0 | - |
| ✅ | CSS跨浏览器一致性 | Normalize.css | v8.0.1 | - |
| ✅ | 表单验证 | @/libs/validator | - | v1.1.8 |
| ✅ | Mock数据 | mock.js | v1.1.0 | v1.1.9 |
| ✅ | 包分析工具 | webpack-bundle-analyzer | v4.1.0 | v1.1.11 |
| 💛 | 多国语 | [vue-i18n](https://github.com/kazupon/vue-i18n) | - | - |
| 💛 | 日志记录 | - | - | - |
| ⭕ | 错误捕捉 | - | - | - |

## 组件

`✅ 已实现组件` `⭕ 未实现组件` `💛 筹划中`

| 状态 | 组件 | 依赖 | 依赖版本 | 脚手架版本 |
| ---- | ---- | ---- | ---- | ---- |
| ✅ | [基础组件库](/Components/AntD.md) | ant-design-vue | v1.6.5 | - |
| ✅ | [图表库](/Guide/Basics/Chart.md) | echarts | v4.9.0 | - |
| ✅ | [静态资源加载](/Components/Static.md) | m-static | 内置 | - |
| ✅ | [SVG 图标组件](/Components/Svg.md) | m-svg | 内置 | - |
| ✅ | [数字动画](/Components/Count.md) | countup.js -> m-count | v2.0.7 | - |
| ✅ | [代码高亮](/Components/Highlight.md) | highlight.js -> m-highlight | v10.3.1 | - |
| ✅ | [大文件上传](/Components/Uploader.md) | simple-uploader.js -> m-uploader | v0.5.5 | - |
| ✅ | [图片全屏预览](/Components/Fullview.md) | swiper.js -> m-fullview | v4.4.0 | - |
| ✅ | [Excel 导入导出](/Components/Excel.md) | m-excel | - | - |
| ✅ | [富文本编辑器](/Components/Editor.md) | wangeditor -> m-editor | v4.0.5 | - |
| ✅ | [Markdown](/Components/Markdown.md) | m-markdown | - | - |
| ✅ | [代码编辑器](/Components/Code.md) | m-code | - | - |

::: warning 注意
以 `m-` 开头的组件属于公司内部组件，因为可控，所以安装最新版即可，其他组件未避免安全问题，请以列表中的版本为准。
:::

## 全局状态管理

`✅ 已实现状态管理` `⭕ 未实现状态管理` `💛 筹划中`

| 状态 | 状态管理 | 依赖 | 依赖版本 | 脚手架版本 |
| ---- | ---- | ---- | ---- | ---- |
| ✅ | [用户信息](/Filters/User.md) | store.js | v2.0.12 | - |
| ✅ | [登陆登出](/Filters/Account.md) | md5 | v2.3.0 | - |
| ✅ | [菜单信息管理](/Filters/Menu.md) | fuse.js | v6.4.2 | - |
| ✅ | [UA 信息](/Filters/Ua.md) | ua-parser-js | v0.7.22 | - |
| ✅ | [全屏](/Filters/Ua.md) | screenfull | v5.0.2 | - |
| ✅ | [Loading](/Filters/Loading.md) | ant design vue { Spin } | v2.3.0 | v1.1.1 |
| 💛 | 日志管理 | - | - | - |
| ⭕ | 灰度 | - | - | - |

## 过滤器

`✅ 已实现过滤器` `⭕ 未实现过滤器` `💛 筹划中`

| 状态 | 过滤器 | 依赖 | 依赖版本 | 脚手架版本 |
| ---- | ---- | ---- | ---- | ---- |
| ✅ | [日期时间](/Filters/Date.md) | dayjs | v1.9.1 | - |
| ✅ | [剩余时间](/Filters/Remainin.md) | - | - | - |
| ✅ | [区分环境的链接](/Filters/Url.md) | process.env | - | - |
| ✅ | [文件大小](/Filters/FileSize.md) | - | - | - |
| ✅ | [数字金额](/Filters/Number.md) | - | - | - |
| ✅ | [浮点型精度](/Filters/Float.md) | lodash | v4.17.20 | - |

## 指令

`✅ 已实现指令` `⭕ 未实现指令` `💛 筹划中` `🔷 第三方指令`

| 状态 | 过滤器 | 依赖 | 依赖版本 | 脚手架版本 |
| ---- | ---- | ---- | ---- | ---- |
| ✅ | [组件权限验证](/Directive/Permission.md) | - | 内置 | - |
| ✅ | [文本复制](/Directive/Copy.md) | clipboard -> m-copy | v2.0.6 | - |
| 🔷 | [快捷键绑定](/Directive/Hotkey.md) | v-hotkey | - | - |
| 🔷 | [滚动指定位置](/Directive/ScrollTo.md) | vue-scrollTo | - | - |
| 🔷 | [图片懒加载](/Directive/Lazyload.md) | vue-lazyload | - | - |
| 🔷 | [获取焦点](/Directive/Focus.md) | vue-focus | - | - |
