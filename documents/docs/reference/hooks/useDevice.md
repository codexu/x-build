# useDevice

用于PC、移动等适配

## API

```typescript
import useDevice from '@/hooks/useDevice';

const { deviceType, deviceOrientation, deviceOs } = useDevice();
```

| 参数              | 说明               | 类型                  | 默认值 |
| ----------------- | ------------------ | --------------------- | ------ |
| deviceType        | 当前设备类型       | `<DeviceType>`        | -      |
| deviceOrientation | 当前设备定位(方向) | `<DeviceOrientation>` | -      |
| deviceOs          | 操作系统           | `<DeviceOs>`          | -      |
