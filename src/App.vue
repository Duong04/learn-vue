<script setup>
  import { ref, computed } from 'vue';
  import HelloWorld from './components/HelloWorld.vue';
  const name = 'Đường';
  const rawHtml = '<span style="color: red;">Red</span>';
  const count = ref(0);
  const id = 'button-id';

  const isCheck = ref(false);

  const bidings = {
    id: 'button-id',
    class: 'btn',
    style: {
      backgroundColor: 'green',
      color: '#fff',
      'border': 'none'
    }
  }

  const myCourse = ref([
    {
      name: 'My Course 1',
      price: 100
    },
    {
      name: 'My Course 2',
      price: 90
    },
    {
      name: 'My Course 3',
      price: 50
    },
    {
      name: 'My Course 4',
      price: 70
    },
    {
      name: 'My Course 5',
      price: 90
    },
  ])

</script>


<template>
    <h1 v-show="isCheck">Hello world!</h1>
    <h1 v-if="isCheck">Hello world 2!</h1>
    <h3>Nguyễn Thành {{name}}</h3>
    <h5>Color is <span v-html="rawHtml"></span></h5>
    <div v-if="myCourse.length >= 0" v-for="(item, index) in myCourse" :key="index">
      <h1>{{item.name}}</h1>
      <h5>{{item.price}}</h5>
    </div>
    <button v-bind="bidings" @click="isCheck = !isCheck">Click</button>
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
