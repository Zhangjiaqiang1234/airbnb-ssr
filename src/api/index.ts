// https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/getRoomList?pageNo=1&pageSize=3

import http from '../utils/http';

export function fetchRoomList() {
  // eslint-disable-next-line max-len
  return http.httpRequestGet('http://110.42.184.111/api/room/room/getRoomList?pageNo=1&pageSize=3', {});
}
