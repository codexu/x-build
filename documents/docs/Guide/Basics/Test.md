# 测试框架

测试框架基于 [Jest](https://www.jestjs.cn/docs//getting-started)，通过 `vue add @vue/unit-jest` 指令已经集成于脚手架中，不需要任何配置即可使用。

## 配置

[Jest](https://www.jestjs.cn/docs//getting-started) 可以通过项目根目录中的 jest.config.js 进行配置。

## 单元测试

单元测试主要包含断言、测试框架、测试用例、测试覆盖率、mock、持续集成等几个方面，由于Node的特殊性，它还会加入异步代码测试和私有方法的测试这两个部分。

所有的测试用例均在 `/test/unit` 路径下，不同的模块应该放置在不同的目录下，例如 `filter`、`components` 等。

## 组件测试

组件测试基于 [Vue Test Utils](https://vue-test-utils.vuejs.org/zh/) 它是官方的单元测试实用工具库。