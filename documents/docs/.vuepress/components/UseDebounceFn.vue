<template>
  <div style="padding-top: 16px">
    Effects: {{ num }}
    <el-button @click="debounceFn" style="margin-left: 10px">点击</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ElButton } from "element-plus";
import useDebounceFn from "../hooks/useDebounceFn";

import "element-plus/lib/theme-chalk/index.css";

export default defineComponent({
  components: {
    ElButton,
  },
  setup() {
    let num = ref(1)
    const fun = () => {
      num.value += 1
    };
    const debounceFn = useDebounceFn(fun);

    return {
      num,
      debounceFn,
    };
  },
});
</script>

<style scoped>
</style>