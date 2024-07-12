<template>
    <div class="cart text-center mt-3">
        <div v-if="this.store.cart.length < 1">
            <h2>Carrello... vuoto!</h2>
            <div>Ordina ora il tuo piatto preferito!</div>
            <a href="/">Clicca qui e scegli il ristorante</a>
        </div>
        <div v-else>
            <h2>Carrello</h2>
            <div>Stai ordinando da:</div>
            <h4>{{ store.restaurantname }}</h4>
            <div v-for="item in store.cart" :key="item.id">
                {{ item.name }} - {{ item.price }} x {{ item.quantity }}
            </div>
            <div class="my-2 f-d-border-bottom text-center">Totale ordine: {{ totalAmount }} €</div>

            <!-- FORM PER DATI CLIENTE -->
            <div class="container">
                <form @submit.prevent="pay">
                    <!-- NOME -->
                    <div class="text-secondary mb-2 text-start">
                        <label for="name" class="form-label text-dark">Nome*</label>
                        <input type="text" name="name" class="form-control" id="name" v-model="customer.name"
                            minlength="3" maxlength="200" placeholder="Inserisci il tuo nome"
                            :class="{ 'is-invalid': errors.name }" required>
                        <div id="nameMessage" class="error-message text-danger">{{ errors.name }}</div>
                    </div>

                    <!-- COGNOME -->
                    <div class="text-secondary mb-2 text-start">
                        <label for="surname" class="form-label text-dark">Cognome*</label>
                        <input type="text" class="form-control" id="surname" name="surname" v-model="customer.surname"
                            minlength="3" maxlength="200" placeholder="Inserisci il tuo cognome"
                            :class="{ 'is-invalid': errors.surname }" required>
                        <div id="surnameMessage" class="error-message text-danger">{{ errors.surname }}</div>
                    </div>

                    <!-- TELEFONO -->
                    <div class="text-secondary mb-2 text-start">
                        <label for="phone" class="form-label text-dark">Numero di telefono*</label>
                        <input type="tel" class="form-control" id="phone" name="phone" v-model="customer.phone"
                            minlength="3" maxlength="200" placeholder="Numero di telefono"
                            :class="{ 'is-invalid': errors.phone }" required>
                        <div id="phoneMessage" class="error-message text-danger">{{ errors.phone }}</div>
                    </div>

                    <!-- EMAIL -->
                    <div class="text-secondary mb-2 text-start">
                        <label for="email" class="form-label text-dark">Indirizzo email*</label>
                        <input type="email" class="form-control" id="email" name="email" v-model="customer.email"
                            minlength="3" maxlength="200" placeholder="Inserisci il tuo email"
                            :class="{ 'is-invalid': errors.email }" required>
                        <div id="emailMessage" class="error-message text-danger">{{ errors.email }}</div>
                    </div>

                    <!-- INDIRIZZO -->
                    <div class="text-secondary mb-2 text-start">
                        <label for="address" class="form-label text-dark">Indirizzo di consegna*</label>
                        <input type="text" class="form-control" id="address" name="address" v-model="customer.address"
                            minlength="3" maxlength="200" placeholder="Inserisci il tuo indirizzo"
                            :class="{ 'is-invalid': errors.address }" required>
                        <div id="addressMessage" class="error-message text-danger">{{ errors.address }}</div>
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

            //cart: [],
            restaurantName: '',
            customer: {
                name: '',
                surname: '',
                phone: '',
                email: '',
                address: ''
            },
            errors: {
                name: '',
                surname: '',
                phone: '',
                email: '',
                address: ''
            },
            errorMessages: {}
        };
    },
    methods: {
        loadCart() {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                this.store.cart = JSON.parse(savedCart);
                // if (this.cart.length > 0) {
                //     this.getRestaurantName(this.cart[0].restaurant_id);
                // }
            }
        },
        emptyCart() {
            this.store.cart = [];
            localStorage.clear();
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
        //Validazioni FE
        validateForm() {
            let isValid = true;
            const regexPhone = /^[0-9]*$/;
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Name
            if (this.customer.name.trim().length < 3) {
                this.errors.name = 'Il nome deve essere almeno di 3 caratteri.';
                isValid = false;
            }

            if (this.customer.name.trim() == "") {
                this.errors.name = 'Questo campo è obbligatorio.';
                isValid = false;
            }

            // Surname
            if (this.customer.surname.length < 3) {
                this.errors.surname = 'Il cognome deve essere almeno di 3 caratteri.';
                isValid = false;
            }

            if (this.customer.surname.trim() == "") {
                this.errors.surname = 'Questo campo è obbligatorio.';
                isValid = false;
            }

            // Phone
            if (!regexPhone.test(this.customer.phone)) {
                this.errors.phone = 'Il numero di telefono deve contenere solo numeri.';
                isValid = false;
            }

            if (this.customer.phone.length != 10) {
                this.errors.phone = 'Hm... Il numero non sembra corretto: deve essere di 10 cifre';
                isValid = false;
            }

            if (this.customer.phone.trim() == "") {
                this.errors.phone = 'Questo campo è obbligatorio.';
                isValid = false;
            }

            // Email
            if (!regexEmail.test(this.customer.email)) {
                this.errors.email = 'Indirizzo email non valido.';
                isValid = false;
            }

            if (this.customer.email.trim() == "") {
                this.errors.email = 'Questo campo è obbligatorio.';
                isValid = false;
            }

            // Address
            if (this.customer.address.length < 3) {
                this.errors.address = 'L\'indirizzo deve essere almeno di 3 caratteri.';
                isValid = false;
            }

            if (this.customer.address.trim() == "") {
                this.errors.address = 'Questo campo è obbligatorio.';
                isValid = false;
            }

            return isValid;
        },
        //Gestione di messaggi di errore per validazione BE (applica solo classe is-invalid al campo input)
        handleValidationErrors(errors) {
        // Resetta i messaggi di errore
        this.errorMessages = {};

        // Assegna i nuovi messaggi di errore
        for (const key in errors) {
            if (errors.hasOwnProperty(key)) {
                this.errorMessages[key] = errors[key];
            }
        }

        // Scorri sui campi e applica la classe di errore se necessario
        for (const key in this.customer) {
            if (this.customer.hasOwnProperty(key)) {
                const input = document.getElementById(key);
                if (errors[`customer.${key}`]) {
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                }
            }
        }
    }
        ,
        pay() {
            if (!this.instance) {
                console.error('Braintree instance is not initialized');
                return;
            }

            if (!this.validateForm()) {
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
                    customer: this.customer,
                    products: this.store.cart
                })
                    .then(response => {
                        if (response.data.success) {
                            this.store.prevOrder = this.store.cart;
                            this.store.cart = [];
                            this.$router.push({ path: '/thank-you' });
                            
                        } else {
                            if (response.data.errors) {
                                this.handleValidationErrors(response.data.errors);
                            } else {
                                this.$router.push({ path: '/oh-no'});
                            }
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
            return this.store.cart.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0).toFixed(2);
        }
    },
    mounted() {
        this.getClientToken();
    },
    created() {
        this.loadCart();
        console.log(this.store.cart);
        console.log(this.store.restaurantname);
    }
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables' as *;

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


.braintree-sheet__content--form.braintree-form__flexible-fields {
    flex-direction: column !important;
}

.f-d-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: calc(100% - 20px);
    border-radius: 10px;
    border: 4px solid $background-fourth-color;
    background-color: $background-primary-color;
    color: white;
    padding: 10px;
}

.f-d-border-bottom {
    margin: 0 auto;
    width: 50%;
    height: 5px;
    background-color: $background-fourth-color;
    border: 1px solid $background-fourth-color;
    border-radius: 5px;
    margin: 5px 0 5px 0;
}

.is-invalid {
    border-color: red !important;
}

@media screen and (max-width: 320px) {}
</style>