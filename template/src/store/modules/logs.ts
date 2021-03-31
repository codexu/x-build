import { InjectionKey } from 'vue';
import { Mutation, Store } from 'vuex';
import { StoreModuleType } from '@/libs/utils/importAllStore';
import { ElNotification } from 'element-plus';

export interface ErrorType {
  error: Error;
  time: Date;
}

export interface LogsState {
  errorLogs: ErrorType[];
}

export const logsKey: InjectionKey<Store<LogsState>> = Symbol('logsKey');

export interface ModuleType extends StoreModuleType<LogsState> {
  state: LogsState;
  mutations: {
    ADD_ERROR_LOGS: Mutation<LogsState>;
    CLEAR_ERROR_LOGS: Mutation<LogsState>;
    NOTIFY: Mutation<LogsState>;
  };
}

const initState: LogsState = {
  errorLogs: [],
};

function pushError(state: LogsState, payload: Error) {
  state.errorLogs.push({ time: new Date(), error: payload });
}

const StoreModel: ModuleType = {
  namespaced: true,
  name: 'logs',
  state: {
    ...initState,
  },
  mutations: {
    // 向 ErrorLogs 列表中加入新的日志信息，并记录时间
    ADD_ERROR_LOGS(state, payload: Error) {
      pushError(state, payload);
    },
    // 清空 ErrorLogs
    CLEAR_ERROR_LOGS(state) {
      state.errorLogs = [];
    },
    // 消息提示
    NOTIFY(state, payload) {
      if (typeof payload === 'string') {
        ElNotification({ message: payload, type: 'success' });
      } else if (typeof payload === 'object') {
        if (payload instanceof Error) {
          const { message } = payload;
          pushError(state, payload);
          ElNotification({ message, type: 'error' });
        } else {
          ElNotification(payload);
        }
      }
    },
  },
};

export default StoreModel;
