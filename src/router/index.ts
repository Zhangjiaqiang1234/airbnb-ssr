import home from '@/views/home/index.vue';
import mine from '@/views/mine/index.vue';
import login from '@/views/login/index.vue';


import { createRouter, createWebHistory } from 'vue-router';

/* 定义路由 */
const routes = [
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      title: '',
      keepAlive: false,
    },
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine,
    meta: {
      title: '',
      keepAlive: false,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: '',
      keepAlive: false,
    },
  },
];

/* 创建实例 */
const router = createRouter({
  /* 是否支持 hash */
  history: createWebHistory(),
  routes,
});

export default router;
