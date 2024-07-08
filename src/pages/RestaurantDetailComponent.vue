<template>
    <div v-if="restaurant" class="f-d-container">
        <section class="f-d-first-container">
            <div class="card">
                <h1 class="text-center"><strong class="gradientColor">{{ restaurant.name }}</strong></h1>
                <img v-if="restaurant.image" :src="store.imgBasePath + restaurant.image" :alt="restaurant.name">
                <img v-else src="../public/images/placeholder-restaurant.png" :alt="restaurant.name">
            </div>
        </section>
        <section class="f-d-second-container">
            <div>
                <h3><em class="f-d-primary-color">Tipologie</em></h3>
                <div>
                    <ul class="d-flex flex-wrap justify-content-start gap-2 p-0">
                        <li class="f-d-mini-container" v-for="(item, index) in restaurant.types" :key="index">
                            <img class="img-fluid" :src="store.imgBasePath + item.image" :alt="item.name">
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h3 class=""><em class="f-d-primary-color">Info utili</em></h3>
                <p><em>{{ restaurant.description }}</em></p>
                <p>Consegna in <strong>10 - 20 minuti</strong></p>
                <p>Indirizzo: {{ restaurant.address }}</p>
                <p>Numero di telefono: {{ restaurant.phone }}</p>
                <p class="f-d-primary-color">Prezzo medio: {{ restaurant.price }}€</p>
            </div>
        </section>

        <!-- Modal -->
        <div v-if="showModal" class="modal fade show d-block" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true" style="background-color: rgba(0, 0, 0, 0.5);">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header d-flex justify-content-between">
                        <h5 class="modal-title" id="exampleModalLabel">{{ selectedDish.name }}</h5>
                        <button type="button" class="f-d-close" @click="closeModal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex flex-column align-items-center justify-content-center">
                            <img v-if="selectedDish.image" :src="store.imgBasePath + selectedDish.image"
                                :alt="selectedDish.name" class="f-d-modal-img-fluid">
                            <p v-if="selectedDish.description" class="align-self-start"><em>{{ selectedDish.description
                                    }}</em></p>
                            <p v-if="selectedDish.price" class="align-self-start fs-5">{{ selectedDish.price }}€</p>

                        </div>

                    </div>
                    <div class="modal-footer d-flex flex-column justify-content-center align-items-center">
                        <button type="button" class="f-d-button" @click="closeModal">Aggiungi al carrello</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section id="menu">
        <h3 class="text-center mb-3"><em class="f-d-primary-color">Menù</em></h3>
        <div class="">
            <ul class="d-flex flex-wrap justify-content-around p-0">
                <li class="f-d-mini-container" v-for="(item, index) in restaurant.products" :key="index" @click="openModal(item)">
                    <img class="img-fluid" :src="store.imgBasePath + item.image" :alt="item.name">
                    <span class="hover-icon">+</span>
                    <!-- BISOGNA MOSTRARE ANCHE IL NOME DEL PIATTO, SOTTO L?ICONA CON L'IMMAGINE
                    Bisogna sistemare le regole del css, perché ora il item.name si nasconde sotto l'immagine oppure ci va sopra -->
                    <!-- <p class="f-d-primary-color">{{ item.name }}</p> -->
                </li>
            </ul>
        </div>
    </section>
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
            showModal: false
        };
    },
    methods: {
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
        }
    },
    mounted() {
        this.getSingleRestaurant();
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables' as *;

.f-d-first-container {
    width: calc(100% / 2 - 40px);
    //height: 500px;
}

.f-d-second-container {
    width: calc(100% / 2 - 40px);
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


.f-d-mini-container {
    width: calc(100% / 6 - 40px);
    height: 100px;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
    background-color: gray;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;

    li {
        list-style-type: none;
    }

    &:hover {
        opacity: 0.7;
    }

    .hover-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        color: black;
        font-weight: bold;
    }

    &:hover .hover-icon {
        display: block;
    }
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
</style>