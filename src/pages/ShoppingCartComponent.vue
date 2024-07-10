<template>
    <div class="cart text-center mt-3">
        <div v-if="this.store.cart.length < 1">
            <h2>Carrello... vuoto!</h2>
            <div>Ordina ora il tuo piatto preferito!</div>
            <a href="/">Clicca qui e scegli il ristorante</a>
        </div>
        <div v-else>
            <h2>Carrello</h2>
            <div>{{ restaurantName }}</div>
            <div v-for="item in cart" :key="item.id">
                {{ item.name }} - {{ item.price }} x {{ item.quantity }} 
            </div>
            <div class="my-2">Totale ordine: {{ totalAmount }} €</div>

            <!-- FORM PER DATI CLIENTE -->
            <div class="container">
                <form @submit.prevent="pay">
                    <!-- NOME -->
                    <div class="text-secondary mb-2 text-start">
                        <label for="name" class="form-label text-dark">Nome*</label>
                        <input type="text" name="name" class="form-control" id="name"
                            v-model="customer.name" minlength="3" maxlength="200" placeholder="Inserisci il tuo nome" required>
                        <div id="nameMessage" class="error-message"></div>
                    </div>

                    <!-- COGNOME -->
                    <div class="text-secondary mb-2 text-start">
                        <label for="surname" class="form-label text-dark">Cognome*</label>
                        <input type="text" class="form-control" id="surname" name="surname"
                            v-model="customer.surname" minlength="3" maxlength="200" placeholder="Inserisci il tuo cognome" required>
                        <div id="surnameMessage" class="error-message"></div>
                    </div>
                    
                    <!-- TELEFONO -->
                    <div class="text-secondary mb-2 text-start">
                        <label for="phone" class="form-label text-dark">Numero di telefono*</label>
                        <input type="tel" class="form-control" id="phone" name="phone"
                            v-model="customer.phone" minlength="3" maxlength="200" placeholder="Numero di telefono" required>
                        <div id="phoneMessage" class="error-message"></div>
                    </div>

                    <!-- EMAIL -->
                    <div class="text-secondary mb-2 text-start">
                        <label for="email" class="form-label text-dark">Indirizzo email*</label>
                        <input type="email" class="form-control" id="email" name="email"
                            v-model="customer.email" minlength="3" maxlength="200" placeholder="Inserisci il tuo email" required>
                        <div id="emailMessage" class="error-message"></div>
                    </div>

                    <!-- INDIRIZZO -->
                    <div class="text-secondary mb-2 text-start">
                        <label for="address" class="form-label text-dark">Indirizzo di consegna*</label>
                        <input type="text" class="form-control" id="address" name="address"
                            v-model="customer.address" minlength="3" maxlength="200" placeholder="Inserisci il tuo indirizzo" required>
                        <div id="addressMessage" class="error-message"></div>
                    </div>

                    <div class="mt-3 text-dark text-start"><span>* Campi obbligatori</span></div>
                </form>
            </div>

            <div id="dropin-container" class="container"></div>
            <div class="d-flex justify-content-center gap-2">
                <button @click="pay">Completa l'acquisto</button>
                <button @click="emptyCart">Svuota Carrello</button>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
import dropin from 'braintree-web-drop-in';

export default {
    data() {
        return {
            clientToken: null,
            instance: null,
            store,
            products: [],
            cart: [],
            restaurantName: '',
            customer: {
                name: '',
                surname: '',
                phone: '',
                email: '',
                address: ''
            }
        };
    },
    methods: {
        getProducts() {
            axios.get(store.apiBaseUrl + '/products')
                .then((res) => {
                    this.products = res.data.results;
                })
                .catch(error => {
                    console.error('Errore nel recupero dei prodotti:', error);
                });
        },
        loadCart() {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                this.cart = JSON.parse(savedCart);
                if (this.cart.length > 0) {
                    this.getRestaurantName(this.cart[0].id);
                }
            }
        },
        getRestaurantName(productId) {
            axios.get(`http://127.0.0.1:8000/api/products/${productId}/restaurant`)
                .then(response => {
                    this.restaurantName = response.data.restaurant.name;
                })
                .catch(error => {
                    console.error('Errore nel recupero del nome del ristorante:', error);
                });
        },
        emptyCart() {
            this.store.cart = [];
            localStorage.clear();
            location.reload();
        },
        getClientToken() {
            axios.get('http://127.0.0.1:8000/api/braintree/token')
                .then(response => {
                    this.clientToken = response.data.token;
                    this.initializeBraintree();
                })
                .catch(error => {
                    console.error('Error fetching client token:', error);
                });
        },
        initializeBraintree() {
            dropin.create({
                authorization: this.clientToken,
                container: '#dropin-container'
            }, (error, instance) => {
                if (error) {
                    console.error('Error initializing Braintree Drop-in:', error);
                    return;
                }
                this.instance = instance;
            });
        },
        pay() {
            if (!this.instance) {
                console.error('Braintree instance is not initialized');
                return;
            }

            this.instance.requestPaymentMethod((error, payload) => {
                if (error) {
                    console.error('Error requesting payment method:', error);
                    return;
                }

                axios.post('http://127.0.0.1:8000/api/braintree/checkout', {
                    payment_method_nonce: payload.nonce,
                    amount: this.totalAmount,
                    customer: this.customer
                })
                    .then(response => {
                        if (response.data.success) {
                            //* qui bisogna stabilire dove reindirizzare l'utente
                            alert('Payment successful!');
                        } else {
                            alert('Payment failed: ' + response.data.message);
                        }
                    })
                    .catch(error => {
                        console.error('Error processing payment:', error);
                    });
            });
        }
    },
    computed: {
        totalAmount() {
            return this.cart.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0).toFixed(2);
        }
    },
    mounted() {
        this.getClientToken();
    },
    created() {
        this.getProducts();
        this.loadCart();
        console.log(this.store.cart);
    }
};
</script>

<style lang="scss" scoped>
.f-d-first-container {
    width: calc(100% / 2 - 40px);
    height: 500px;
}

.f-d-second-container {
    width: calc(100% / 2 - 40px);
    height: 500px;
}

.f-d-container {
    width: 100%;
    height: 600px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 20px;
    margin-bottom: 30px;
}

.braintree-sheet__content--form .braintree-form__flexible-fields{
    display: inline-block;
}

</style>