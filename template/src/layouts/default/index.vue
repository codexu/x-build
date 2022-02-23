<template>
  <div class="relative">
    <Default-header />
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" v-if="route.meta.keepAlive"></component>
      </keep-alive>
      <component :is="Component" v-if="!route.meta.keepAlive"></component>
    </router-view>
    <Default-footer />
  </div>
</template>

<script lang="ts" setup name="DefaultLayout">
import DefaultHeader from './components/DefaultHeader.vue';
import DefaultFooter from './components/DefaultFooter.vue';
</script>
