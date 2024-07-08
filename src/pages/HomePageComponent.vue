<template>
    <HeroComponent />
    <div class="d-flex justify-content-center my-3">
        <span 
            v-for="(item, index) in types" 
            :key="item.id" 
            class="p-2 mx-2 btn-types btn-color" 
            :class="{ selected: isSelected(item.id) }" 
            @click="toggleType(item.id)">
            {{ item.name }}
        </span>
    </div>
    <!-- <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-primary mx-2 p-2" @click="sendTypes">Filtra</button>
        <button type="button" class="btn btn-secondary mx-2 p-2" @click="resetTypes">Reset</button>
    </div> -->
    <div class="container my-4">
        <div v-if="restaurants.length != 0">Risultati trovati: {{ restaurants.length }}</div>
        <div class="row">
            <div class="col-12 col-md-3 col-sm-6 mt-4" v-for="(item, index) in restaurants" :key="index">
                <div class="row">
                    <CardComponent :item="item" />
                </div>
            </div>
            <!-- SE LA RICERCA NON DÁ NESSUN RISULTATO -->
            <div v-if="restaurants.length === 0">
                <h3>Nessun ristorante trovato che soddisfi questi requisiti:
                    <ul>
                        <li v-for="(name, index) in selectedtypesNames" :key="index">{{ name }}</li>
                    </ul>
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
import HeroComponent from '../components/HeroComponent.vue';
import CardComponent from '../components/CardComponent.vue';



export default {
    name: 'HomePageComponent',
    components: {
        CardComponent,
        HeroComponent

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
        }
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
.btn-types{
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    &.btn-color{
        background-color: blue;
        color: white;
        &.selected{
            background-color: lightblue;
        }   
    }

}

</style>