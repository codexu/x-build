import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

// 处理默认时间格式
export default function filterMoment(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  if (!dataStr) return '-';
  return dayjs(dataStr).format(pattern);
}
