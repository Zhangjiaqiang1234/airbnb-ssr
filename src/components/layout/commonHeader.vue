<!-- 公共顶部组件 -->

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
/* element-plus 中文包 */
import zhCn from 'element-plus/es/locale/lang/zh-cn';
/* element-plus 英文包 */
import en from 'element-plus/es/locale/lang/en';

import { saveLanguageApi, fetchLanguageApi } from '../../api/layout';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const activeIndex = ref('orders');

// eslint-disable-next-line no-unused-vars
const emit = defineEmits<{(e: 'changeLang', language: any): void }>();

function handleSelect(e: any) {
  if (e === 'zh') {
    /* 切换为中文 */
    emit('changeLang', zhCn);
    saveLanguage('zh');
  } else if (e === 'en') {
    emit('changeLang', en);
    saveLanguage('en');
  }
}

/* Mock 接口：保存当前语言包 */
function saveLanguage(language:any) {
  saveLanguageApi(language).then(res => {
    const { success } = res;
    if (success) {
      console.log('保存当前语言包成功');
    }
  });
}

/* Mock 接口：获取当前语言包 */
function getLanguage() {
  fetchLanguageApi().then((res:any) => {
    if (res?.success && res?.result) {
      const { name } = res?.result;

      if (name === 'zh') {
        /* 切换为中文 */
        emit('changeLang', zhCn);
      } else if (name === 'en') {
        emit('changeLang', en);
      }
      console.log('获取当前语言包成功');
    }
  });
}

getLanguage();
</script>

<template>
  <div class="header-common">
    <!-- logo -->
    <img class="logo" src="../../assets/images/layout/logo.png" alt="爱此迎" />
    <el-menu
      :defaultActive="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="orders">{{ t("header.orders") }}</el-menu-item>
      <el-menu-item index="records">{{ t("header.records") }}</el-menu-item>
      <el-sub-menu index="language">
        <template #title>{{ t("header.language") }}</template>
        <el-menu-item index="zh">中文</el-menu-item>
        <el-menu-item index="en">English</el-menu-item>
      </el-sub-menu>
      <!-- 头像 -->
      <el-menu-item index="avatar">
        <img
          class="avatar"
          src="../../assets/images/layout/avatar.jpg"
          alt="个人中心"
        />
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/layout/commonHeader.scss";
</style>
