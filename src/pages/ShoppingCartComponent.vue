<template>
    <div>  
      <div class="cart">
        <h2>Carrello</h2>
        <div v-for="item in cart" :key="item.id">
          <p>{{ item.name }} - Quantità: {{ item.quantity }} - Totale: {{ item.price * item.quantity }}€</p>
        </div>
        <p>Totale carrello: {{ cartTotal }}€</p>
      </div>
    </div>
    <button @click="emptyCart">Svuota Carrello</button>
  </template>
  
  <script>
  import { store } from '../store';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        store,
        products: [],
        cart: []
      }
    },
    computed: {
      cartTotal() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      }
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
        }
      },
      emptyCart(){
        this.store.cart= [];
        localStorage.clear();
        location.reload();
      }
      
    },
    created() {
      this.getProducts();
      this.loadCart();
    }
  }
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

</style>