# useBoolean

## 示例

<UseBoolean />

## API

```typescript
import useBoolean from '@/hooks/useBoolean';

const {
      booleanState, toggleBoolean, setTrue, setFalse,
    } = useBoolean(defaultValue?: boolean);
```

## Params

| 参数         | 说明                     | 类型    | 默认值 |
| ------------ | ------------------------ | ------- | ------ |
| defaultValue | 可选项，传入默认的状态值 | boolean | false  |

## Result

| 参数         | 说明               | 类型       | 默认值 |
| ------------ | ------------------ | ---------- | ------ |
| boolenState  | 状态值             | boolean    | false  |
| toggleBoolen | 触发状态更改的函数 | () => void | -      |
| setTrue      | 设置状态值为 true  | () => void | -      |
| setFalse     | 设置状态值为 false | () => void | -      |
