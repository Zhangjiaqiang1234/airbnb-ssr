<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { h, getCurrentInstance } from 'vue';
import { fetchRoomList, fetchElephant } from '../../api';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

const router = useRouter();
const route = useRoute();
const store = useStore();

const { t } = useI18n();

/* 因为 vue2 中是 this.$message 使用的，但是 vue3 中没有 this，所以需要创建一个上下文来处理 */
const { proxy }: any = getCurrentInstance();
proxy.$message({
  message: h('p', null, [
    h('span', null, 'Message can be'),
    h('i', { style: 'color:teal' }, 'Vnode'),
  ]),
});

/* 真实接口 */
function getRoomList() {
  fetchRoomList().then((res) => {
    console.log('真实接口', res);
  });
}
getRoomList();

/*  mock  接口 */
function getElephant() {
  fetchElephant().then((res) => {
    console.log('mock接口', res);
  });
}
// getElephant();
</script>

<template>
  这里是 home
</template>

<style lang="scss">
@import "@/assets/scss/home/index.scss";
</style>
