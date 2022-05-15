import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";

import ElementPlus, { ElMessage } from "element-plus";
/* 引入 element-ui 基础样式文件 */
import "element-plus/dist/index.css";

/* 创建应用实例 */
const app = createApp(App);

/* 将路由挂载到根实例上 */
app.use(router);

/* 全局引入 element-ui 组件 */
app.config.globalProperties.$message = ElMessage;

/* 将 element-ui 挂载到根实例 */
app.use(ElementPlus);

app.mount("#app");
