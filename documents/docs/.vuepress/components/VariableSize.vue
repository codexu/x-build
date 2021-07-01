<template>
  <el-tabs v-model="value">
    <el-tab-pane label="scss" name="scss">
      <ul>
        <li class="head">
          <div>说明</div>
          <div>值</div>
          <div>变量</div>
          <span>操作</span>
        </li>
        <li
          class="size"
          v-for="(item, index) in sizeDataScss"
          :key="index"
          :style="{ 'font-size': item.value }"
        >
          <div>{{ item.explain }}</div>
          <div>{{ item.value }}</div>
          <div>{{ item.variable }}</div>
          <span><a @click="copyText(item.variable)">复制</a></span>
        </li>
        <br />
        <li class="title-h1">
          <h1>标题 H1</h1>
          <h1>26px</h1>
          <h1>$heading-1-size</h1>
          <span><a @click="copyText('$heading-1-size')">复制</a></span>
        </li>
        <li class="title-h2">
          <h2>标题 H2</h2>
          <h2>24px</h2>
          <h2>$heading-2-size</h2>
          <span><a @click="copyText('$heading-2-size')">复制</a></span>
        </li>
        <li class="title-h3">
          <h3>标题 H3</h3>
          <h3>22px</h3>
          <h3>$heading-3-size</h3>
          <span><a @click="copyText('$heading-3-size')">复制</a></span>
        </li>
        <li class="title-h4">
          <h4>标题 H4</h4>
          <h4>20px</h4>
          <h4>$heading-4-size</h4>
          <span><a @click="copyText('$heading-4-size')">复制</a></span>
        </li>
        <li class="title-h5">
          <h5>标题 H5</h5>
          <h5>18px</h5>
          <h5>$heading-5-size</h5>
          <span><a @click="copyText('$heading-5-size')">复制</a></span>
        </li>
        <li class="title-h6">
          <h6>标题 H6</h6>
          <h6>16px</h6>
          <h6>$heading-6-size</h6>
          <span><a @click="copyText('$heading-6-size')">复制</a></span>
        </li>
        <br />
        <li>
          <div>行高</div>
          <div>2</div>
          <div>$line-height-base</div>
          <span><a @click="copyText('$line-height-base')">复制</a></span>
        </li>
        <li>
          <div>字间距</div>
          <div>2</div>
          <div>$letter-space-base</div>
          <span><a @click="copyText('$letter-space-base')">复制</a></span>
        </li>
        <li>
          <div>默认字体</div>
          <div>Microsoft YaHei,PingFang SC</div>
          <div>$font-family-base</div>
          <span><a @click="copyText('$font-family-base')">复制</a></span>
        </li>
      </ul>
    </el-tab-pane>
    <el-tab-pane label="less" name="less">
      <ul>
        <li class="head">
          <div>说明</div>
          <div>值</div>
          <div>变量</div>
          <span>操作</span>
        </li>
        <li
          class="size"
          v-for="(item, index) in sizeDataLess"
          :key="index"
          :style="{ 'font-size': item.value }"
        >
          <div>{{ item.explain }}</div>
          <div>{{ item.value }}</div>
          <div>{{ item.variable }}</div>
          <span><a @click="copyText(item.variable)">复制</a></span>
        </li>
        <br />
        <li class="title-h1">
          <h1>标题 H1</h1>
          <h1>26px</h1>
          <h1>@heading-1-size</h1>
          <span><a @click="copyText('@heading-1-size')">复制</a></span>
        </li>
        <li class="title-h2">
          <h2>标题 H2</h2>
          <h2>24px</h2>
          <h2>@heading-2-size</h2>
          <span><a @click="copyText('@heading-2-size')">复制</a></span>
        </li>
        <li class="title-h3">
          <h3>标题 H3</h3>
          <h3>22px</h3>
          <h3>@heading-3-size</h3>
          <span><a @click="copyText('@heading-3-size')">复制</a></span>
        </li>
        <li class="title-h4">
          <h4>标题 H4</h4>
          <h4>20px</h4>
          <h4>@heading-4-size</h4>
          <span><a @click="copyText('@heading-4-size')">复制</a></span>
        </li>
        <li class="title-h5">
          <h5>标题 H5</h5>
          <h5>18px</h5>
          <h5>@heading-5-size</h5>
          <span><a @click="copyText('@heading-5-size')">复制</a></span>
        </li>
        <li class="title-h6">
          <h6>标题 H6</h6>
          <h6>16px</h6>
          <h6>@heading-6-size</h6>
          <span><a @click="copyText('@heading-6-size')">复制</a></span>
        </li>
        <br />
        <li>
          <div>行高</div>
          <div>2</div>
          <div>@line-height-base</div>
          <span><a @click="copyText('@line-height-base')">复制</a></span>
        </li>
        <li>
          <div>字间距</div>
          <div>2</div>
          <div>@letter-space-base</div>
          <span><a @click="copyText('@letter-space-base')">复制</a></span>
        </li>
        <li>
          <div>默认字体</div>
          <div>Microsoft YaHei,PingFang SC</div>
          <div>@font-family-base</div>
          <span><a @click="copyText('@font-family-base')">复制</a></span>
        </li>
      </ul>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import useClipboard from '../hooks/useClipboard';
import { ElTabs, ElTabPane } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
export default defineComponent({
  components: { ElTabs, ElTabPane },
  setup() {
    let { copyText } = useClipboard();
    let value = ref('scss');
    const sizeDataScss = reactive([
      { explain: '辅助文字', value: '12px', variable: '$font-size-sm' },
      { explain: '正文', value: '14px', variable: '$font-size-base' },
      { explain: '大号文字', value: '16px', variable: '$font-size-base' },
    ]);
    const sizeDataLess = reactive([
      { explain: '辅助文字', value: '12px', variable: '@font-size-sm' },
      { explain: '正文', value: '14px', variable: '@font-size-base' },
      { explain: '大号文字', value: '16px', variable: '@font-size-base' },
    ]);
    return { sizeDataScss, sizeDataLess, value, copyText };
  },
});
</script>

<style scoped lang="scss">
$heading-1-size: 26px; // 标题1
$heading-2-size: 24px; // 标题2
$heading-3-size: 22px; // 标题3
$heading-4-size: 20px; // 标题4
$heading-5-size: 18px; // 标题5
$heading-6-size: 16px; // 标题6
ul {
  list-style: none;
  li {
    display: flex;
    padding: 15px 0;
    font-size: 14px;

    div,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      flex: 1;
      margin: 0;
      border: 0;
    }
    span {
      font-size: 14px;
      display: flex;
      align-items: center;
      a {
        cursor: pointer;
      }
    }
    &.head {
      font-size: 16px;
      font-weight: bold;
    }
  }
  h1 {
    font-size: $heading-1-size;
  }
  h2 {
    font-size: $heading-2-size;
  }
  h3 {
    font-size: $heading-3-size;
  }
  h4 {
    font-size: $heading-4-size;
  }
  h5 {
    font-size: $heading-5-size;
  }
  h6 {
    font-size: $heading-6-size;
  }
}
::v-deep .el-tabs__header {
  margin: 0;
   .el-tabs__item {
  &:hover {
    color: var(--c-text-accent);
  }
  &.is-active {
    color: var(--c-text-accent);
  }
}
}


::v-deep .el-tabs__active-bar {
  background-color: var(--c-text-accent);
}
</style>