<template>
    <div v-if="restaurant">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <h1 class="text-center"><strong class="gradientColor">{{ restaurant.name }}</strong></h1>
                    <div>
                        <div class="d-flex justify-content-between align-items-center gap-3 f-d-mq-sm">
                            <div class="f-d-container-img">
                                <img v-if="restaurant.image" class="f-d-img-fluid"
                                    :src="store.imgBasePath + restaurant.image" :alt="restaurant.name">
                                <img v-else src="../public/images/placeholder-restaurant.png" :alt="restaurant.name">
                            </div>
                            <div class="ps-3">
                                <h3 class=""><em class="f-d-primary-color">Info utili</em></h3>
                                <p><em>{{ restaurant.description }}</em></p>
                                <p>Indirizzo: {{ restaurant.address }}</p>
                            </div>
                        </div>
                        <div>

                            <div class="ps-3">
                                <h3 class="text-center"><em class="f-d-primary-color">Tipologie</em></h3>
                                <div class="f-d-mq-320-576 ">
                                    <ul class="d-flex flex-wrap justify-content-center align-items-center p-0 list-unstyled">
                                        <li v-for="(item, index) in restaurant.types"
                                            :key="index">
                                            <div class="f-d-mini-container-type display-flex flex-column">
                                                <img class="img-fluid" :src="store.imgBasePath + item.image"
                                                    :alt="item.name">
                                            </div>
                                            <div>
                                                <p>
                                                    {{ item.name }}
                                                </p>
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <div class="pt-5">
                        <div class="f-d-cart container d-flex flex-column justify-content-center align-items-center">
                            <div class=" cart d-flex flex-column align-items-center justify-content-center">
                                <h2>Carrello</h2>
                                <div v-for="item in store.cart" :key="item.id">
                                    <p>x{{ item.quantity }}-{{ item.name }} - Totale: {{ item.price * item.quantity }}€
                                    </p>
                                </div>
                                <p>Totale carrello: {{ cartTotal() }}€</p>
                            </div>
                            <div class="buttons d-flex align-items-center justify-content-center gap-3">
                                <button class="btn btn-danger" @click="emptyCart">Svuota</button>
                                <button class="btn btn-success">Procedi</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">

            <h3 class="text-center text-uppercase"><em class="f-d-primary-color">Menù</em></h3>

            <ul class="col-sm-12 col-md-6 col-lg-4">
                <li class="f-d-mini-container" v-for="(item, index) in restaurant.products" :key="index"
                    @click="openModal(item)">

                    <img class="img-fluid" :src="store.imgBasePath + item.image" :alt="item.name">

                </li>
            </ul>

        </div>




        <!-- Modal -->
        <div v-if="showModal" class="modal fade show d-block" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true" style="background-color: rgba(0, 0, 0, 0.5);">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header d-flex justify-content-between">
                        <h5 class="modal-title" id="exampleModalLabel">{{ selectedDish.name }} di {{ restaurant.name }}
                        </h5>
                        <button type="button" class="f-d-close" @click="closeModal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex flex-column align-items-center justify-content-center">
                            <img v-if="selectedDish.image" :src="store.imgBasePath + selectedDish.image"
                                :alt="selectedDish.name" class="f-d-modal-img-fluid">


                        </div>

                    </div>
                    <div v-if="selectedDish.id" class="quantity-control">
                        <div class="product-card d-flex flex-column align-items-center justify-content-center">
                            <h3>{{ selectedDish.name }}</h3>
                            <p v-if="selectedDish.description"><em>{{
                                selectedDish.description
                                    }}</em></p>
                            <p>Prezzo: {{ selectedDish.price }}€</p>
                            <div class="d-flex justify-content-center align-items-center gap-2">
                                <button class="btn btn-danger" @click="decreaseQuantity(selectedDish)">-</button>
                                <span>{{ getQuantityInCart(selectedDish.id) }}</span>
                                <button class="btn btn-success" @click="increaseQuantity(selectedDish)">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex flex-column justify-content-center align-items-center">
                        <p>{{ getOrderSummary() }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'RestaurantDetailComponent',
    props: ['id'],
    data() {
        return {
            store,
            restaurant: {},
            selectedDish: {},
            showModal: false,
            checkCart: false,
            cart: [],
        };
    },
    methods: {
        computed: {

        },
        cartTotal() {
            return this.store.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        getSingleRestaurant() {
            axios.get(`${this.store.apiBaseUrl}/restaurants/${this.id}`).then(res => {
                this.restaurant = res.data.results;
                console.log(this.restaurant);
            });
        },
        openModal(dish) {
            this.selectedDish = dish;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.selectedDish = {};
        },
        decreaseQuantity(product) {
            let cartItem = this.store.cart.find(item => item.id === product.id);
            if (cartItem && cartItem.quantity > 1) {
                cartItem.quantity--;
            } else if (cartItem && cartItem.quantity === 1) {
                this.store.cart.splice(this.store.cart.indexOf(cartItem), 1);
                alert(`Hai rimosso ${product.name} di ${this.restaurant.name} dal carrello`);
            } else if (cartItem === undefined) {
                alert(`${product.name} di ${this.restaurant.name} non è presente nel carrello`);
            }
            this.saveCart();
            console.log(this.store.cart);
            console.log(localStorage, 'localstorage');
        },
        increaseQuantity(product) {
            let cartItem = this.store.cart.find(item => item.id === product.id);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                this.addToCart(product);
            }
            this.saveCart()
            if (product.restaurant_id != this.store.cart[0].restaurant_id) {
                this.store.cart.splice(this.store.cart.indexOf(cartItem), 1)
                this.saveCart()
                alert('Hai gia altri articoli di altri ristoranti nel carrello, svuota il carrello o procedi con il tuo ordine!')
            }
            console.log(product);
            console.log(this.store.cart[0].restaurant_id);
            // console.log(this.store.cart)
            // console.log(localStorage, 'localstorage');
        },
        getQuantityInCart(productId) {
            const cartItem = this.store.cart.find(item => item.id === productId);
            return cartItem ? cartItem.quantity : 0;
        },
        addToCart(product) {
            const cartItem = this.store.cart.find(item => item.id === product.id);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                this.store.cart.push({ ...product, quantity: 1 });
            }

        },
        loadCart() {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                this.store.cart = JSON.parse(savedCart);
            }
            console.log(this.store.cart);
        },
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.store.cart));
        },
        checkcart() {
            console.log(this.checkCart);
        },
        emptyCart() {
            this.store.cart = [];
            localStorage.clear();
            location.reload();
        },
        // metodo per aggiornare i piatti ordinati nella modale
        getOrderSummary() {
            const quantity = this.getQuantityInCart(this.selectedDish.id);
            if (quantity === 0) {
                return 'Nessun piatto ordinato';
            } else if (quantity === 1) {
                return 'Hai ordinato 1 piatto';
            } else {
                return `Hai ordinato ${quantity} piatti`;
            }
        }
    },
    mounted() {
        this.getSingleRestaurant();
        this.loadCart();
    },
    created() {
    },

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables' as *;


