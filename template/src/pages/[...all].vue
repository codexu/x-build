<script lang="ts" setup name="404">
import { ref } from 'vue';
import router from '@/router';

const countdown = ref(3);

const countdownInterval = setInterval(() => {
  countdown.value -= 1;
  if (countdown.value === 0) {
    router.push('/');
    clearInterval(countdownInterval);
  }
}, 1000);
</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <h1 class="text-3xl">404</h1>
    <p>{{ countdown }} seconds after the jump...</p>
  </div>
</template>
