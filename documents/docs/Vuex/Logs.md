# 日志与提醒

`v1.1.13 新增`

@/store/modules/system/log.js

用于错误日志记录和消息提醒。

## state.errorLogs

记录错误日志信息的数组 Array

类型：Object[]
  - time `Date` 创建错误记录的时间
  - error `Error` 错误信息的 Error 对象

## mutations.NOTIFICATION

消息提示，默认情况下在页面的右上角弹出，使用 Ant Design Vue 的 Notification 组件。通常情况下在 vuex 中使用：

```js
commit('system/log/NOTIFICATION', payload, { root: true });
```

payload 参数支持三种类型： `String|Error|Object` 

- String：默认为**成功**消息，将字符串直接展示。
- Error：默认为**失败**消息，将 `Error` 对象的 `message` 直接展示。
- Object：可配置的参数
  - type `String` **[必选]** 消息提示类型，包括 `success`、`info`、`warning`、`error`。
  - message `String` **[必选]** 通知提醒标题。
  - description `String` 通知提醒内容，[参数参考](https://www.antdv.com/components/notification-cn/#API)。

## mutations.ADD_ERROR_LOGS

向 ErrorLogs 列表中加入新的日志信息，并记录时间。

- 类型：Error

## mutations.CLEAR_ERROR_LOGS

清空 ErrorLogs。
