<template>
  <HeaderComponent/>
  <router-view ></router-view>
  <FooterComponent/>
</template>

<script>

import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import { store } from './store';
import axios from 'axios';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      FooterComponent
  },
    data() {
      return {
        store,
        
      }
    },
    
}

</script>

<style lang="scss" scoped>

</style>