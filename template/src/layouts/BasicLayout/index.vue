<template>
  <div class="relative">
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

<script lang="ts" setup name="BasicLayout">
import BasicHeader from './components/BasicHeader.vue';
import BasicFooter from './components/BasicFooter.vue';
</script>
