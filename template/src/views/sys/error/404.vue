<template>
  <div class="page-error-404">
    <h1>404</h1>
    <p>{{ countdown }} seconds after the jump...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import router from '@/router';

export default defineComponent({
  name: 'PageError404',
  setup() {
    const countdown = ref(3);

    const countdownInterval = setInterval(() => {
      countdown.value -= 1;
      if (countdown.value === 0) {
        clearInterval(countdownInterval);
        router.push('/');
      }
    }, 1000);

    return { countdown };
  },
});
</script>
