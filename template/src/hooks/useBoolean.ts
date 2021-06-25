import { ref } from 'vue';

export default function useBoolean(defaultValue?: boolean) {
  const booleanState = ref(defaultValue);
  function toggleBoolean() {
    booleanState.value = !booleanState.value;
  }
  function setTrue() {
    booleanState.value = true;
  }
  function setFalse() {
    booleanState.value = false;
  }
  return {
    booleanState, toggleBoolean, setTrue, setFalse,
  };
}
