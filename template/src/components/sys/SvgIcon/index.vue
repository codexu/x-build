<template>
  <svg class="x-svg" aria-hidden="true">
    <use
      :xlink:href="iconName"
      :fill="fill">
    </use>
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: { type: String, default: '' },
    fill: { type: String, default: '#000' },
  },
  setup(props) {
    const iconName = computed(() => `#${props.name}`);
    return {
      iconName,
    };
  },
});
</script>

<style lang="scss" scoped>
.x-svg {
  width: 1em;
  height: 1em;
  line-height: 1em;
  fill: currentColor;
}
</style>
