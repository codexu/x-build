import { watch } from 'vue';
import useDebounce from './useDebounce';

function useDebounceFn<T extends(...rest: unknown[]) => unknown>(fn: T, delay = 200) {
  const debounceValue = useDebounce(0, delay);
  let params: Parameters<T>;

  watch(debounceValue, () => { fn(...params); }, { flush: 'sync' });

  return (...rest: Parameters<T>) => {
    params = rest;
    debounceValue.value += 1;
  };
}

export default useDebounceFn;
