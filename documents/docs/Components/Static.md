# 静态资源加载

自动补全区分环境的静态资源展示组件，支持 img、video、audio 标签。

## 使用方法

全局组件，默认已加载。

```vue
<m-static src="svg文件名" type="img" />
```

## 参数

- src
  - 类型：String
  - 默认值：''
  - 说明：静态资源的路径
- type
  - 类型：String ['img', 'video', 'audio']
  - 默认值：'img'
  - 说明：静态资源类型
