<template>
    <div class="container mt-4">
      <div class="card" v-if="restaurant">
        <h1>{{ restaurant.name }}</h1>
        <img
          v-if="restaurant.image"
          :src="store.imgBasePath + restaurant.image"
          :alt="restaurant.name"
          class="card-img-top"
        >
        <img
          v-else
          src="/images/placeholder-restaurant.png"
          :alt="restaurant.name"
          class="card-img-top"
        >
        <div class="card-body">
          <p class="card-text">{{ restaurant.description }}</p>
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
        restaurant: null,
      };
    },
    methods: {
      getSingleRestaurant() {
        axios.get(`${this.store.apiBaseUrl}/restaurants/${this.id}`)
          .then((res) => {
            this.restaurant = res.data.restaurant;
          })
          .catch(error => {
            console.error("There was an error fetching the restaurant details:", error);
          });
      },
    },
    mounted() {
      this.getSingleRestaurant();
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .card {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  .card-img-top {
    width: 100%;
    height: auto;
  }
  .card-body {
    padding: 15px;
  }
  </style>
  