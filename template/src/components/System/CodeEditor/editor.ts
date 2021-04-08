import {
  defineComponent, h, onMounted, onUnmounted, watch,
} from 'vue';
import * as monaco from 'monaco-editor';

const Editor = defineComponent({
  name: 'code-editor',
  props: {
    modelValue: { type: String, default: "console.log('hello,world')" },
    width: { type: [String, Number], default: '100%' },
    height: { type: [String, Number], default: '800px' },
    language: { type: String, default: 'javascript' },
    theme: { type: String, default: 'vs-dark' },
  },
  setup(props, context) {
    let editor: monaco.editor.IStandaloneCodeEditor;
    const options = { // default setting
      language: props.language,
      theme: props.theme,
      value: props.modelValue,
    };
    const init = () => {
      const ele = document.getElementById('editor');
      editor = monaco.editor.create(ele as HTMLElement, options);
    };

    // Determine if the editor exists
    const judgeEditor = () => !!editor;
    // get code
    const getCode = () => {
      if (judgeEditor()) return editor.getValue();
      return '';
    };
    // set code
    // const setCode = (code: string) => {
    //   if (judgeEditor()) return editor.setValue(code);
    //   return '';
    // };
    // set language
    const setLanguage = (lang: string) => {
      const model = editor.getModel();
      if (judgeEditor()) {
        if (model) {
          monaco.editor.setModelLanguage(model, lang);
        }
      }
    };
    watch(() => props.language, (newV) => {
      setLanguage(newV);
    });

    onMounted(() => {
      init();
      editor.onDidChangeModelContent((event: unknown) => {
        context.emit('update:modelValue', getCode());
        context.emit('change', getCode(), event);
      });
    });

    onUnmounted(() => {
      // Use complete destroy instance
      editor.dispose();
    });
  },
  render() {
    const style = {
      width: this.width,
      height: this.height,
    };
    return h('div', { id: 'editor', style });
  },
});

export default Editor;
