# useFullscreen

## API

```typescript
import useFullscreen from '@/hooks/useFullscreen';

const { 
  screenfullActive,
  toggleScreenfull,
  openScreenfull,
  closeScreenfull
  } = useFullscreen();
```

## Result

| 参数             | 说明           | 类型       | 默认值 |
| ---------------- | -------------- | ---------- | ------ |
| screenfullActive | 是否全屏的状态 | boolean    | false  |
| toggleScreenfull | 切换全屏       | () => void | -      |
| openScreenfull   | 开启全屏       | () => void | -      |
| closeScreenfull  | 关闭全屏       | () => void | -      |
