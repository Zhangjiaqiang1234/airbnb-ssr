<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import { useRouter } from 'vue-router';
/* element-plus 中文包 */
import zhCn from 'element-plus/es/locale/lang/zh-cn';
/* element-plus 英文包 */
import en from 'element-plus/es/locale/lang/en';

import { ref } from 'vue';
import headerCommon from './components/layout/headerCommon.vue';

import { useI18n } from 'vue-i18n';
const { locale: localeLanguage } = useI18n();


// const router = useRouter();

const locale = ref(zhCn);
const changeLang = (language: any) => {
  locale.value = language;
  localeLanguage.value = language.name;
};
</script>

<template>
  <el-config-provider :locale="locale">
    <!-- <button @click="changeLang(zhCn)">中文</button>
    <button @click="changeLang(en)">英文</button>
    <router-link to="/home">首页</router-link>
    <router-link to="/mine">个人中心</router-link>
     -->


    <!-- 头部 -->
    <headerCommon @changeLang="changeLang" />
    123  - {{localeLanguage}}

    <!-- 主体 -->
    <router-view />
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
