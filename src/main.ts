import { createApp } from 'vue';
import App from './App.vue';

import router from './router';

import ElementPlus, { ElMessage } from 'element-plus';
/* 引入 element-ui 基础样式文件 */
import 'element-plus/dist/index.css';
import i18n from './language/i18n';

/* 创建应用实例 */
const app = createApp(App);

/* 将路由挂载到根实例上 */
app.use(router);

/* 全局引入 element-ui 组件 */
app.config.globalProperties.$message = ElMessage;

/* 将 element-ui 挂载到根实例 */
app.use(ElementPlus);

/* 引入国际化语言包 */
app.use(i18n);

app.mount('#app');
