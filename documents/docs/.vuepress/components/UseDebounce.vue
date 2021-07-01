<template>
  <div style="padding-top: 16px">
    Effects: {{ debounce }}
    <el-button @click="onClick" style="margin-left: 10px">点击</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElButton } from "element-plus";
import useDebounce from "../hooks/useDebounce";

import "element-plus/lib/theme-chalk/index.css";

export default defineComponent({
  components: {
    ElButton,
  },
  setup() {
    let debounce = useDebounce(1);
    const onClick = () => {
      debounce.value += 1;
    };
    return {
      debounce,
      onClick,
    };
  },
});
</script>

<style scoped>
</style>