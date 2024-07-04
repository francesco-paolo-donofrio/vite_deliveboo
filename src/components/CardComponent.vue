<template>
  <!--   <section>
<div class="card">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{ item.name }}</h5>
    <p class="card-text">{{item.type}}</p>
    <p class="card-text">{{item.description}}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <RouterLink :to="{ name: 'restaurant-detail', params: { 'id': item.id } }" class="btn btn-success">Visualizza Ristorante</RouterLink>
</div>
    </section>  -->
</template>

<script>
import { store } from '../store';
    export default {
        name: 'CardComponent',
        props: ['item'],
        data() {
            return {
                store
            }
        },
        computed: {
            getImage() {
                /* return this.item.image ? store.imgBasePath + this.item.image : '/images/placeholder.png'; */
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>