const app = Vue.createApp({
    data() {
        return {
            name: 'Your name',
            age: 19,
            numRand: Math.round(Math.random() * 1),
            urlImage: 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg'
        };
    },
    methods: {
        getName(event) {
            this.name = event.target.value;
        },
        getImage(event) {
            this.urlImage = event.target.value;
        }
    }
});

app.mount('#assignment');