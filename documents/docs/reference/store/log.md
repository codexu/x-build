# 日志管理

`@/store/sys/log.ts`

用于系统日志的 store。

## API

```javascript
import useMenuStore from '@/store/sys/log';

const menuStore = useMenuStore();
```

## State

| 属性      | 说明             | 类型       | 默认值 |
| --------- | ---------------- | ---------- | ------ |
| errorLogs | 错误日志信息列表 | ErrorLog[] | -      |

```typescript
interface ErrorLog {
  id: string;
  time: Date;
  error: Error;
}
```

## Actions

### addErrorLogs

向 ErrorLogs 列表中加入新的日志信息，并记录时间。

```typescript
menuStore.addErrorLogs(err: Error);
```

### notification

提供一个方便的消息提示功能，支持三种类型：

- string: 直接输出成功消息。
- Error: 输出一条错误的消息。
- INotificationOptions: 基于 Element-Plus [Notification](https://element-plus.gitee.io/#/zh-CN/component/notification#options) 组件配置类型。

```typescript
menuStore.notification(message: string | Error | INotificationOptions);
```
