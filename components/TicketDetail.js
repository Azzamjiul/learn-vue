app.component("ticket-detail", {
    props: {
        name: String,
        description: String,
        tickets: Number
    },
    template: `
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{name}}</h5>
                <p class="card-text">{{description}}</p>
                <select class="form-control" v-model="ticketsToBuy">
                    <option value=0 >0</option>
                    <option v-for="number in ticketsLeft" :value="number">{{number}}</option>
                </select>

                <button class="btn btn-success mt-3" v-if="ticketsToBuy > 0" @click=addTicket(ticketsToBuy) >Buy Tickets</button>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            ticketsToBuy: 0,
            ticketsLeft: this.tickets
        }
    },
    methods: {
        addTicket(num) {
            this.ticketsLeft -= num;
            this.$emit('buyTickets', this.ticketsToBuy, this.name);
            this.ticketsToBuy = 0;
        }
    },
});
