<template>
  <div style="padding-top: 16px">
    <el-button @click="toggleScreenfull">切换</el-button>
    <el-button @click="openScreenfull">展开</el-button>
    <el-button @click="closeScreenfull">关闭</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElButton } from "element-plus";
import useFullcreenfull from "../hooks/useFullscreen";

import "element-plus/lib/theme-chalk/index.css";

export default defineComponent({
  components: {
    ElButton,
  },
  setup() {
    const {
      toggleScreenfull,
      openScreenfull,
      closeScreenfull,
    } = useFullcreenfull();
    return {
      toggleScreenfull,
      openScreenfull,
      closeScreenfull,
    };
  },
});
</script>

<style scoped>
</style>