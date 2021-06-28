<template>
  <div style="padding-top: 16px">
    <ul>
      <li class="head">
        <div>说明</div>
        <div>值</div>
        <div>变量</div>
        <span>操作</span>
      </li>
      <li
        class="size"
        v-for="(item, index) in colorData"
        :key="index"
        :style="{ color: item.value }"
        :class="item.name === '标题' ? 'colors' : ''"
      >
        <div>{{ item.explain }}</div>
        <div>{{ item.value }}</div>
        <div>{{ item.variable }}</div>
        <span><a @click="copyText(item.variable)">复制</a></span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import useClipboard from "../../../../template/src/hooks/useClipboard";

export default defineComponent({
  setup() {
    let { copyText } = useClipboard();
    const colorData = reactive([
      { explain: "主色调", value: "#1BA2FF", variable: "$primary-color" },
      { explain: "成功", value: "#24CBB2", variable: "$success-color" },
      { explain: "失败", value: "#DF0140", variable: "$error-color" },
      { explain: "警告", value: "#FAE053", variable: "$warning-color" },
      { explain: "正文", value: "#051724", variable: "$text-color" },
      { explain: "标题", value: "$text-color", variable: "$title-color" },
      { explain: "注释", value: "#CDD0D3", variable: "$notes-color" },
      { explain: "数字", value: "#1BA2FF", variable: "$number-color" },
    ]);
    return { colorData, copyText };
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
    color: #051724;
    span {
      a {
        cursor: pointer;
      }
    }
    div {
      flex: 1;
    }

    &.head {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>