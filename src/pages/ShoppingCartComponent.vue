<template>
    <div>
        <h2>Shopping Cart</h2>
        <div v-for="item in cartItems" :key="item.id">
            {{ item.name }} - {{ item.price }} x {{ item.quantity }}
        </div>
        <div id="dropin-container"></div>
        <button @click="pay">Pay {{ totalAmount }} USD</button>
    </div>
</template>

<script>
import axios from 'axios';
import dropin from 'braintree-web-drop-in';

export default {
    data() {
        return {
            clientToken: null,
            instance: null,
            cartItems: [
                { id: 1, name: 'Item 1', price: 5.00, quantity: 2 },
                { id: 2, name: 'Item 2', price: 10.00, quantity: 1 }
            ]
        };
    },
    computed: {
        totalAmount() {
            return this.cartItems.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0).toFixed(2);
        }
    },
    mounted() {
        this.getClientToken();
    },
    methods: {
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
                    amount: this.totalAmount
                })
                    .then(response => {
                        if (response.data.success) {
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
    }
};
</script>