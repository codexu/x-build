import XSvg from '@/components/System/SvgIcon/index.vue';
import '@/components/System/SvgIcon';

import {
  ElButton,
  ElMessage,
} from 'element-plus';

import locale from 'element-plus/lib/locale';
import lang from 'element-plus/lib/locale/lang/zh-cn';

locale.use(lang);

export const components = [
  XSvg,
  ElButton,
];

export const plugins = [
  ElMessage,
];