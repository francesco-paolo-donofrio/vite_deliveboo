<template>
    <div class="container mt-4">
        <div class="card" v-if="restaurant">
        <h1>{{ restaurant.title }}</h1>
        <img v-if="restaurant.image" :src="store.imgBasePath + restaurant.image" :alt="restaurant.name">
        <img v-else src="../public/imgages/placeholder-restaurant.png" :alt="restaurant.name">
        <p>{{ restaurant.description }}</p>
    </div>
    </div>
      
</template>

<script>
    import { store } from '../store';
    import axios from 'axios';

    export default {
    name: 'RestaurantDetailComponent',
    data() {
        return {
            store,
            restaurant: null
        }
    },
    methods: {
    getSingleRestaurant() {
      axios.get(`${this.store.apiBaseUrl}/restaurants/${this.$route.params.id}`, { params: this.params })
        .then((res) => {
          console.log(res.data.results);
          this.restaurant = res.data.results; 
        })
        }
    },
    mounted() {
        this.getSingleRestaurant();
    },
}
</script>

<style lang="scss" scoped>

</style>