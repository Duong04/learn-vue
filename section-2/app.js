const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    add(num) {
      this.counter+=num;
    },
    remove(num) {
      this.counter-=num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert('Hello world!');
    }
  }
});

app.mount('#events');
