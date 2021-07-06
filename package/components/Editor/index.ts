import { App } from 'vue';
import MwEditor from './index.vue';

export default {
  install: (app: App) => {
    app.component(MwEditor.name, MwEditor);
  },
  component: MwEditor,
};

export { MwEditor };
