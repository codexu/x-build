import { ref } from 'vue';
import screenfull from 'screenfull';

export default function useFullscreen() {
  const screenfullActive = ref(false);

  function toggleScreenfull() {
    if (screenfull.isEnabled) {
      if (screenfull.isFullscreen) {
        screenfull.exit();
        screenfullActive.value = false;
      } else {
        screenfull.request();
        screenfullActive.value = true;
      }
    }
  }

  function openScreenfull() {
    if (screenfull.isEnabled) {
      screenfull.request();
      screenfullActive.value = true;
    }
  }
  function closeScreenfull() {
    if (screenfull.isEnabled) {
      screenfull.exit();
      screenfullActive.value = false;
    }
  }
  return {
    screenfullActive, toggleScreenfull, openScreenfull, closeScreenfull,
  };
}
