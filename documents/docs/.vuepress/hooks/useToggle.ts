import { ref } from 'vue';

type ToggleParams = string | number | boolean | undefined;

export default function useToggle(defaultValue: ToggleParams, reverseValue?: ToggleParams) {
  const toggleState = ref(defaultValue);
  function advancedToggle() {
    if (toggleState.value === defaultValue) {
      toggleState.value = reverseValue;
    } else {
      toggleState.value = defaultValue;
    }
  }
  function setLeft(payload: string) {
    toggleState.value = payload;
  }
  function setRight(payload: string) {
    toggleState.value = payload;
  }
  return {
    toggleState, advancedToggle, setLeft, setRight,
  };
}
