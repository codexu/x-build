import { Notification } from 'ant-design-vue';

export default {
  namespaced: true,
  state: {
    errorLogs: [],
  },
  mutations: {
    // 向 ErrorLogs 列表中加入新的日志信息，并记录时间
    ADD_ERROR_LOGS(state, payload) {
      state.errorLogs.push({
        time: new Date(),
        error: payload,
      });
    },
    // 清空 ErrorLogs
    CLEAR_ERROR_LOGS(state) {
      state.errorLogs = [];
    },
    // 消息提示
    NOTIFICATION(state, payload) {
      if (typeof payload === 'string') {
        Notification.success({ message: payload });
      } else if (typeof payload === 'object') {
        if (payload instanceof Error) {
          const { message } = payload;
          Notification.error({
            message,
          });
        } else {
          Notification[payload.type](payload);
        }
      }
    },
  },
};
