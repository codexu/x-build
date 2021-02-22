# 目录结构

创建成功后，脚手架为你生成了一个完整的开发框架，提供了开发中需要的的各类功能和坑位，下面是整个项目的目录结构：

```
├─.browserslistrc ------------ // 目标浏览器配置
├─.editorconfig -------------- // 编辑器配置
├─.env ----------------------- // 基础环境变量配置
├─.env.development ----------- // 开发模式下的环境变量配置
├─.env.production ------------ // 生产模式下的环境变量配置
├─.eslintrc.js --------------- // ESLint 的配置文件
├─.gitignore ----------------- // git 的忽略配置
├─README.md ------------------ // 项目介绍
├─babel.config.js ------------ // babel 设置
├─package.json --------------- // 项目信息和依赖
├─public --------------------- // 静态资源文件夹，不经过 webpack 处理
│ ├─favicon.ico -------------- // 图鲸logo
│ ├─index.html --------------- // 网站的基础页面模板
│ └─loading-spin.svg 
├─src 
│ ├─App.vue ------------------ // 项目根组件
│ ├─api ---------------------- // 接口
│ │ └─index.js 
│ ├─assets ------------------- // 资源文件夹
│ │ ├─font ------------------- // 字体
│ │ │ └─DIN-Alternate.ttf ---- // 数字字体
│ │ ├─icons ------------------ // 自动注册的 SVG 图标
│ │ │ └─logo.svg ------------- // 公司logo
│ │ └─icons.js --------------- // Ant Design Vue 按需加载图标
│ ├─components 
│ │ ├─index.js --------------- // 组件注册
│ │ ├─m-static --------------- // 静态资源
│ │ └─m-svg ------------------ // 图标
│ ├─directive ---------------- // 指令
│ │ ├─index.js 
│ │ └─permission ------------- // 组件权限指令
│ ├─layouts ------------------ // 布局
│ │ ├─BasicLayout ------------ // 基础布局
│ │ │ ├─components 
│ │ │ │ ├─BasicFooter.vue ---- // 底部
│ │ │ │ └─BasicHeader.vue ---- // 头部
│ │ │ └─index.vue 
│ │ └─BlankLayout.vue -------- // 空白布局
│ ├─libs --------------------- // 通用方法
│ │ ├─filters ---------------- // 全局过滤器
│ │ │ ├─date.js -------------- // 日期
│ │ │ ├─fileSize.js ---------- // 文件大小
│ │ │ ├─float.js ------------- // 浮点型
│ │ │ ├─index.js ------------- // 注册过滤器
│ │ │ ├─number.js ------------ // 数字
│ │ │ ├─remainin.js ---------- // 剩余时间
│ │ │ └─url.js --------------- // 静态资源
│ │ ├─request.js ------------- // Axios 封装
│ │ └─utils ------------------ // 工具函数
│ │   ├─index.js 
│ │   └─title.js ------------- // 标签title
│ ├─main.js ------------------ // 程序主入口
│ ├─router ------------------- // 路由
│ │ ├─index.js 
│ │ ├─permission.js ---------- // 权限配置
│ │ └─routes.js -------------- // 静态路由配置
│ ├─store -------------------- // vuex
│ │ ├─index.js --------------- // vuex 注册主入口
│ │ └─modules 
│ │   └─system --------------- // 系统
│ │     ├─account.js --------- // 用户身份
│ │     ├─fullscreen.js ------ // 全屏
│ │     ├─index.js 
│ │     ├─menu.js ------------ // 菜单管理
│ │     ├─ua.js -------------- // UA信息查询
│ │     └─user.js ------------ // 用户信息管理
│ ├─styles 
│ │ ├─antd-theme.less -------- // Ant design vue 覆盖样式
│ │ ├─global.scss ------------ // 全局样式
│ │ ├─mixins.scss ------------ // 全局mixins
│ │ └─variable.scss ---------- // 全局属性
│ └─views -------------------- // 页面
│   ├─home 
│   │ └─index.vue ------------ // 首页
│   └─system 
│     ├─error 
│     │ └─404.vue ------------ // 404
│     └─login 
│       └─index.vue ---------- // 注册
└─vue.config.js -------------- // vue-cli4  项目配置文件
```

> 属性图生成工具 [folder-explorer](https://github.com/d2-projects/folder-explorer)