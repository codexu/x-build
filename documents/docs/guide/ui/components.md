# 组件

## 内置全局组件

### 静态资源

自动补全区分环境的静态资源展示组件。

```vue
<static-file src="filePath" type="img" />
```

| 属性     | 说明                                        | 类型    | 默认值  |
| -------- | ------------------------------------------- | ------- | ------- |
| src      | 静态资源的路径                              | string  | -       |
| type     | 文件类型，仅支持 img、video、audio          | 'img', 'video', 'audio' | 'img' |
| autoplay | 如果是 video 类型，可以控制视频是否自动播放 | boolean | true    |

### SVG 图标

首先将下载的 .svg 图标放入 `@/assets/icons` 文件夹下

然后使用组件

```vue
<svg-icon name="filename" />
```

| 属性 | 说明                                     | 类型   | 默认值 |
| ---- | ---------------------------------------- | ------ | ------ |
| name | 放置在 `@/assets/icons` 文件夹下的文件名 | string | -      |
| fill | 颜色填充，使用此项会默认覆盖图标颜色     | string | -      |

#### 样式

- 图标的大小可以通过 width + height 属性改变。
- 通过改变 font-size 属性改变，宽高 = font-zise * 1.4

## 组件库

为了提高开发效率，建议初始化项目时选择一个组件库，脚手架已经对其做好优化。

### Tree Shaking

通过 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 插件，实现了只注册你使用的组件。

理论上 `unplugin-vue-components` 支持很多组件库，但目前脚手架安装时仅提供了 **Ant Design Vue**、**Element Plus**、**Vant**，如果你是用其他组件库可以查看文档，选择对应的 **Resolver** 进行配置。