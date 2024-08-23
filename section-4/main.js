Vue.createApp({
    data() {
        return {
            students: {
                name: "Nguyễn Thành Đường",
                age: 19
            },
            image: "https://i.pinimg.com/236x/5e/02/88/5e0288ee3d881376a7ded12ce56c7dea.jpg",
            linkHref: "https://duong04.online",
            message: "<h1>Hello world!</h1>",
            count: 1
        }
    },
    methods: {
        randoms() {
            return Math.floor(Math.random() * 6) +1;
        },
        render() {
            const arr = [this.randoms(), this.randoms(), this.randoms()];
            const score = arr.reduce((total, item) => total += item, 0);

            if (score > 10) {
                return 'Tài';
            }else {
                return "Xỉu"
            }
        },
        handleClick() {
            this.count.value++;
        }
    }
}).mount('#app');

