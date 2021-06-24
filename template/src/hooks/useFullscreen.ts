import { ref } from 'vue';
import screenfull from 'screenfull';

export default function useFullscreen() {
  const active = ref(false);

  function toggle() {
    if (screenfull.isEnabled) {
      if (screenfull.isFullscreen) {
        screenfull.exit();
        active.value = false;
      } else {
        screenfull.request();
        active.value = true;
      }
    }
  }
  return { active, toggle };
}
