<template>
  <pre><code ref="codeRef" spellcheck="true" v-text="code"></code></pre>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/vs.css';

export default defineComponent({
  name: 'mw-highlight',
  props: {
    code: {
      type: String,
      default: 'let a = null;',
    },
    language: {
      type: String,
      default: 'javascript',
    },
  },
  setup(props) {
    const codeRef = ref<HTMLElement | null>(null);
    onMounted(() => {
      let languageFun;
      switch (props.language) {
        case 'java':
          languageFun = () => import('highlight.js/lib/languages/java');
          break;
        case 'css':
          languageFun = () => import('highlight.js/lib/languages/css');
          break;
        case 'html':
          languageFun = () => import('highlight.js/lib/languages/xml');
          break;
        default:
          // 默认 JavaScript
          languageFun = () => import('highlight.js/lib/languages/javascript');
          break;
      }
      languageFun().then((res) => {
        hljs.registerLanguage(props.language, res.default);
        if (codeRef.value) {
          hljs.highlightBlock(codeRef.value);
        }
      });
    });

    return { codeRef };
  },
});
</script>
