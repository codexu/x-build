<script lang="ts" setup>
import { ref } from 'vue';
import router from '@/router';

const countdown = ref(3);

const countdownInterval = setInterval(() => {
  countdown.value -= 1;
  if (countdown.value === 0) {
    clearInterval(countdownInterval);
    router.push('/');
  }
}, 1000);
</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <h1 class="text-3xl">404</h1>
    <p>{{ countdown }} seconds after the jump...</p>
  </div>
</template>
