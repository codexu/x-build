import { createI18n } from 'vue-i18n';
// eslint-disable-next-line camelcase
import zh_CN from './lang/zh_CN';
import en from './lang/en';

const messages = {
  zh_CN,
  en,
};

const i18n = createI18n({
  legacy: false,
  locale: 'zh_CN',
  messages,
});

export default i18n;
