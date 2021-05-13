import { MutationTree } from 'vuex';
import { ElNotification } from 'element-plus';
import { INotificationOptions } from 'element-plus/lib/el-notification/src/notification.type.d';
import { StateType } from './state';
import MutationTypes from './mutation-types';

type NotifyType = string | INotificationOptions | Error;

export type Mutations<S = StateType> = {
  [MutationTypes.addError](state: S, payload: Error): void;
  [MutationTypes.clearError](state: S): void;
  [MutationTypes.notify](state: S, payload: NotifyType): void;
}

function pushError(state: StateType, payload: Error) {
  state.errorLogs.push({ time: new Date(), error: payload });
}

export const mutations: MutationTree<StateType> & Mutations = {
  [MutationTypes.addError](state, payload) {
    pushError(state, payload);
  },
  [MutationTypes.clearError](state) {
    state.errorLogs = [];
  },
  [MutationTypes.notify](state, payload) {
    const time = new Date().getTime().toString();
    if (typeof payload === 'string') {
      ElNotification({ message: payload, type: 'success', id: time });
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
};
