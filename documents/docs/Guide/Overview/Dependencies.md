# 依赖项

`✅ 集成在模板中` `❎ 未集成于模板中` `⭕ 不建议使用` `💛 待开发`

## 框架

- ✅ vue`@2.6.11`
- ✅ vue-router`@3.2.0`
- ✅ vuex`@3.4.0`
::: details 为什么不使用 Vue3.0
- 存在迁移成本
- 生态环境不健全
- 官方库和工具大多数处于 beta 状态
- 多数新特性处于 实验性 状态
:::

- 不使用 Typescript

## 生产环境依赖

  ### 组件库

  - ✅ ant-design-vue`@1.6.5`
  - ⭕ ElementUI
  ::: details 为什么选择 ant-design-vue
  - AntD Vue 内置功能更多
  - AntD Vue 率先支持 Vue3
  - AntD Vue 与 React 版本功能一致，方便上手React框架
  - ElementUI 长期未更新，累计 1.6k issues 未处理
  :::

  ### 图表可视化

  - ✅ ECharts`@4.9.0`
  - ❎ D3.js

  ### 工具集

  - ✅ lodash`@4.17.20`
  - axios `网络请求库`
  - ✅ store`@2.0.12`
  - 💛 dayjs `日期处理库`
  - better-scroll

## 开发环境依赖

  ### CSS预处理器

  - ✅ scss`@1.26.5` (dart-sass)
  - ❎ less `自定义 Ant Design Vue 需要使用`

  ### 代码规范

  - eslint`@6.7.2` ([Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

  ### 编译器

  - Babel @vue/cli-plugin-babel`@4.5.0`
