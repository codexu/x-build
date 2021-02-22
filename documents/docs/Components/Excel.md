# Excel 导入导出

基于 file-saver@2.0.2", xlsx@0.16.8 开发。

## 安装

```
npm install m-excel --save
```

## 引入

### 全局引入（不推荐）

@/components/index.js

```js
import MExcel from 'm-excel';
Vue.use(MExcel);
```

### 局部引入（推荐）

默认引入方式：

```vue {5}
<script>
import { MExcel } from 'm-Excel';

export default {
  components: { MExcel },
};
</script>
```

使用**自定义组件名**：

```vue {6}
<script>
import MExcel from 'm-excel';

export default {
  components: {
    'my-excel': MExcel.component,
  },
};
</script>
```

## 使用方法

使用组件
```vue
<m-excel ref='excel' @success="" accept="" filename="" filetype=""></m-excel>
```

## 参数

- **accept** `String(可选，默认：'.xlsx, .xls, .csv, .txt')` 导入文件类型
- **filename** `String(可选，默认：'excel')` 导出文件名称
- **filetype** `String(可选，默认：'.xlsx')` 导出文件类型

## 事件
### success(excelData)
导入成功后触发 获取导入数据
- excelData `{ header, results }` 返回文件表头数据和全部数据

## 方法
#### append(header, results)
- header `Array` 表头数据
- results `Array` 数据
- 导入数据

使用说明：
```js
this.$refs.excel.append(header, results)
```


## 插槽

### 点击导入插槽

```vue
<template #upload>
  <a-button type="primary">导入<a-button>
</template>
```

### 拖拽导入插槽

```vue
<template #drop>
  <div class="drop">拖拽到此地方导入文件</div>
</template>
```

### 导出插槽

```vue
<template #export>
  <a-button type="primary"> 导出 <a-button>
</template>
```

### 数据插槽

```vue
<template #excelData={excelData}>
  <div>
    {{excelData}}
  </div>
</template>
```
