# useToggle

## 示例

<UseToggle />

## API

```typescript
import UseToggle from '@/hooks/UseToggle';

const {
      toggleState, advancedToggle, setLeft, setRight,
    } = UseToggle(defaultValue: any, reverseValue: any);
```

## Params

| 参数         | 说明                     | 类型 | 默认值 |
| ------------ | ------------------------ | ---- | ------ |
| defaultValue | 可选项，传入默认的状态值 | any  | -      |
| reverseValue | 可选项，传入相反的状态值 | any  | -      |

## Result

| 参数           | 说明               | 类型                 | 默认值 |
| -------------- | ------------------ | -------------------- | ------ |
| toggleState    | 状态值             | boolean              | false  |
| advancedToggle | 触发状态更改的函数 | () => void           | -      |
| setLeft        | 设置为默认值       | (value: any) => void | -      |
| setRight       | 设置为相反值       | (value: any) => void | -      |
