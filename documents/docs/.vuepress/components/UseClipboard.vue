<template>
  <div style="padding-top: 16px">
    <el-input v-model="input" placeholder="请输入内容" style="width:200px"></el-input>
    <el-button @click="onClick" style="margin-left:10px">复制</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useClipboard from "../hooks/useClipboard";
import { ElButton, ElInput } from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

export default defineComponent({
  components: {
    ElButton,
    ElInput,
  },
  setup() {
    let input = ref("复制的文本");
    const { copyText } = useClipboard();
    const onClick = () => {
      copyText(input.value)
    }
    return { input, onClick };
  },
});
</script>

<style scoped>
</style>