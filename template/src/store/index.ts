import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { importAllStore } from '@/libs/utils/importAllStore';
import RootStateTypes, { AllStateTypes } from './interface';

export default createStore({
  modules: importAllStore(),
});

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store');

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key);
}
