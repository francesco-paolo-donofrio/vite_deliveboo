<template>
    <HeroComponent />
    <div class="d-flex justify-content-center my-3">
        <span v-for="(item, index) in types" :key="item.id" class="p-2 mx-2 btn-types btn-color" :class="{ selected: selectedtypes.includes(item.id) }" 
        @click="addType(item)">{{ item.name }}</span>
    </div>    
    <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-primary mx-2 p-2" @click="sendTypes">Filtra</button>
        <button type="button" class="btn btn-secondary mx-2 p-2" @click="resetTypes">Reset</button>
    </div>
    <div class="container my-4">
        <div class="row">
            <div class="col-12 col-md-3 col-sm-6 mt-4" v-for="(item, index) in restaurants">
                <div class="row">
                    <CardComponent :item="item" />
                </div>
            </div>
            <!-- SE LA RICERCA NON DÁ NESSUN RISULTATO -->
            <div class="col-12 col-lg-6" v-if="restaurants.length == 0">
                <h3>Nessun ristorante trovato che soddisfi questi requisiti:
                    <ul>
                        <li v-for="(name, index) in selectedtypesNames" :key="index">{{ name }}</li>
                    </ul>
                </h3>
                <!-- inserire qui la funzione che ritorna il nome della tipologia -->
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
            params: new URLSearchParams(),          
            types: [],
            restaurants: [],
            selectedtypes: [],
            selectedtypesNames: [],
        }
    },
    methods: {
        getTypes() {
            axios.get(this.store.apiBaseUrl + '/types').then((res) => {
                console.log(res.data.results);
                //console.log(this.$route.params, 'prova');
                this.types = res.data.results;
            });
        },
        getRestaurants() {
            axios.get(this.store.apiBaseUrl + '/restaurants', { params: this.params }).then((res) => {
                //console.log(this.params);
                //console.log(res.data.results);
                this.restaurants = res.data.results;
            });
        },
        addType(item) {
            // console.log(item.id, 'aaa');
            if (this.selectedtypes.includes(item.id)) {
                const index = this.selectedtypes.indexOf(item.id);
                this.selectedtypes.splice(index, 1);
                this.selectedtypesNames.splice(index, 1);
            } else {
                this.selectedtypes.push(item.id);
                console.log(item.name);
                this.selectedtypesNames.push(item.name);
            }
            //console.log(this.selectedtypes);
        },
        sendTypes() {
            //console.log(this.selectedtypes);
            this.selectedtypes.forEach(element => {
                this.params.append("type_id", element);
            })
            //this.params.append("type_id", this.selectedtypes);
            //console.log(this.params);
            axios.get(this.store.apiBaseUrl + '/restaurants', { params: this.params }).then((res) => {
                //console.log(this.params);
                //console.log(res.data.results);
                this.restaurants = res.data.results;
                console.log(res.data.results);
            });
            this.params = new URLSearchParams();
        },
        resetTypes() {
            this.selectedtypes = [];
            this.getRestaurants();
        }
    },
    mounted() {
        this.getTypes();
        this.getRestaurants();
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