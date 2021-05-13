<template>
  <div class="page-home">
    <p align="center">{{ title }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import { MutationTypes } from './store';

export default defineComponent({
  name: 'PageHome',
  setup() {
    const store = useStore();
    const title = computed(() => store.state.example.title);
    store.commit(MutationTypes.setTitle, 'Welcome to use X-BUILD!');

    return { title };
  },
});
</script>
