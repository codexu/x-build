<template>
  <div ref="editorRef"></div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  nextTick,
  watch,
  PropType,
} from 'vue';
import Editor from 'wangeditor';
import debounce from 'lodash/debounce';
import {
  FontStyleType,
  FontSizeConfType,
} from 'wangeditor/dist/config/menus.d';

export default defineComponent({
  name: 'Editor',
  props: {
    defaultData: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '请输入正文',
    },
    height: {
      type: Number,
      default: 300,
    },
    menus: {
      type: Array as PropType<string[]>,
      default: () => [
        'head',
        'bold',
        'fontSize',
        'fontName',
        'italic',
        'underline',
        'strikeThrough',
        'indent',
        'lineHeight',
        'foreColor',
        'backColor',
        'link',
        'list',
        'justify',
        'quote',
        'emoticon',
        'image',
        'video',
        'table',
        'code',
        'splitLine',
        'undo',
        'redo',
      ],
    },
    colors: {
      type: Array as PropType<string[]>,
      default: () => ['#000000', '#eeece0', '#1c487f', '#4d80bf'],
    },
    fontNames: {
      type: Array as PropType<FontStyleType>,
      default: () => [
        '黑体',
        '仿宋',
        '楷体',
        '标楷体',
        '华文仿宋',
        '华文楷体',
        '宋体',
        '微软雅黑',
        'Arial',
        'Tahoma',
        'Verdana',
        'Times New Roman',
        'Courier New',
      ],
    },
    fontSizes: {
      type: Object as PropType<FontSizeConfType>,
      default: () => ({
        'x-small': { name: '10px', value: '1' },
        small: { name: '13px', value: '2' },
        normal: { name: '16px', value: '3' },
        large: { name: '18px', value: '4' },
        'x-large': { name: '24px', value: '5' },
        'xx-large': { name: '32px', value: '6' },
        'xxx-large': { name: '48px', value: '7' },
      }),
    },
    lineHeights: {
      type: Array as PropType<string[]>,
      default: () => ['1', '1.15', '1.6', '2', '2.5', '3'],
    },
    showFullScreen: {
      type: Boolean,
      defaiult: true,
    },
  },

  setup(props, { emit }) {
    const editorRef = ref<HTMLElement | null>(null);
    const editorData = ref('');
    let editor: Editor | null;
    onMounted(() => {
      editor = new Editor(editorRef.value);
      editor.config.onchange = debounce((newHtml) => {
        editorData.value = newHtml;
        emit('change', newHtml);
      }, 200);
      editor.config.placeholder = props.placeholder;
      editor.config.height = props.height;
      editor.config.menus = props.menus;
      editor.config.colors = props.colors;
      editor.config.fontNames = props.fontNames;
      editor.config.fontSizes = props.fontSizes;
      editor.config.lineHeights = props.lineHeights;
      editor.config.showFullScreen = props.showFullScreen;
      editor.create();
      // editor = editor;
    });
    // 追加新内容
    function append(html: string) {
      if (editor) {
        editor.txt.append(html);
      }
    }
    // 清空内容
    function clear() {
      if (editor) {
        editor.txt.clear();
      }
    }
    function set(html: string) {
      nextTick(() => {
        if (editor) {
          editor.txt.html(html);
        }
      });
    }

    watch(
      () => props.defaultData,
      (newValue, a) => {
        console.log(newValue, a);
        editorData.value = newValue;
        set(newValue);
      },
    );

    return {
      editorRef,
      append,
      clear,
      set,
    };
  },
});
</script>
