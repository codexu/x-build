<template>
  <div class="basic-layout">
    <basic-header />
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" v-if="route.meta.keepAlive"></component>
      </keep-alive>
      <component :is="Component" v-if="!route.meta.keepAlive"></component>
    </router-view>
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

<style>
.basic-layout {
  position: relative;
}
</style>
