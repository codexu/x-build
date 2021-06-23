# useLoading

基于 element-plus Loading 的 Hook，可以方便控制页面中整体或局部的 loading 效果。

## API

```javascript
import useLoading from '@/hooks/useLoading';

const { loading, loadingTarget, openLoading, closeLoading } = useLoading(
  options?: ILoadingOptions,
);
```

## Params

### options

| 参数        | 说明                         | 类型     | 默认值             |
| ----------- | ---------------------------- | -------- | ------------------ |
| text        | 显示在加载图标下方的加载文案 | `string` | -                  |
| spinner     | 自定义加载图标类名           | `string` | -                  |
| background  | 遮罩背景色                   | `string` | hsla(0,0%,100%,.9) |
| customClass | Loading 的自定义类名         | `string` | -                  |

## Result

**loadingTarget** 如果不赋值，则全屏显示 loading，请确保使用场景。

| 参数          | 说明                         | 类型                 | 默认值 |
| ------------- | ---------------------------- | -------------------- | ------ |
| loading       | 加载中的状态                 | `boolean`            | false  |
| loadingTarget | 需要触发 loading 的 Dom 节点 | `HTMLElement` `null` | -      |
| openLoading   | 开启 loading                 | `() => void`         | -      |
| closeLoading  | 关闭 loading                 | `() => void`         | -      |
