import StaticFile from '@/components/sys/StaticFile/index.vue';
import SvgIcon from '@/components/sys/SvgIcon/index.vue';
import '@/components/sys/SvgIcon';

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
