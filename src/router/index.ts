import home from '@/views/home/index.vue';
import mine from '@/views/mine/index.vue';
import login from '@/views/login/index.vue';

import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';

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

const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
});

export default router;
