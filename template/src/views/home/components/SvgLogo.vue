<template>
  <SvgIcon name="logo" :fill="iconColorString" />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { random } from 'lodash';

export default defineComponent({
  name: 'SvgLogo',
  setup() {
    const iconColor = ref([0, 0, 0]);
    function colorStep() {
      iconColor.value = [random(0, 255), random(0, 255), random(0, 255)];
      requestAnimationFrame(colorStep);
    }
    const iconColorString = computed(() => `rgb(${iconColor.value.join(',')})`);
    requestAnimationFrame(colorStep);
    return {
      iconColorString,
    };
  },
});
</script>

<style scoped>
.x-svg{
  font-size: 0.8em;
  transform: skewX(-20deg);
}
</style>
