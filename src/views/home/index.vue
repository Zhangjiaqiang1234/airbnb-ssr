<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { h, getCurrentInstance } from 'vue';
import { fetchRoomList, fetchElephant } from '../../api';
import { useI18n } from 'vue-i18n';
import IndexDB from '../../utils/indexDB';

const router = useRouter();
const route = useRoute();

const { t } = useI18n();

/* 因为 vue2 中是 this.$message 使用的，但是 vue3 中没有 this，所以需要创建一个上下文来处理 */
const { proxy }: any = getCurrentInstance();
proxy.$message({
  message: h('p', null, [
    h('span', null, 'Message can be'),
    h('i', { style: 'color:teal' }, 'Vnode'),
  ]),
});

const getRoomList = () => {
  fetchRoomList();
};

getRoomList();

/* 数据库相关操作 */
const airbnbDB = new IndexDB('airbnb');

airbnbDB.openStore('elephant', 'id', ['nose', 'ear']);

/* 新增和修改 */
function addDB(storeName: string) {
  airbnbDB.updateItem(storeName, {
    nose: '44m',
    ear: '比较小',
  });
}

/* 删除数据 */
function deleteDB(storeName: string, key: number | string) {
  airbnbDB.deleteItem(storeName, key);
}

/* 查询所有数据，查询对象仓库数据 */
function getObjectStore(storeName: string) {
  airbnbDB.getList(storeName);
}

/* 查询某一条数据，查询对象仓库数据 */
function getObjectStoreItem(storeName: string, key: number | string) {
  airbnbDB.getItem(storeName,key);
}

/* 获取 mock  数据 */
function getElephant() {
  fetchElephant();
}

getElephant();

</script>

<template>
  {{ t("message.home") }}

  <el-button @click="addDB('elephant')">增/改</el-button>
  <el-button @click="deleteDB('elephant', 2)">删除</el-button>
  <el-button @click="getObjectStore('elephant')">查询所有数据</el-button>
  <el-button @click="getObjectStoreItem('elephant', 1)">查询某一条数据</el-button>
</template>

<style lang="scss">
@import "@/assets/scss/home/index.scss";
</style>
