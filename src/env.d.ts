/// <reference types="vite/client" />

/* 默认是不识别 .vue 文件的，所以这里我们要做一个识别，支持 .vue 文件 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
