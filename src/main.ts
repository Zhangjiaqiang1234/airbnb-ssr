import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus, { ElMessage } from 'element-plus';
import 'element-plus/dist/index.css';
import i18n from './language/i18n';

import airbnb from './db'; // 引入数据库和对象仓库
import { store, key } from './store';
router.beforeEach((to, from, next) => {
  airbnb.airbnbDB.openStore({
    ...airbnb.languageObjectStore,
    ...airbnb.userObjectStore,
  }).then((res: any) => {
    console.log('初始化所有对象仓库', res);
    next();
  });
});

/* 创建应用实例 */
const app = createApp(App);
/* 全局引入 element-ui 组件 */
app.config.globalProperties.$message = ElMessage;
/* 使用 vuex4  */
app.use(store, store);
/* 将路由挂载到根实例上 */
app.use(router);
/* 将 element-ui 挂载到根实例 */
app.use(ElementPlus);
/* 引入国际化语言包 */
app.use(i18n);
app.mount('#app');
