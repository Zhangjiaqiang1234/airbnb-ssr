<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <button
    @click="
      () =>
        router.push({
          path: '/home',
        })
    "
  >
    首页
  </button>
  <button
    @click="
      () =>
        router.push({
          path: '/mine',
        })
    "
  >
    个人中心页
  </button>
  <router-link to="/home">首页</router-link>
  <router-link to="/mine">个人中心</router-link>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
