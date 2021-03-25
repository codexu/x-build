<template>
  <div class="page-home">
    <h1 align="center">
      <x-logo />
      <i>BUILD FOR VUE3.0</i>
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import XLogo from './components/XLogo.vue';

export default defineComponent({
  name: 'PageHome',
  components: { XLogo },
});
</script>
