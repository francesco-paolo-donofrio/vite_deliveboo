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
            restaurants: [],
            params: {type_id: '1'}
        }
    },
    methods: {
        getData() {
            axios.get(this.store.apiBaseUrl + '/restaurants',{params: this.params}).then((res) => {
                
                console.log(res.data.results);
                this.restaurants = res.data.results;
            });
        }
    },
    mounted() {
        this.getData();
    }
}
</script>

<style lang="scss" scoped>

</style>

<!-- 
FUNZIONE DA METTERE NEL CONTROLLER API

public function index(Request $request)
{
    if ($request->query('type_id')) {
        $typeId = $request->query('type_id');

        $restaurants = Restaurant::whereHas('types', function ($query) use ($typeId) {
        $query->where('type_id', $typeId);
            })->get();

    return response()->json(['results' => $restaurants]);
    }
}

-->