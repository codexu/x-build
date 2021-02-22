# UA 信息

@/store/modules/system/ua.js

获取浏览器UA(userAgent)信息。

::: tip 什么是 UA 信息？
浏览器标识（baiUA）可以使得服务器du能够识别客户使用的操作系zhi统及版本、CPU 类型、浏dao览器及版本、浏览器渲染引擎、浏览器语言、浏览器插件，从而判断用户是使用电脑浏览还是手机浏览，让网页作出自动的适应。
:::

示例：

```bash
您的浏览器UA(userAgent)信息为：
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
AppleWebKit/537.36 (KHTML, like Gecko)
Chrome/85.0.4183.102 Safari/537.36
您的屏幕分辨率为：
1920×1080
```

## state.ua

用户 UA 信息。

- 类型：Object

## mutations.SET_UA

记录用户 UA 信息。
