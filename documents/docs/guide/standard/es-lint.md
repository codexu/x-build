# ESLint

不管是多人合作还是个人项目，代码规范都是很重要的。这样做不仅可以很大程度地避免基本语法错误，也保证了代码的可读性。

## Airbnb 规范

了解 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)，[中文参考](https://github.com/lin-123/javascript)。

::: tip 为什么选择 Airbnb 规范

- 最严谨的 ESlint 配置
- Github 超过 100k star
:::

## 手动校验代码

```bash:no-line-numbers
npm run lint
```

## 配置

项目的 eslint 配置位于根目录下 .eslintrc.js内，可以根据团队自行修改代码规范。

## 跳过验证

一般情况下，可以通过**注释**的方式取消校验。

```js
/* eslint-disable */
...
/* eslint-enable */
```

指定的规则启用或禁用警告:

```js
/* eslint-disable no-alert, no-console */
...
/* eslint-enable no-alert, no-console */
```

单行跳过验证：

```js
// eslint-disable-next-line
```
