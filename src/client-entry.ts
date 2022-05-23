/* 只运行在客户端的代码 */

import { createApp } from './main';

const { app, router } = createApp();

router.isReady().then(() => {
  /* vue 激活静态 HTML 的最佳时机就是路由准备好后，否则可能会失败 */
  app.mount('#app');
});
