<template>
  <div class="basic-layout">
    <basic-header />
    <router-view />
    <basic-footer />
  </div>
</template>

<script>
import BasicHeader from './components/BasicHeader.vue';
import BasicFooter from './components/BasicFooter.vue';

export default {
  name: 'BasicLayout',
  components: { BasicHeader, BasicFooter },
};
</script>

<style lang="scss" scoped>
.basic-layout{
  position: relative;
}
</style>
