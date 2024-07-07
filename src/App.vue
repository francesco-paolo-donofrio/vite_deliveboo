<template>
  <div class="d-flex flex-column">
    <HeaderComponent />
    <main class="f-d-main">
      <router-view></router-view>
    </main>
    <FooterComponent />
  </div>
</template>

<script>

import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import RestaurantDetailComponent from './pages/RestaurantDetailComponent.vue';
import { store } from './store';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    RestaurantDetailComponent,
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
.f-d-main {
  max-height: 2000px;
}
</style>
