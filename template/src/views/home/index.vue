<template>
  <div class="page-home">
    <h1 align="center"><i>{{ title }}</i></h1>
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
    const title = computed(() => store.state.home.title);
    store.commit(MutationTypes.setTitle, 'Welcome to use X-BUILD!');

    return {
      title,
    };
  },
});
</script>
