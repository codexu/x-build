# useClipboard

基于 clipboard@2.0.6 的文本复制 vue 指令。

## 示例

<UseClipboard />

## API

```typescript
import useClipboard from '@/hooks/useClipboard';

const { copyText } = useClipboard();
```

## Result

| 参数     | 说明       | 类型       | 默认值 |
| -------- | ---------- | ---------- | ------ |
| copyText | 复制的内容 | (text: string) => void | -      |
