<template>
  <div class="page-example">
    <button @click="succeed">成功</button>
     <button @click="errors">失败</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useLogStore } from '@/store/sys/log';

export default defineComponent({
  name: 'PageExample',
  setup() {
    const logStore = useLogStore();
    function succeed() {
      logStore.notification({ type: 'warning', message: 'aaa' });
    }
    function errors() {
      logStore.notification(Error('失败了'));
    }
    return {
      succeed,
      errors,
    };
  },
});
</script>
