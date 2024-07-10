<template>
    <div v-if="restaurant">
        <div class="container">
            <div class="row">
                <div class="col-xl-9 col-sm-12">
                    <h1 class="text-center py-3"><strong class="gradientColor">{{ restaurant.name }}</strong></h1>
                    <div>
                        <div class="d-flex justify-content-center align-items-center gap-3 f-d-mq-sm">
                            <div class="f-d-container-img">
                                <img v-if="restaurant.image" class="f-d-img-fluid"
                                    :src="store.imgBasePath + restaurant.image" :alt="restaurant.name">
                                <img v-else src="../public/images/placeholder-restaurant.png" :alt="restaurant.name">
                            </div>
                            <div id="info-container">
                                <h3 class=""><em class="f-d-primary-color">Info utili</em></h3>
                                <p><em>{{ restaurant.description }}</em></p>
                                <p>Indirizzo: {{ restaurant.address }}</p>
                                <div id="types-container">
                                    <h3 class=""><em class="f-d-primary-color">Tipologie</em></h3>
                                    <div class="f-d-mq-320-576 ">
                                        <ul
                                            class="d-flex flex-wrap justify-content-center align-items-center p-0 list-unstyled">
                                            <li v-for="(item, index) in restaurant.types" :key="index">
                                                <div class="f-d-mini-container-type display-flex flex-column">
                                                    <img class="img-fluid" :src="store.imgBasePath + item.image"
                                                        :alt="item.name">
                                                </div>
                                                <div class="text-center">
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
                </div>
                <div id="suggested" class="col-xl-3 col-sm-12 f-d-bg-gradient-secondary">
                    <div>
                        <h4 class="text-center text-uppercase">Info di {{ restaurant.name }}</h4>
                        <p><em class="fw-bold ">{{ restaurant.description }}</em></p>
                        <p>Indirizzo: {{ restaurant.address }}</p>
                        <p>P.IVA {{ restaurant.vat }}</p>
                    </div>
                    <div>
                        <h4 class="text-center text-uppercase">Tipologie di {{ restaurant.name }}</h4>
                        <ul class="d-flex flex-wrap justify-content-center align-items-center p-0 list-unstyled">
                            <li v-for="(item, index) in restaurant.types" :key="index">
                                <div class="f-d-mini-container-type display-flex flex-column">
                                    <img class="img-fluid" :src="store.imgBasePath + item.image" :alt="item.name">
                                </div>
                                <div class="text-center">
                                    <p>
                                        {{ item.name }}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>

                        <h3 class="text-uppercase">Segui {{ restaurant.name }} anche su</h3>
                        <div class="text-center"><i class="fa-brands fa-facebook"></i> | <i class="fa-brands fa-tiktok"></i> | <i
                                class="fa-brands fa-instagram"></i></div>

                    </div>
                </div>
            </div>
        </div>

        <div class="f-d-bg-gradient">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-sm-12 ">
                        <h3 class="text-center text-uppercase py-3"><em class="text-white">Menù</em></h3>
                        <div class="d-flex align-items-center justify-content-center flex-wrap">
                            <div class="f-d-card col-sm-12 col-xl-2" v-for="(item, index) in restaurant.products" :key="index">
                                <div class="f-d-mini-container">
                                    <img @click="openModal(item)" class="img-fluid"
                                        :src="store.imgBasePath + item.image" :alt="item.name">
                                </div>
                                <div class="d-flex flex-column align-items-center justify-content-center gap-0">
                                    <p class="text-center text-uppercase fw-bold single-line pointer">{{ item.name }}
                                    </p>
                                    <p class="text-center text-uppercase fw-bold">{{ item.price }}€</p>
                                    <div class="d-flex justify-content-center align-items-center gap-2 my-2">
                                        <button class="btn btn-sm btn-danger" @click="decreaseQuantity(item)">-</button>
                                        <span>{{ getQuantityInCart(item.id) }}</span>
                                        <button class="btn btn-sm btn-success"
                                            @click="increaseQuantity(item)">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-xl-4 col-sm-12">
                        <div id="cart-container">
                            <div>
                                <div
                                    class="f-d-cart container d-flex flex-column justify-content-center align-items-center">
                                    <div class="cart d-flex flex-column align-items-center justify-content-center">
                                        <h2 class="text-center">Carrello di {{ restaurant.name }}</h2>
                                        <div class="f-d-border-bottom"></div>
                                        <div v-for="item in store.cart" :key="item.id">
                                            <p>x{{ item.quantity }}-{{ item.name }} - Totale: {{ item.price *
                                                item.quantity
                                                }}€
                                            </p>
                                        </div>
                                        <div class="f-d-border-bottom"></div>
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
            </div>


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
    <FooterComponent></FooterComponent>



