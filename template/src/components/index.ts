import XSvg from '@/components/System/Svg/index.vue';
import '@/components/System/Svg';

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
