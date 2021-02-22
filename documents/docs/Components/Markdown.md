# Markdown

## 安装

```
npm install mavon-editor --save
```

## 引入

```js
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css'
```

## 使用

```vue
<m-markdown />
```

```js
components: {
  'm-markdown': mavonEditor.mavonEditor,
},
```

## 参数

- **value** `String(可选，默认：'')` 初始值
- **ishljs** `Boolean(可选，默认：true)` 代码高亮
- **subfield** `Boolean(可选，默认：true)`  编辑预览是否同屏显示
  - **true** 双栏(编辑预览同屏)
  - **false** 单栏(编辑预览分屏)
- **placeholder** `String(可选，默认：'开始编辑...')` 输入框为空时默认提示文本
- **editable** `Boolean(可选，默认：true)` 是否可以编辑
- **toolbarsFlag** `Boolean(可选，默认：true)` 是否显示工具栏
- **toolbars** `Object(可选，默认：)` 自定义工具栏  
  - **italic: true** 斜体
  - **header: true** 标题
  - **underline: true**  下划线
  - **strikethrough: true**  中划线
  - **mark: true** 标记
  - **superscript: true**  上角标
  - **subscript: true**  下角标
  - **quote: true**  引用
  - **ol: true** 有序列表
  - **ul: true** 无序列表
  - **link: true** 链接
  - **imagelink: true**  图片链接
  - **code: true** code
  - **table: true**  表格
  - **fullscreen: true** 全屏编辑
  - **readmodel: true**  沉浸式阅读
  - **htmlcode: true** 展示html源码
  - **help: true** 帮助
  - **undo: true** 上一步
  - **redo: true** 下一步
  - **trash: true**  清空
  - **save: true** 保存（触发events中的save事件）
  - **navigation: true** 导航目录
  - **alignleft: true**  左对齐
  - **aligncenter: true**  居中
  - **alignright: true** 右对齐
  - **subfield: true** 单双栏模式
  - **preview: true**  预览

## 方法

### change(value, render)
输入时触发，监听编辑器内容变化
- **value** 内容
- **render** HTML内容

### save(value, render)
保存时触发，获取编辑器内容
- **value** 内容
- **render** HTML内容

### [其他方法](https://www.jianshu.com/p/04376d0c9ff1)



