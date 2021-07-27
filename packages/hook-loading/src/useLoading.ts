import { ref, Ref } from 'vue';
import { merge } from 'lodash';
import { ElLoading } from 'element-plus';
import { ILoadingOptions, ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type.d';

interface Result {
  loading: Ref<boolean>;
  loadingTarget: Ref<HTMLElement>
  openLoading(): void;
  closeLoading(): void;
}

export default function useLoading(options?: ILoadingOptions): Result {
  let elLoading: ILoadingInstance | null = null;
  const loading = ref(false);
  const loadingTarget = ref(null);

  function openLoading() {
    loading.value = true;
    elLoading = ElLoading.service(merge(options, { target: loadingTarget.value }));
  }

  function closeLoading() {
    loading.value = true;
    if (elLoading) {
      elLoading.close();
    }
  }

  return {
    loading, loadingTarget, openLoading, closeLoading,
  };
}