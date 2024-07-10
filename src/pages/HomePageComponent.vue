<template>
    <HeroComponent />
    <CarouselComponent :types="types" :selectedTypes="selectedtypes" @typeSelected="toggleType" />

    <!-- <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-primary mx-2 p-2" @click="sendTypes">Filtra</button>
        <button type="button" class="btn btn-secondary mx-2 p-2" @click="resetTypes">Reset</button>
    </div> -->
    <div id="types-title">
        <h1 class="gradientColor text-center">Ristoranti</h1>
    </div>
    <div class="f-d-gradient-not-found-message">
        <div id="restaurants" class="container my-4 ">
            <div class="text-center text-white fw-bold" v-if="restaurants.length != 0">Risultati trovati: {{
                restaurants.length }}</div>
            <div class="row">
                <div class="col-12 col-md-3 col-sm-6 mt-4 d-flex justify-content-center align-items-center" v-for="(item, index) in restaurants" :key="index">
                    <div class="row ">
                        <CardComponent :item="item" />
                    </div>
                </div>
                <!-- SE LA RICERCA NON DÁ NESSUN RISULTATO -->
                <div v-if="restaurants.length === 0">
                    <h3 class="text-center text-white fw-bold">Nessun ristorante trovato che rientra in queste
                        tipologie:
                        <div class="d-flex justify-content-center align-items-center">
                            <ul class="list-unstyled w-50 d-flex justify-content-center align-items-center gap-3">
                                <li class="f-d-fourth-color" v-for="(name, index) in selectedtypesNames" :key="index">{{
                                    name }}</li>
                            </ul>
                        </div>
                        <div class="d-flex justify-content-center pt-3">
                            <div class="d-flex flex-column align-items-center w-100">
                                <img src="../../public/images/not-found.webp" alt="notFoundImg">
                            </div>
                        </div>
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
import HeroComponent from '../components/HeroComponent.vue';
import CardComponent from '../components/CardComponent.vue';
import CarouselComponent from '../components/CarouselComponent.vue';



export default {
    name: 'HomePageComponent',
    components: {
        CardComponent,
        HeroComponent,
        CarouselComponent
    },
    data() {
        return {
            store,
            types: [],
            restaurants: [],
            selectedtypes: [],
            selectedtypesNames: [],
        }
    },
    methods: {
        getTypes() {
            axios.get(this.store.apiBaseUrl + '/types').then((res) => {
                this.types = res.data.results;
            });
        },
        getRestaurants(params = {}) {
            axios.get(this.store.apiBaseUrl + '/restaurants', { params }).then((res) => {
                this.restaurants = res.data.results;
            });
        },
        toggleType(typeId) {
            if (this.selectedtypes.includes(typeId)) {
                // Se già presente, rimuovi
                const index = this.selectedtypes.indexOf(typeId);
                this.selectedtypes.splice(index, 1);
                this.selectedtypesNames.splice(index, 1);
            } else {
                // Altrimenti aggiungi
                this.selectedtypes.push(typeId);
                const type = this.types.find(item => item.id === typeId);
                if (type) {
                    this.selectedtypesNames.push(type.name);
                }
            }

            // Aggiorna l'URL con i nuovi parametri
            const query = { type_id: this.selectedtypes.map(id => id.toString()) };
            this.$router.push({ path: '/', query }).then(() => {
                // Aggiorna i ristoranti con i nuovi parametri
                this.getRestaurants(query);
            });
        },
        isSelected(typeId) {
            return this.selectedtypes.includes(typeId);
        },
        sendTypes() {
            // Questo metodo non sarà più utilizzato per aggiornare i parametri type_id
            // Ma può rimanere come punto di riferimento per la funzionalità di filtraggio completo
        },
        resetTypes() {
            this.selectedtypes = [];
            this.selectedtypesNames = [];
            this.$router.push({ path: '/', query: {} }).then(() => {
                this.getRestaurants();
            });
        },
    },
    mounted() {
        this.getTypes();
        this.getRestaurants(this.$route.query);


        // Se ci sono parametri type_id nell'URL al caricamento iniziale, li carichiamo
        // const { type_id } = this.$route.query;
        // if (type_id) {
        //     if (Array.isArray(type_id)) {
        //         this.selectedtypes = type_id.map(id => parseInt(id));
        //         this.selectedtypesNames = this.selectedtypes.map(id => {
        //             const type = this.types.find(item => item.id === id);
        //             return type ? type.name : '';
        //         });
        //     } else {
        //         this.selectedtypes = [parseInt(type_id)];
        //         const type = this.types.find(item => item.id === parseInt(type_id));
        //         this.selectedtypesNames = type ? [type.name] : [];
        //     }
        // }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables' as *;

.btn-types {
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;

    &.btn-color {
        background-color: blue;
        color: white;

        &.selected {
            background-color: lightblue;
        }
    }

}

#types-title {
    margin: 10px 0;
    /* Margin around the title */
}

.gradientColor {
    background: linear-gradient(to right, $background-fourth-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-fourth-color);
    /* Gradient colors */
    -webkit-background-clip: text;
    /* For Safari */
    -webkit-text-fill-color: transparent;
    /* For Safari */
    background-clip: text;
    color: transparent;
    font-size: 3rem;
    /* Font size */
    font-weight: bold;
    /* Font weight */
    text-align: center;
    /* Center alignment */
    padding: 10px 20px;
    /* Padding */
    border-radius: 10px;
    /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* Box shadow */
    text-transform: uppercase;
    /* Uppercase text */
    letter-spacing: 2px;
    /* Spacing between letters */
}

.f-d-gradient-not-found-message {
    background: linear-gradient(to right, $background-secondary-color, $background-primary-color, $background-secondary-color);
    color: white;
}

.f-d-secondary-color {
    color: $background-secondary-color;
}

.f-d-fourth-color {
    color: $background-fourth-color;
}

// styles carousel

.typology-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;

    .carousel-container {
        display: flex;
        overflow: hidden;
        width: 80%; // Regola questa larghezza secondo le tue esigenze
    }

    .carousel-slide {
        flex: 0 0 33.333%; // Mostra 3 elementi alla volta
        text-align: center;
        padding: 0 10px;

        img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }

    .nav-button {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 0 10px;

        &:hover {
            color: #007bff; // Colore al passaggio del mouse
        }
    }
}

// mediaqueries
@media screen and (max-width: 576px) {}

@media screen and (max-width: 320px) {
    #types-title {
        h1 {
            font-size: 25px;
        }
    }
}
</style>