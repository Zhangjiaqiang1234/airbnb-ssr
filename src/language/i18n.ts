/* 先创建一个国际化语言的实例 */
import { createI18n } from 'vue-i18n';

import zh from './zh';
import en from './en';

const i18n = createI18n({
  legacy: false,
  /* 当前语言 */
  locale: 'zh',
  /* 接受一些我们自定义的语言包 */
  messages: {
    zh,
    en,
  },
});

export default i18n;
