<template>
  <div class="page-home">
    <h1 align="center"><i>{{ title }}</i></h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'PageHome',
  setup() {
    const store = useStore();
    const title = computed(() => store.state.home.title);

    setTimeout(() => {
      store.commit('home/SET_TITLE', 'Welcome to use X-BUILD!');
    }, 2000);

    return {
      title,
    };
  },
});
</script>
