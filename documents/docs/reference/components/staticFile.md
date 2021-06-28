# 静态资源

自动补全区分环境的静态资源展示组件。

## 使用方法

全局组件，默认已加载。

```vue
<static-file src="filePath" type="img" />
```

## 参数

| 属性     | 说明                                        | 类型    | 默认值  |
| -------- | ------------------------------------------- | ------- | ------- |
| src      | 静态资源的路径                              | string  | -       |
| type     | 文件类型，仅支持 img、video、audio          | 'img', 'video', 'audio' | 'img' |
| autoplay | 如果是 video 类型，可以控制视频是否自动播放 | boolean | true    |
