// 剩余时间 接受参数 秒
export default function number(time) {
  if (typeof time === 'number' && time !== Infinity && time !== 0) {
    let hours = Math.floor(time / 3600);
    let minute = Math.floor(Math.floor(time % 3600) / 60);
    let second = time % 60;
    hours = hours.toString().length === 1 ? `0${hours}` : hours;
    minute = minute.toString().length === 1 ? `0${minute}` : minute;
    second = second.toString().length === 1 ? `0${second}` : second;
    return `${hours}时${minute}分${second}秒`;
  }
  return '-';
}
