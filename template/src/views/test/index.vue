<template>
  <div class="page-test">
    <el-button @click="setScreenfull">全屏</el-button>
    <el-button @click="setScreenfullClose">关闭全屏</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
    };

    return {
      setScreenfull,
      setScreenfullClose,
    };
  },
});
</script>
