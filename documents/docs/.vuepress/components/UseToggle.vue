<template>
  <div style="padding-top: 16px">
    Effects: {{toggleState}}
    <div style="margin-top: 10px">
      <el-button @click="advancedToggle">Toggle</el-button>
      <el-button @click="setLeft">Set Left</el-button>
      <el-button @click="setRight">Set Right</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElButton } from "element-plus";
import useToggle from "../../../../template/src/hooks/useToggle";

import "element-plus/lib/theme-chalk/index.css";

export default defineComponent({
  components: {
    ElButton,
  },
  setup() {
    const { toggleState, advancedToggle, setLeft, setRight } = useToggle(
      "Left",
      "Right"
    );

    return {
      toggleState,
      advancedToggle,
      setLeft,
      setRight,
    };
  },
});
</script>

<style scoped>
</style>