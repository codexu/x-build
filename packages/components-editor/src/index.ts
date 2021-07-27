import { App } from 'vue';
import Editor from './index.vue';

export default {
  install: (app: App):void => {
    app.component(Editor.name, Editor);
  },
  component: Editor,
};

export { Editor };
