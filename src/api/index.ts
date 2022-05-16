// https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/getRoomList?pageNo=1&pageSize=3

import { http } from '../utils/http';
import IndexDB from '../utils/indexDB';

/* 真实接口 */
export function fetchRoomList() {
  // eslint-disable-next-line max-len
  return http.httpGet('http://110.42.184.111/api/room/room/getRoomList?pageNo=1&pageSize=3', {});
}

/* Mock接口 */
export async function fetchElephant() {
  /* 实例化 */
  const airbnb = new IndexDB('airbnb');
  /* 打开对象仓库 */
  await airbnb.openStore('elephant', 'id', ['nose', 'ear']);
  const result = await airbnb.getList('elephant').then(res => {
    return { code: '000000', message: '操作成功',result: res , success: true };
  });
  return result;
}
