<template>
  <div class="page-test">
    <h1 align="center"><i>X-BUILD FOR VUE3.0 TEST PAGE</i></h1>
    <el-button @click="setScreenfull">全屏</el-button>
    <el-button @click="setScreenfullClose">关闭全屏</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'PageHome',
  setup() {
    const store = useStore();

    const setScreenfull = () => {
      store.commit('screenfull/SET_ACTIVE', true);
    };

    const setScreenfullClose = () => {
      store.commit('screenfull/SET_ACTIVE', false);
      store.commit('menus/SET_SEARCH_KEYWORD', '首页');
    };

    const routesPool = computed(() => store.getters['menus/search']);

    return {
      setScreenfull,
      setScreenfullClose,
      routesPool,
    };
  },
});
</script>
