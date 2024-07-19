const app = Vue.createApp({
    data() {
      return {
        keydownValue: 'OUTPUT',
      };
    },
    methods: {
        showAlert() {
            alert('Warning, because you are so beautiful🙆‍♀️');
        },
        getValueKeydown(event) {
            this.keydownValue = event.target.value;
        }
    }
  });
  
  app.mount('#assignment');
  