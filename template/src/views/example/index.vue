<template>
  <div class="page-example">
    <button @click="open">点我显示弹窗</button>
     <button @click="close">点我关闭哦弹窗</button>
    <DrawerLayout ref="drawerLayout" :halfHeight="200">
      <ul>
        <li v-for="item in 30" :key="item">{{item}}</li>
      </ul>
    </DrawerLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import DrawerLayout from '@/layouts/DrawerLayout.vue';

export default defineComponent({
  name: 'PageExample',
  components: { DrawerLayout },
  setup() {
    const drawerLayout = ref();
    function open() {
      drawerLayout.value.open();
    }
    function close() {
      drawerLayout.value.close();
    }
    return {
      drawerLayout,
      open,
      close,
    };
  },
});
</script>
<style lang="scss" scoped>
  .page-example{
    width:100vw;
    height: 100vh;
  }
</style>
