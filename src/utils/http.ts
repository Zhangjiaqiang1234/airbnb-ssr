/* 封装一个请求库 */

/* 创建一个实例 */
import axios from 'axios';

/* 默认配置 */
const defaultConfig = {
  timeout: 5000,
  baseUrl: '',
};


/* 创建请求实例 */
const axiosInstance = axios.create(defaultConfig);


/* 请求拦截器 */
axiosInstance.interceptors.request.use(config => {
  return config;
}, err => {
  return Promise.reject(err);
});

/* 响应拦截器 */
axiosInstance.interceptors.response.use(config => {
  return config;
}, err => {
  return Promise.reject(err);
});


/* 封装get请求 */
function httpRequestGet(url, params) {
  return axiosInstance.get(url, params).then(res => res.data).catch();
}

/* 封装post请求 */
function httpRequestPost(url, params) {
  return axiosInstance.post(url, params).then(res => res.data).catch();
}

export default {
  httpRequestGet,
  httpRequestPost,
};
