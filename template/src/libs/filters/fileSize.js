// 转化文件大小
export default function fileSize(filesize) {
  if (!filesize) {
    return '0Bytes';
  }
  const unitArr = [
    'Bytes',
    'KB',
    'MB',
    'GB',
    'TB',
    'PB',
    'EB',
    'ZB',
    'YB',
  ];
  let index = 0;
  const srcsize = parseFloat(filesize);
  index = Math.floor(Math.log(srcsize) / Math.log(1024));
  let size = srcsize / (1024 ** index);
  size = size.toFixed(2); // 保留的小数位数
  return size + unitArr[index];
}