.f-d-first-container {
    width: calc(70% - 40px);
    //height: 500px;
}

.f-d-second-container {
    width: calc(30% - 40px);
    //height: 500px;
}

.f-d-container {
    width: 100%;
    //height: 600px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 20px;
    margin-bottom: 30px;
}

.f-d-container-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 60%;
    height: 40%;
    aspect-ratio: 1/1;
}


.f-d-mini-container {
    aspect-ratio: 1/1;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
    background-color: lightgray;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    li {
        list-style-type: none;
    }

    &:hover {
        opacity: 0.7;
    }
}

.f-d-mini-container-type {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.modal.fade.show {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
}

.f-d-modal-img-fluid {
    width: 50%;
    height: 50%;
    border-radius: 50%;
}

.f-d-close {
    border: none;
    background-color: transparent;
    font-size: 40px;
}

.f-d-img-fluid {
    min-height: 60%;
    min-width: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: center;
}

.f-d-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 50%;
    height: 50%;
    border-radius: 10px;
    border: 2px solid black;
    background-color: white;
}

// mediaquery

@media screen and (max-width: 1200px) {
}

@media screen and (max-width: 576px) {

    h1 {
        padding-top: 10px;
    }

    .f-d-container-mq {
        height: 200px;
    }

    .f-d-mq-sm {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .f-d-cart {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 90%;
        border-radius: 10px;
        border: 2px solid black;
        background-color: white;

        margin-bottom: 20px;
    }

    .f-d-mq-320 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .f-d-mini-container {
        width: 80%;
        margin: 0 auto;
        gap: 10px;
        aspect-ratio: 1/1;
        cursor: pointer;
        border-radius: 50%;
        overflow: hidden;
        background-color: lightgray;
    }

    .f-d-mini-container-type {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        list-style-type: none;
    }
}

@media screen and (max-width: 320px) {

    .f-d-mq-sm {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .f-d-cart {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 100%;
        height: 90%;
        border-radius: 10px;
        border: 2px solid black;
        background-color: white;

        margin-bottom: 20px;
    }

    .f-d-mq-320-576 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .f-d-mini-container-type {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        gap: 10px;
    }

}
</style>