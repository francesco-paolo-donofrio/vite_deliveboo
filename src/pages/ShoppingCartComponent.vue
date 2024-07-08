<template>
    <div>
      <div v-for="product in products" :key="product.id" class="product-card">
        <h3>{{ product.name }}</h3>
        <p>Prezzo: {{ product.price }}€</p>
        <button @click="decreaseQuantity(product)">-</button>
        <span>{{ getQuantityInCart(product.id) }}</span>
        <button @click="increaseQuantity(product)">+</button>
        <button @click="addToCart(product)">Aggiungi al carrello</button>
      </div>
  
      <div class="cart">
        <h2>Carrello</h2>
        <div v-for="item in cart" :key="item.id">
          <p>{{ item.name }} - Quantità: {{ item.quantity }} - Totale: {{ item.price * item.quantity }}€</p>
        </div>
        <p>Totale carrello: {{ cartTotal }}€</p>
      </div>
    </div>
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
      saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
      },
      addToCart(product) {
        const cartItem = this.cart.find(item => item.id === product.id);
        if (cartItem) {
          cartItem.quantity++;
        } else {
          this.cart.push({ ...product, quantity: 1 });
        }
        this.saveCart();
        this.updateQuantity(product.id, cartItem ? cartItem.quantity : 1);
      },
      removeFromCart(productId) {
        const index = this.cart.findIndex(item => item.id === productId);
        if (index !== -1) {
          this.cart.splice(index, 1);
          this.saveCart();
        }
      },
      updateQuantity(productId, quantity) {
        axios.post(store.apiBaseUrl + '/update-quantity', {
          id: productId,
          quantity: quantity
        })
          .then((res) => {
            console.log(res.data.results);
            this.updateCartItem(productId, quantity);
          })
          .catch(error => {
            console.error('Errore nell\'aggiornamento della quantità:', error);
          });
      },
      updateCartItem(productId, quantity) {
        const cartItem = this.cart.find(item => item.id === productId);
        if (cartItem) {
          cartItem.quantity = quantity;
          if (quantity <= 0) {
            this.removeFromCart(productId);
          }
        }
        this.saveCart();
      },
      decreaseQuantity(product) {
        const cartItem = this.cart.find(item => item.id === product.id);
        if (cartItem && cartItem.quantity > 1) {
          this.updateQuantity(product.id, cartItem.quantity - 1);
        } else if (cartItem) {
          this.removeFromCart(product.id);
        }
      },
      increaseQuantity(product) {
        const cartItem = this.cart.find(item => item.id === product.id);
        if (cartItem) {
          this.updateQuantity(product.id, cartItem.quantity + 1);
        } else {
          this.addToCart(product);
        }
      },
      getQuantityInCart(productId) {
        const cartItem = this.cart.find(item => item.id === productId);
        return cartItem ? cartItem.quantity : 0;
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