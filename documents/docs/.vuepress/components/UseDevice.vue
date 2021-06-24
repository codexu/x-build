<template>
  <div style="padding-top: 16px">
    <p>当前设备类型：{{ deviceType }}</p>
    <p>当前设备定位(方向)：{{ deviceOrientation }}</p>
    <p>当前操作系统：{{ deviceOs }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useDevice from "../../../../template/src/hooks/useDevice";

export default defineComponent({
  setup() {
    const { deviceType, deviceOrientation, deviceOs } = useDevice();

    return { deviceType, deviceOrientation, deviceOs };
  },
});
</script>

<style scoped>
</style>