</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'RestaurantDetailComponent',
    components: {
        FooterComponent
    },
    props: ['id'],
    data() {
        return {
            store,
            restaurant: {},
            restaurantname:"",
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
                this.restaurantname = res.data.results.name
                console.log(this.restaurant);
                console.log(this.restaurantname);
            });
        },
        getRestaurants() {
            axios.get(this.store.apiBaseUrl + '/restaurants').then((res) => {
                this.restaurants = res.data.results;
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
            this.store.restaurantname = this.restaurantname
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
        this.getRestaurants();
        this.getSingleRestaurant();
        this.loadCart();
        
    },
    created() {
    },

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables' as *;

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

.f-d-mini-container-img {
    width: 150px;
    height: 80px;
    border-radius: 10px;
    margin: 0 auto;
    aspect-ratio: 1/1;
    cursor: pointer;
    overflow: hidden;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    li {
        list-style-type: none;
    }

    &:hover {
        opacity: 0.7;
    }
}

#info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
}

.f-d-mini-container {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 10px;
    aspect-ratio: 1/1;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    li {
        list-style-type: none;
    }

    &:hover {
        opacity: 0.7;
    }
}

.f-d-card {
    border: 1px solid $background-fourth-color;
    border-radius: 10px;

}
#suggested {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    gap: 20px;
}

.background-image {
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
}

.f-d-mini-container-type {
    width: 50px;
    height: 50px;
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

// css per troncare la parola e farla rimanere all'interno del contenitore senza che vada a capo
.single-line {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
}

.f-d-bg-gradient {
    background: linear-gradient(to right, $background-secondary-color, $background-primary-color, $background-secondary-color);
    color: white;
}

.f-d-bg-gradient-secondary {
    background: linear-gradient(to bottom, $background-primary-color, $background-secondary-color);
    color: white;
}

.quantity-control {
    margin-top: 10px;
}

.quantity-control button {
    width: 30px;
    height: 30px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

#cart-container {
    padding: 70px 0 0 0;
}

// mediaquery 1200px, 768px, 576px

@media screen and (min-width: 1200px) {
    #info-container {
        display: none;
    }

    .f-d-container-img {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        gap: 20px;
        width: 80%;
        height: 100%;
    }

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

    #cart-container {
        display: none;
    }

    #info-container {
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    #suggested {
        display: none;
    }

    .f-d-mq-320 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .f-d-mini-container {
        width: 80%;
        height: 100%;
        margin: 0 auto;
        aspect-ratio: 1/1;
        border-radius: 50%;
        overflow: hidden;
        background-color: lightgray;
        gap: 10px;
    }

    .f-d-card {
    border: 1px solid $background-fourth-color;
    border-left: none;
    border-right: none;
    border-radius: 10px;

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

    #suggested {
        display: none;
    }

    .f-d-card {
    border: 1px solid $background-fourth-color;
    border-left: none;
    border-right: none;
    border-radius: 10px;

}

    #info-container {
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    #cart-container {
        display: none;
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

    .f-d-mini-container {
        width: 80%;
        height: 100%;
        margin: 0 auto;
        aspect-ratio: 1/1;
        border-radius: 50%;
        overflow: hidden;
        background-color: lightgray;
        gap: 10px;
    }

}
</style>