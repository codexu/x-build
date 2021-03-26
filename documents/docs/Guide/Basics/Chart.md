# 图表

图表默认安装了 ECharts。

## 按需加载

ECharts 支持 webpack 引入，全部引入体积很大，必须按照功能按需引入：

```js
// 按需引入 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
```

[webpack 中使用 ECharts 文档](https://echarts.apache.org/zh/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)

## 初始化

ECharts 初始化必须绑定 dom，所以我们只能在 vue 的 mounted 生命周期里进行初始化。

```js
mounted() {
  this.initCharts();
},
methods: {
  initCharts() {
    this.chart = echarts.init(this.$el);
    this.setOptions();
  }
},
```

## 更新数据

通过 watch 来触发 setOptions 方法

```js
//第一种 watch options变化 利用vue的深度 watcher，options 一有变化就重新setOption
watch: {
  options: {
    handler(options) {
      this.chart.setOption(this.options)
    },
    deep: true
  },
}
//第二种 只watch 数据的变化 只有数据变化时触发ECharts
watch: {
  seriesData(val) {
    this.setOptions({series:val})
  }
}
```

## 图表自适应

ECharts 本身并不是自适应的，当你父级容器的宽度发生变化的时候需要手动调用它的 .resize() 方法。 所有比如 el-tab，你可以监听 change 事件，当变化时找到这个图表之后调用它的 .resize() 方法。

```js
this.$nextTick(() => {
  this.$refs.Chart.resize();
}
```

## 社区 Demo

[gallery](https://gallery.echartsjs.com/explore.html)。