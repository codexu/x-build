import request from '@/libs/request';

export default function () {
  return request<any>({
    method: 'get',
    url: '/api',
  });
}
