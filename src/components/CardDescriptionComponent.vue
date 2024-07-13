<template>
    <swiper
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      class="mySwiper"
    >
    <swiper-slide>
        <div class="d-flex flex-column align-items-center justify-content-center">
        <h4><a class="text-decoration-none text-white" href="http://localhost:8000/login">Registrati</a></h4>
        <img class="w-100" src="../../public/images/img-backend2.png" alt="">
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="d-flex flex-column align-items-center justify-content-center">
        <h4 class="">Compila il form</h4>
        <img class="w-100" src="../../public/images/img-backend3.png" alt="">
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="d-flex flex-column align-items-center justify-content-center">
        <h4 class="">Gestisci il tuo ristorante</h4>
        <img class="w-100" src="../../public/images/img-backend.png" alt="">
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="d-flex flex-column align-items-center justify-content-center">
        <h4 class="mt-3">Controlla gli ordini dall'E-mail</h4>
        <img class="w-100" src="../../public/images/img-backend4.png" alt="">
      </div>
      </swiper-slide>
      
    </swiper>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/effect-cards';
  import '@/assets/styles/general.scss';
  import { EffectCards } from 'swiper/modules';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      console.log('Swiper component setup');
      return {
        modules: [EffectCards],
      };
    },
    mounted() {
      console.log('Swiper component montato');
    }
  };
  </script>
  
  <style lang="scss" scoped>
  @use '../assets/styles/partials/_variables' as *;
  .mySwiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
      font-size: 22px;
      font-weight: bold;
      color: #fff;
    }

    .swiper-slide:nth-child(1n) {
      background-color: $background-primary-color;
    }

    .swiper-slide:nth-child(2n) {
      background-color: $background-primary-color;
    }

    .swiper-slide:nth-child(3n) {
      background-color: $background-primary-color;
    }

    .swiper-slide:nth-child(4n) {
      background-color: $background-primary-color;
    }
  }
  </style>