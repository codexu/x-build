<template>
  <div class="page-example">
    {{ menu }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useMenuStore } from '@/store/sys/menu';

export default defineComponent({
  name: 'PageExample',
  setup() {
    const menuStore = useMenuStore();
    const menu = computed(() => menuStore.menu);
    return { menu };
  },
});
</script>
