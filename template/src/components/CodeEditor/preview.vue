<template>
  <div>
    <Editor v-model:value="content"></Editor>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import Editor from './editor';

export default {
  components: { Editor },
  setup() {
    const content = ref('');
    watch(content, () => {
      console.log(content.value);
    });
    return {
      content,
    };
  },
};
</script>

<style></style>
