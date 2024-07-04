<template>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur architecto aut, doloremque recusandae
        totam. </p>
    <ul>
        <li v-for="(item, index) in types"><a href="">{{ item.name }}</a></li>
    </ul>
</template>

<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'HomePageComponent',
    data() {
        return {
            store,
            params : new URLSearchParams(),            
            types: [],
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
            this.params.append("type_id", 1);
            this.params.append("type_id", 3);
            axios.get(this.store.apiBaseUrl + '/restaurants', { params: this.params }).then((res) => {

                console.log(res.data.results);
                this.types = res.data.results;
            });
        }
    },
    mounted() {
        this.getTypes();
    }
}
</script>

<style lang="scss" scoped></style>

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
