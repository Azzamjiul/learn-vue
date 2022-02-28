app.component("ticket-details", {
    props : {
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
                    <option v-for="number in tickets" :value="number">{{number}}</option>
                </select>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            ticketsToBuy: 0
        }
    }
});
