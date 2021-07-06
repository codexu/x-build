import { App } from 'vue';
import MwHighlight from './index.vue';

export default {
  install: (app: App) => {
    app.component(MwHighlight.name, MwHighlight);
  },
  component: MwHighlight,
};

export { MwHighlight };
