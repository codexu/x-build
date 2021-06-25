<template>
  <div style="padding-top: 16px">
    Effects:
    <el-switch v-model="boolenState"></el-switch>
    <div style="margin-top: 10px">
      <el-button @click="toggleBoolen">Toggle</el-button>
      <el-button @click="openBoolean">Toggle True</el-button>
      <el-button @click="closeBoolean">Toggle False</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElButton, ElSwitch } from "element-plus";
import useBoolean from "../../../../template/src/hooks/useBoolean";

import "element-plus/lib/theme-chalk/index.css";

export default defineComponent({
  components: {
    ElSwitch,
    ElButton,
  },
  setup() {
    const { booleanState, toggleBoolean, setTrue, setFalse, } =
      useBoolean(true);

    return {
       booleanState, toggleBoolean, setTrue, setFalse,
    };
  },
});
</script>

<style scoped>
</style>