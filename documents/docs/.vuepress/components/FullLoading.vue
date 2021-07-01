<template>
  <div style="padding-top: 16px">
    <el-button @click="onClick">全屏loading</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useLoading from '../hooks/useLoading';
import { ElButton, ElLoading } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

export default defineComponent({
  components: {
    ElButton,
    ElLoading,
  },
  setup () {
    const { openLoading, closeLoading } = useLoading();
    const onClick = () => {
      openLoading();
      setTimeout(() => closeLoading(), 1000);
    }
    return { onClick }
  }
})
</script>

<style scoped>

</style>