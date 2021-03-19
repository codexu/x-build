import {
  ElButton,
  ElMessage,
} from 'element-plus';
import locale from 'element-plus/lib/locale';
import lang from 'element-plus/lib/locale/lang/zh-cn';

locale.use(lang);

export const components = [
  ElButton,
];

export const plugins = [
  ElMessage,
];
