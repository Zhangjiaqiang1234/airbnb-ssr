<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import { useRouter } from 'vue-router';
/* element-plus 中文包 */
import zhCn from 'element-plus/es/locale/lang/zh-cn';
/* element-plus 英文包 */
// import en from 'element-plus/es/locale/lang/en';

import { ref } from 'vue';
import commonHeader from './components/layout/commonHeader.vue';
import commonFooter from './components/layout/commonFooter.vue';
import { useRoute } from 'vue-router';

import { useI18n } from 'vue-i18n';
const { locale: localeLanguage } = useI18n();

const route = useRoute();

const locale = ref(zhCn);
const changeLang = (language: any) => {
  locale.value = language;
  localeLanguage.value = language.name;
};
</script>

<template>
  <el-config-provider :locale="locale">
    <!-- 头部 -->
    <commonHeader
      v-show="route.fullPath.indexOf('login') === -1"
      @changeLang="changeLang"
    />

    <!-- 主体 -->
    <div class="container">
      <router-view />
    </div>

    <!-- 底部 -->
    <commonFooter v-show="route.fullPath.indexOf('login') === -1" />
  </el-config-provider>
</template>

<style lang="scss">
@import "@/assets/scss/home/index.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
