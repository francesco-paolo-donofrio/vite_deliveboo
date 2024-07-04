<template>
    <div class="f-d-container-typologies">
       <div v-for="item in types" class="f-d-container-img"><img class="f-d-img-fluid" :src="item.image" :alt=item.name></div>
        </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'TypologiesListComponent',
    props: ['item'],
    components: {
    
    
    },
    data() {
        return {
            store,
            types: [],
        }
    },
    methods: {
        getData() {
            axios.get(this.store.apiBaseUrl + '/types',{params: this.params}).then((res) => {
                
                console.log(res.data.results);
                this.types = res.data.results;
            });
        }
    },
    mounted() {
        this.getData();
    }
}
</script>

<style lang="scss" scoped>
    .f-d-container-typologies {
        margin-top: 20px;
        padding: 20px;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .f-d-container-img {
        width: calc(100% / 10 - 40px);
        height: 100px;
        cursor: pointer;

        &:hover {
            opacity: 0.4;
        }
    }

    .f-d-img-fluid {
        width: 80%;
        height: 80%;
    }
</style>