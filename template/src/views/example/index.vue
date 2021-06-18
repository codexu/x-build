<template>
  <div class="page-example">
    {{ listen }}
    <button @click="screen">{{ activeText }}</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useFullscreenStore } from '@/store/sys/fullscreen';

export default defineComponent({
  name: 'PageExample',
  setup() {
    const fullscreenStore = useFullscreenStore();
    const active = computed(() => (fullscreenStore.active));
    const activeText = computed(() => (active.value ? '收起' : '展开'));
    function screen() {
      fullscreenStore.toggle();
    }
    return {
      activeText,
      screen,
    };
  },
});
</script>
