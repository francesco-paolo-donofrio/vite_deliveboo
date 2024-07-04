<template>



    <HeroComponent/>
    <div class="container my-4">
        <div class="row">
            <div class="col-12 col-md-3 col-sm-6 mt-4" v-for="(item, index) in restaurants">
        <div class="row">
            <!-- SE LA RICERCA NON DÁ NESSUN RISULTATO -->
        <div class="col-12 col-lg-6" v-if="item.length < 1">
            <h3>Nessun post trovato per la tipologia: ... </h3> <!-- inserire qui la funzione che ritorna il nome della tipologia -->
        </div>
                <CardComponent :item="item"/>
            </div>
        </div>
        </div>
    </div>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur architecto aut, doloremque recusandae
        totam. </p>
    <ul>
        <li v-for="(item, index) in types" :key="item.id"><button class="btn btn-danger" @click="addType(item)">{{ item.name
                }}</button></li>
    </ul>
    <button type="button" class="btn btn-primary" @click="sendTypes">Submit</button>

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
            //params: {},           
            types: [],
            restaurants: [],
            selectedtypes:[],

        }
    },
    methods: {
        getTypes() {
            axios.get(this.store.apiBaseUrl + '/types').then((res) => {
                console.log(res.data.results);
                this.types = res.data.results;
            });
        },
        getRestaurants() {
            //this.params.append("type_id", prova);
            //this.params.append("type_id", 3);

            axios.get(this.store.apiBaseUrl + '/restaurants', { params: this.params }).then((res) => {
                console.log(this.params);
                console.log(res.data.results);
                this.restaurants = res.data.results;
            });
        },
        addType(item){
            // console.log(item.id, 'aaa');
            if(this.selectedtypes.includes(item.id)){
                const index = this.selectedtypes.indexOf(item.id);
                this.selectedtypes.splice(index, 1);
                
            } else {
                this.selectedtypes.push(item.id)
            }
            console.log(this.selectedtypes);
        },
        sendTypes(){
            //console.log(this.selectedtypes);
            this.selectedtypes.forEach(element => {
                this.params.append("type_id", element);
            })
            //this.params.append("type_id", this.selectedtypes);
            console.log(this.params);
            axios.get(this.store.apiBaseUrl + '/restaurants', { params: this.params }).then((res) => {
                console.log(this.params);
                console.log(res.data.results);
                this.restaurants = res.data.results;

            });
        }
    },
    mounted() {
        this.getTypes();
        this.getRestaurants();
    }
}
</script>

<style lang="scss" scoped>

</style>


<!-- 
let url = window.location.href;
let params = new URLSearchParams(url.search);

//Add a new parameter.
params.append("foo", 4);
//Query string is now: 'foo=4'
-->

<!-- 
updateUrl() {
      // Ottieni l'URL attuale
        const currentUrl = this.$route.fullPath;
        console.log('URL attuale:', currentUrl);

      // Crea un nuovo oggetto URLSearchParams con i nuovi parametri
        const searchParams = new URLSearchParams(this.params);

      // Aggiorna l'URL senza ricaricare la pagina
        this.$router.push({ path: this.$route.path, query: Object.fromEntries(searchParams) });
    }
}

let url = window.location.href;
           
            let paramsTest = new URLSearchParams(url.search);
            //Add a new parameter.
            paramsTest.append("type_id", 3);
            //Query string is now: 'foo=4'
-->
