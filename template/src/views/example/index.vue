<template>
  <div class="page-example">
    <button @click="succeed">成功</button>
     <button @click="errors">失败</button>
     <p v-for="error in errorLogs" :key="error.id">
       {{ error.id }} | {{ error.error.message }} | {{ error.time }}
     </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useLogStore } from '@/store/sys/log';

export default defineComponent({
  name: 'PageExample',
  setup() {
    const logStore = useLogStore();
    const errorLogs = computed(() => logStore.errorLogs);
    function succeed() {
      logStore.notification({ type: 'warning', message: 'aaa' });
    }
    function errors() {
      logStore.notification(new Error('失败了'));
    }
    return {
      succeed,
      errors,
      errorLogs,
    };
  },
});
</script>
