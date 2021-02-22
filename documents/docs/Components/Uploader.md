# 大文件上传

基于 [simple-uploader.js@0.5.5](https://github.com/simple-uploader/Uploader) 封装的大文件上传组件，支持切片上传、断点续传、秒传功能。

## 安装

```
npm install m-uploader --save
```

## 引入

### 全局引入（不推荐）

@/components/index.js

```js
import MUploader from 'm-uploader';
Vue.use(MUploader);
```

### 局部引入（推荐）

默认引入方式：

```vue {5}
<script>
import { MUploader } from 'm-uploader';

export default {
  components: { MUploader },
};
</script>
```

使用**自定义组件名**：

```vue {6}
<script>
import MUploader from 'm-uploader';

export default {
  components: {
    'my-uploader': MUploader.component,
  },
};
</script>
```

## 使用方法

引入组件：

使用组件
```vue
<m-uploader :baseUrl=""></m-uploader>
```

## 参数

- **baseUrl** `String(必选)` 上传接口前缀
- **type** `String(可选，默认：'browse')` 文件选择方式
  - **browse** 选择文件
  - **drop** 拖拽文件

- **options** `Object(可选)` 由于做了高度封装，所以部分参数不一致或禁用：
  - **target** 禁用。
  - **method** 后端默认使用 multipart，不可变。
  - **chunkSize** `Number` 分片大小，默认 5MB(5 * 1024 * 1024)。最后一个上传块的大小是可能是大于等于1倍的这个值但是小于两倍的这个值大小。
  - 更多参考 [simple-uploader.js 配置项](https://github.com/simple-uploader/Uploader#uploader)

## 插槽
  
### 默认插槽

```vue
<template>
  <m-uploader :baseUrl="baseUrl">
    <a-button type="primary">选择文件</a-button>
  </m-uploader>
</template>
```

### upload插槽

```vue
<template>
  <m-uploader :baseUrl="baseUrl">
    <template #upload>
      <a-button type="primary">上传</a-button>
    </template>
  </m-uploader>
</template>
```

### files插槽

```vue
<template>
  <m-uploader :baseUrl="baseUrl">
    <template #files="{ fileList }"></template>
  </m-uploader>
</template>
```

## 文件列表

通过 files 插槽可以获取到文件列表数组 - **fileList** `File[]`。

- **File** `Object` 已选择的文件参数，新增文件参数：
  - **md5** `Number` 选择后的文件会自动开始 MD5 计算，此项表示为计算进度(0-100)。
  - **state** `Number` 上传状态
    - 0: 等待上传，选择文件后的默认状态。
    - 1: 正在上传，文件是按顺序单个上传。
    - 2: 上传成功，文件触发 compose 时即触发。
    - 3: 上传失败
    - 4: 秒传，当后端返回数据 isFileUpload 为 true 即为秒传。
  - **uniqueIdentifier** `String` 文件唯一标示，通过 MD5 计算。
  - 查看更多 [simple-uploader.js 文件属性](https://github.com/simple-uploader/Uploader#uploaderfile)
  - 查看更多 [simple-uploader.js 文件方法](https://github.com/simple-uploader/Uploader#methods-1)

## 参考用例

```vue
<template>
  <div class="home">
    <!-- <a-button type="link" @click="$store.dispatch('system/account/logout')">退出登陆</a-button> -->
    <Uploader :baseUrl="baseUrl">
      <a-button type="primary">选择文件</a-button>
      <template #upload>
        <a-button type="primary">上传</a-button>
      </template>
      <template #files="{ fileList }">
        <a-table size="small" :columns="columns" :data-source="fileList" rowKey="name">
          <div slot="name" slot-scope="name">{{ name }}</div>
          <div slot="md5" slot-scope="md5, { uniqueIdentifier }">
            <span v-if="md5 === 100">{{ uniqueIdentifier }}</span>
            <a-progress v-else :percent="md5" />
          </div>
          <div slot="state" slot-scope="state">
            <a-tag :color="computedStateColor(state)">
              {{ computedState(state) }}
            </a-tag>
          </div>
          <div slot="averageSpeed" slot-scope="averageSpeed">
            <span>{{ averageSpeed | fileSize }}/s</span>
          </div>
          <div slot="size" slot-scope="size, { _prevUploadedSize, state }">
            <a-progress :percent="state === 4 ? 100 : computedProgress(_prevUploadedSize, size)" />
          </div>
          <div slot="timeRemaining" slot-scope="timeRemaining, file">
            <span>{{ file.timeRemaining() | remainin }}</span>
          </div>
        </a-table>
      </template>
    </Uploader>
  </div>
</template>

<script>
import { round } from 'lodash';
import Uploader from '@/components/mw-uploader/index.vue';

export default {
  name: 'Home',
  data() {
    return {
      baseUrl: 'http://192.168.0.102:1111/oss/network-disk',
      columns: [
        {
          title: '文件名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'MD5',
          dataIndex: 'md5',
          key: 'md5',
          scopedSlots: { customRender: 'md5' },
        },
        {
          title: '上传状态',
          dataIndex: 'state',
          key: 'state',
          scopedSlots: { customRender: 'state' },
        },
        {
          title: '上传进度',
          dataIndex: 'size',
          key: 'size',
          scopedSlots: { customRender: 'size' },
        },
        {
          title: '平均速度',
          dataIndex: 'averageSpeed',
          key: 'averageSpeed',
          scopedSlots: { customRender: 'averageSpeed' },
        },
        {
          title: '剩余时间',
          dataIndex: 'timeRemaining',
          key: 'timeRemaining',
          scopedSlots: { customRender: 'timeRemaining' },
        },
      ],
    };
  },
  components: {
    Uploader,
  },
  methods: {
    computedState(state) {
      switch (state) {
        case 1:
          return '正在上传';
        case 2:
          return '上传成功';
        case 3:
          return '上传失败';
        case 4:
          return '秒传';
        default:
          return '等待上传';
      }
    },
    computedStateColor(state) {
      switch (state) {
        case 1:
          return 'orange';
        case 2:
          return 'green';
        case 3:
          return 'red';
        case 4:
          return 'cyan';
        default:
          return 'blue';
      }
    },
    computedProgress(current, size) {
      return round((current / size) * 100);
    },
  },
};
</script>
```
