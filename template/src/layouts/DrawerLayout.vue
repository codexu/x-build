<template>
  <div class="m-wrapper" :style="styleObj">
    <span class="toggle" @click="toggle">
      <m-svg class="icon" name="m-up" :class="{ half: show !== 1 }" />
    </span>
    <div class="scroll-wrapper" ref="scroll">
      <div class="content-wrapper" :style="halfPadding">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  onMounted,
  onBeforeUnmount,
  watch,
  defineComponent,
  ref,
  nextTick,
} from 'vue';
import { createBScroll } from '@better-scroll/core';
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll.d';

export default defineComponent({
  name: 'DrawerLayout',
  props: {
    height: {
      type: Number,
      default: 250,
    },
    halfHeight: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const show = ref(0);
    const halfPadding = computed(
      () => `padding-bottom: ${
        show.value === 2 ? props.height - props.halfHeight + 20 : 20
      }px;`,
    );
    const styleObj = computed(() => {
      let style = `height: ${props.height}px;`;
      switch (show.value) {
        case 1:
          style += 'transform:translateY(0)';
          break;
        case 2:
          style += `transform:translateY(${
            props.height - props.halfHeight
          }px);`;
          break;
        default:
          style += `transform:translateY(${props.height}px);`;
          break;
      }
      return style;
    });

    let bs: BScrollConstructor | null;
    const scroll = ref<HTMLElement | null>();
    function init() {
      if (scroll.value) {
        bs = createBScroll(scroll.value, {
          probeType: 3,
          click: true,
        });
      }
    }
    function refresh() {
      if (bs) {
        bs.refresh();
      }
    }
    function open() {
      show.value = props.halfHeight ? 2 : 1;
    }
    function close() {
      show.value = 0;
    }
    function toggle() {
      switch (show.value) {
        case 1:
          if (props.halfHeight) {
            show.value = 2;
          } else {
            show.value = 0;
          }
          break;
        case 2:
          show.value = 1;
          break;
        default:
          show.value = 2;
          break;
      }
      emit('change', show.value);
    }
    onMounted(() => {
      init();
    });
    onBeforeUnmount(() => {
      if (bs) {
        bs.destroy();
      }
    });
    watch(halfPadding, async () => {
      await nextTick();
      refresh();
    });

    return {
      show,
      scroll,
      halfPadding,
      styleObj,
      open,
      close,
      toggle,
    };
  },
});
</script>

<style lang="scss" scoped>
.m-wrapper {
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(84, 107, 234, 0.1);
  border-radius: 20px 20px 0px 0px;
  transition: transform 0.5s;
  z-index: 9999;
  .scroll-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .content-wrapper {
      width: 100%;
      padding: 0 20px 20px 20px;
    }
  }
  .toggle {
    display: inline-block;
    width: 100%;
    text-align: center;
    .icon {
      width: 36px;
      &.half {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
