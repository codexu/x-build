import { customRef, getCurrentInstance, onUnmounted } from 'vue';

export default function useDebounce<T>(value: T, delay = 200) {
  let timer: NodeJS.Timeout;
  let customValue = value;
  const clearTimer = () => {
    if (timer) clearTimeout(timer);
  };
  if (getCurrentInstance()) {
    onUnmounted(() => { clearTimer(); });
  }
  return customRef((tracker, trigger) => ({
    get() {
      tracker();
      return customValue;
    },
    set(val: T) {
      clearTimer();
      timer = setTimeout(() => {
        customValue = val;
        clearTimeout(timer);
        trigger();
      }, delay);
    },
  }));
}
