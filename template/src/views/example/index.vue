<template>
  <div class="page-example">
    {{type}}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useDeviceStore } from '@/store/sys/device';

export default defineComponent({
  name: 'PageExample',
  setup() {
    const deviceStore = useDeviceStore();
    const type = computed(() => deviceStore.type);
    return {
      type,
    };
  },
});
</script>
