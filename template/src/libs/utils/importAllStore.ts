// 自动加载 views 内的所有 store.ts 文件

import { Module, ModuleTree } from 'vuex';

export interface StoreModuleType<S> extends Module<S, S> {
  namespaced: true;
  name: string;
}

export function importAllStore<S>(): ModuleTree<S> {
  const modules: ModuleTree<S> = {};
  try {
    // 导入 @/views 下文件，包含子目录，文件名为：store.ts
    const viewsRequireContext: __WebpackModuleApi.RequireContext = require.context('@/views', true, /[/\\]store\.ts$/);
    viewsRequireContext.keys().forEach((fileName) => {
      const modulesConent = viewsRequireContext(fileName);
      if (modulesConent.default) {
        const { name, ...module } = modulesConent.default;
        const modulesName = name || fileName.replace(/^\.\/(.*)\.\w+$/, '$1');
        modules[modulesName] = { ...module };
      }
    });

    // 导入 @/store 下文件
    const requireContext: __WebpackModuleApi.RequireContext = require.context('@/store/modules', false, /\.ts$/);
    requireContext.keys().forEach((fileName) => {
      const modulesConent = requireContext(fileName);
      if (modulesConent.default) {
        const { name, ...module } = modulesConent.default;
        const modulesName = name || fileName.replace(/^\.\/(.*)\.\w+$/, '$1');
        modules[modulesName] = { ...module };
      }
    });
  } catch (error) {
    console.error(error);
  }
  return modules;
}
