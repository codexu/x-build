import StaticFile from '@/components/System/StaticFile/index.vue';
import SvgIcon from '@/components/System/SvgIcon/index.vue';
import '@/components/System/SvgIcon';

import {
  ElIcon,
  ElButton,
  ElNotification,
} from 'element-plus';

import locale from 'element-plus/lib/locale';
import lang from 'element-plus/lib/locale/lang/zh-cn';

locale.use(lang);

export const components = [
  StaticFile,
  SvgIcon,
  ElIcon,
  ElButton,
];

export const plugins = [
  ElNotification,
];
