<template>
    <h2 class="container my-3">Riepilogo del tuo ultimo ordine:</h2>
    <div class="container">
        <div class="my-3">Il tuo piatto è servito dal ristorante {{ this.restaurantName }}</div>
        <table class="table borderless">
            <thead>
                <tr>
                    <th scope="col">Prodotto</th>
                    <th scope="col">Quantità</th>
                    <th scope="col" class="text-center">Prezzo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in store.prevOrder" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td class="text-center">{{ item.quantity }}</td>
                    <td class="d-flex justify-content-around">
                        <span>
                            x {{ item.price }} €
                        </span>
                        <span> = </span>
                        <span>
                            {{ this.totalPrice(item) }} €
                        </span> 
                    </td>
                </tr>
                <tr class="text-center fw-bold">
                    <td></td>
                    <td>Totale</td>
                    <td>{{ this.totalAmount() }} €</td>
                </tr>
            </tbody>
        </table>
        <h3 class="text-center">Grazie per averci scelto!</h3>
        <div class="text-center mb-3">A breve riceverai una mail di conferma con i dettagli del tuo ordine</div>
    </div>
    
    <FooterComponent id="footer"></FooterComponent>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
import HeroComponent from '../components/HeroComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
    name: 'HomePageComponent',
    components: {
        HeroComponent,
        FooterComponent

    },
    data() {
        return {
            store,
            restaurantId: "",
            restaurantName: "",
        }
    },
    mounted() {
        // console.log(this.store.prevOrder);
        // this.getRestaurantId();
        // console.log(this.restaurantId);
        // this.getSingleRestaurant();
    },
    methods: {
        totalAmount() {
            for (let i = 0; i < this.store.prevOrder.length; i++) {
                return (this.store.prevOrder[i].price * this.store.prevOrder[i].quantity).toFixed(2);
            }
        },
        totalPrice(item) {
            return (item.price * item.quantity).toFixed(2);
        },
        getSingleRestaurant() {
            axios.get(`${this.store.apiBaseUrl}/restaurants/${this.restaurantId}`).then(res => {
                this.restaurantName = res.data.results.name;
            });
        },
        getRestaurantId(){
            this.restaurantId = this.store.prevOrder[0].restaurant_id;
        }
    }
}
</script>

<style lang="scss" scoped>
ul {
    padding: 0;
}

li {
    list-style: none;
}

.table.borderless th,
.table.borderless td {
    border: none;
}

#footer{
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>