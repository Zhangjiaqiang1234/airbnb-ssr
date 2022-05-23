/* 封装一个请求库 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/* 默认配置 */
const defaultConfig = {
  timeout: 5000,
  baseUrl: '',
};

class Http {
  /* 构造函数，调用实例的时候默认会调用 */
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  /* 定义为私有属性 */
  private static axiosInstance = axios.create(defaultConfig);

  /* 定义私有方法 */
  /* 请求拦截器 */
  private httpInterceptorsRequest() {
    Http.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config;
      },
      (err) => {
        return Promise.reject(err);
      },
    );
  }

  /* 响应拦截器 */
  private httpInterceptorsResponse() {
    Http.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (err) => {
        return Promise.reject(err);
      },
    );
  }

  /* 定义一些公有的方法 */

  /* 封装get请求 */
  public httpRequestGet<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance
      .get(url, params)
      .then((res) => res.data)
      .catch();
  }

  /* 封装post请求 */
  public httpRequestPost<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance
      .post(url, params)
      .then((res) => res.data)
      .catch();
  }
}

export const http = new Http();
