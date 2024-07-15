<template>
<div class ="shadow-container my-4">
    <div class="card-2 text-center container my-3">
        <i class="pt-4 fa-regular fa-circle-check"></i>
        <h5 class="text-center pt-4">Il pagamento è andato a buon fine
        <br>Grazie per averci scelto!</h5>
        <h6 class="text-center">L'ordine è stato preso in carico da:<br>{{ store.prevname }}</h6>

    <h6 id="order-summary" class="ps-4 my-3">Riepilogo dell'ordine:</h6>
    <div class="container">
       
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
        <div class="px-2"><small id="footer-text" class="text-center">A breve riceverai un'email di conferma con i dettagli dell'ordine</small></div>
       <div class="countdown container my-3 text-center">Tra {{ countdown }} secondi verrai reindirizzato alla <a href="/">homepage</a> per scoprire altri fantastici ristoranti</div>
    </div>
    </div>
   
</div>
    
    <FooterComponent id="footer"></FooterComponent>
</template>

<script>
import { store } from '../store';
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
            countdown: 20
        }
    },
    mounted() {
        this.startCountdown();
        // console.log(this.store.prevOrder);
        this.getRestaurantId();
        // console.log(this.restaurantId);
        this.getSingleRestaurant();
    },
    methods: {
        startCountdown() {
            const interval = setInterval(() => {
                if (this.countdown > 0) {
                    this.countdown--;
                } else {
                    clearInterval(interval);
                    // Redirigi alla pagina del carrello
                    window.location.href = '/';
                }
            }, 2000);
        },
        totalAmount() {
            let sum = 0;
            for (let i = 0; i < this.store.prevOrder.length; i++) {
               sum += this.store.prevOrder[i].price * this.store.prevOrder[i].quantity;
            }
            return sum.toFixed(2);
        },
        totalPrice(item) {
            return (item.price * item.quantity).toFixed(2);
        },
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

.shadow-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 0; 
}

.card-2 {
    width: 800px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: rgba(0, 0, 0, 0.4) -5px 5px, rgba(0, 0, 0, 0.3) -10px 10px, rgba(0, 46, 170, 0.2) -15px 15px, rgba(0, 0, 0, 0.1) -10px 10px, rgba(0, 0, 0, 0.05) 0 0;
    margin: 0 auto;
    padding: 20px; 
}

.fa-circle-check {
    color: green;
    font-size: 4.5em;
}

h5 {
    font-size: 1.5em;
    text-align: center;
}

h6 {
    font-size: 1em;
    text-align: center;
}

#footer-text {
    font-size: 1em;
    text-align: center;
}

.countdown {
    font-size: 0.5em;
    text-align: center;
}
/* MEDIA QUERIES' */

/* Tablet (768px e oltre) */
@media (max-width: 768px) {
    .card-2 {
        width: 600px;
        margin: 20px;
    }

    .fa-circle-check {
        font-size: 3em;
    }

    h5 {
        font-size: 1.5em;
    }

    h6 {
        font-size: 1.2em;
    }

    #footer-text {
        font-size: 0.8em;
    }

    .countdown {
        font-size: 0.5em;
    }
}

/* Smartphone medi (480px e oltre) */
@media (max-width: 480px) {
    .card-2 {
        width: 400px;
        margin: 15px; 
    }

    .fa-circle-check {
        font-size: 2.5em;
    }

    h5 {
        font-size: 1.2em;
    }

    h6 {
        font-size: 1em;
    }

    #footer-text {
        font-size: 0.7em;
    }

    .countdown {
        font-size: 0.4em;
    }
}

/* Smartphone piccoli (320px e oltre) */
@media (max-width: 320px) {
    .card-2 {
        width: 300px;
        margin: 10px; 
    }

    .fa-circle-check {
        font-size: 2em;
    }

    h5 {
        font-size: 0.8em;
    }

    h6 {
        font-size: 0.6em;
    }

    #footer-text {
        font-size: 0.5em;
    }

    .countdown {
        font-size: 0.4em;
    }

    .table {
        display: none;
    }

    #order-summary{
        display: none;
    }
}
</style>
