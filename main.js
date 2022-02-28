const app = Vue.createApp({
    data() {
        return {
            title: "Comedy Events",
            tickets: 3,
            image: "http://www.fillmurray.com/200/200",
            details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
            cart: 0,
            ticketTypes : [
                { id: "bronzeTicket", name: "Bronze", image: "http://www.fillmurray.com/198/198", tickets: 3, descriptions: "This is a bronze level fun ticket" },
                { id: "silverTicket", name: "Silver", image: "http://www.fillmurray.com/202/202", tickets: 10, descriptions: "This is some silver level fun" },
                { id: "goldTicket", name: "Gold", image: "http://www.fillmurray.com/203/203", tickets: 40, descriptions: "Go all in - this is teh gold level!" },
            ],
            hidden: false,
            message: '',
        }
    },
    methods: {
        updateCart(number = 1) {
            this.cart += number
            this.tickets -= number
        },
        updateImage(id) {
            this.image = this.ticketTypes.filter(type => type.id === id)[0].image
        }
    },
    computed: {
        soldOut() {
            return this.tickets === 0;
        }
    }
})