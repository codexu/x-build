import { defineStore } from 'pinia';
import screenfull from 'screenfull';

export interface FullscreenState {
  active: boolean;
}

export const useFullscreenStore = defineStore({
  id: 'fullscreen',
  state: (): FullscreenState => ({
    active: false,
  }),
  actions: {
    toggle() {
      if (screenfull.isEnabled) {
        if (screenfull.isFullscreen) {
          screenfull.exit();
          this.active = false;
        } else {
          screenfull.request();
          this.active = true;
        }
      }
    },
  },
});
