<template>
<section>
    <div class="card">
        <img class="card-img-top" :src="getImage" :alt="item.name">
        <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <small class="card-text" v-for="(type, index) in item.types" :key="index">{{ type.name }}<span v-if="index < item.types.length - 1">, </span></small>
        </div>
        <RouterLink :to="{ name: 'restaurant-detail', params: {'id': item}}" class="btn btn-success" @click="getid(item)">Visualizza Ristorante</RouterLink>
    </div>
    </section> 
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
        methods:{
            getid(item){
                console.log(item);
                this.store.item= item.id
            }
        },
        mounted(){
            
        },
        computed: {
            getImage() {
                return this.item.image ? store.imgBasePath + this.item.image : '/images/placeholder.png';      
            }
            
        }
    }
</script>

<style lang="scss" scoped>
    .card{
        width: 250px;
    .card-body{
        border: 1px solid grey;
    }
    img {
        aspect-ratio: 1/1;
        width: 100%;
}
}
</style>