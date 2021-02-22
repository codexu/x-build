<template>
  <svg class="mw-svg" aria-hidden="true">
    <use :xlink:href="iconName" :fill="fill"></use>
  </svg>
</template>
<script>
export default {
  name: 'm-svg',
  props: {
    name: { type: String, default: '' },
    fill: { type: String, default: '#000' },
  },
  computed: {
    iconName() {
      return `#${this.name}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.mw-svg {
  width: 1.4em;
  height: 1.4em;
  fill: currentColor;
  overflow: hidden;
  line-height: 1em;
  display: inline-block;
  position: relative;
  top: 4px;
}
</style>
