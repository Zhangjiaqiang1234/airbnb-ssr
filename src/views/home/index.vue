<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { h, getCurrentInstance } from 'vue';
const router = useRouter();
const route = useRoute();

console.log(route.params);

/* 因为 vue2 中是 this.$message 使用的，但是 vue3 中没有 this，所以需要创建一个上下文来处理 */
const { proxy }: any = getCurrentInstance();
proxy.$message({
  message: h('p', null, [
    h('span', null, 'Message can be'),
    h('i', { style: 'color:teal' }, 'Vnode'),
  ]),
});
</script>

<template>
  首页

  <button
    @click="
      () =>
        router.push({
          path: '/mine',
          query: {
            id: 1,
          },
        })
    "
  >
    跳转到个人中心
  </button>
  <el-button>Default</el-button>
  <div class="text">奥术大师大奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥</div>
</template>

<style lang="scss">
@import "@/assets/scss/home/index.scss";

</style>
