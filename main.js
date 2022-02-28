const app = Vue.createApp({
    data() {
        return {
            title: "Comedy Events",
            tickets: 3,
            image: "http://www.fillmurray.com/200/200",
            details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
            cart: 0,
        }
    },
    methods: {
        updateCart(number = 1) {
            this.cart += number
            this.tickets -= number
        }
    },
})