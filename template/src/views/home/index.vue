<template>
  <div class="page-home">
    <h1 align="center">
      <svg-logo />
      <i>BUILD FOR VUE3.0</i>
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SvgLogo from './components/SvgLogo.vue';

export default defineComponent({
  name: 'PageHome',
  components: { SvgLogo },
});
</script>
