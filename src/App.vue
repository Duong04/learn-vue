<script setup>
  import { ref, computed } from 'vue';
  import HelloWorld from './components/HelloWorld.vue';
  const name = 'Đường';
  const rawHtml = '<span style="color: red;">Red</span>';
  const count = ref(0);
  const id = 'button-id';

  const isCheck = false;

  const bidings = {
    id: 'button-id',
    class: 'btn',
    style: {
      backgroundColor: 'green',
      color: 'blue'
    }
  }
</script>

<template>
    <h1>Hello world!</h1>
    <h3>Nguyễn Thành {{name}}</h3>
    <h5>Color is <span v-html="rawHtml"></span></h5>
    <button :disabled="isCheck" v-bind="bidings" @click="count++">Click</button>
    <h1>{{count}}</h1>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
