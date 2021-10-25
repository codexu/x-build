import { ref } from 'vue';
import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import { notification } from 'ant-design-vue';
import storage from 'store';
import { useUserStore } from '@/stores/user';

const { VITE_APP_BASE_URL } = import.meta.env;

const request = axios.create({
  // API 请求的默认前缀
  baseURL: VITE_APP_BASE_URL as string,
  timeout: 10000, // 请求超时时间
});

// 异常拦截处理器
const errorHandler = (error: AxiosError) => {
  const status = error.response?.status;
  const useStore = useUserStore();
  switch (status) {
    /* eslint-disable no-param-reassign */
    case 400:
      error.message = '请求错误';
      break;
    case 401:
      useStore.logout();
      error.message = '未授权，请登录';
      break;
    case 403:
      error.message = '拒绝访问';
      break;
    case 404:
      error.message = `请求地址出错: ${error.response?.config.url}`;
      break;
    case 408:
      error.message = '请求超时';
      break;
    case 500:
      error.message = '服务器内部错误';
      break;
    case 501:
      error.message = '服务未实现';
      break;
    case 502:
      error.message = '网关错误';
      break;
    case 503:
      error.message = '服务不可用';
      break;
    case 504:
      error.message = '网关超时';
      break;
    case 505:
      error.message = 'HTTP版本不受支持';
      break;
    default:
      break;
  }
  notification.error({ message: error.message });
  return Promise.reject(error);
};

request.interceptors.request.use((config) => {
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  config.headers.Authorization = `Bearer ${storage.get('ACCESS_TOKEN')}`;
  return config;
}, errorHandler);

// response interceptor
request.interceptors.response.use((response: AxiosResponse) => {
  const dataAxios = response.data;
  const useStore = useUserStore();
  // 这个状态码是和后端约定的
  const { code, msg } = dataAxios;
  // 根据 code 进行判断
  if (code === undefined) {
    // 如果没有 code 代表这不是项目后端开发的接口
    return dataAxios;
  }
  // 有 code 代表这是一个后端接口 可以进行进一步的判断
  switch (code) {
    case 0:
      // code === 0 代表没有错误
      return dataAxios.data;
    case 1:
      // code === 1 代表请求错误
      notification.error({ message: msg });
      throw Error(msg);
    case 401:
      notification.error({ message: msg });
      useStore.logout();
      throw Error(msg);
    default:
      // 不是正确的 code
      return '不是正确的code';
  }
}, errorHandler);

export default request;

export interface RequestConfig {
  successMessage?: string;
  errorMessage?: string;
  immediate?: boolean;
}

export function useRequest<T>(
  axiosConfig: AxiosRequestConfig,
  requestConfig?: RequestConfig,
) {
  // 最终返回的数据
  const data = ref<T>();
  // 请求失败返回的 Error 对象
  const error = ref<Error>();
  // 请求状态
  const loading = ref(false);
  // 立即发送请求
  const immediate = requestConfig?.immediate !== false;
  // 终止请求
  const { CancelToken } = axios;
  const { token, cancel } = CancelToken.source();
  // 合并求情配置
  const config = { ...axiosConfig, cancelToken: token };
  // 请求 Promise

  function run() {
    loading.value = true;
    return request<T>(config)
      .then((res: T) => {
        data.value = res;
        if (requestConfig?.successMessage) {
          notification.success({ message: requestConfig.successMessage });
        }
      })
      .catch((err: Error) => {
        error.value = err;
        if (requestConfig?.errorMessage) {
          notification.error({ message: requestConfig.errorMessage });
        }
      })
      .finally(() => {
        loading.value = false;
      });
  }

  const content = new Promise((resolve, reject) => {
    if (immediate) {
      run()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
  return { data, error, loading, content, run, cancel };
}
