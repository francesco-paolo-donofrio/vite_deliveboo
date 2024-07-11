<template>
    <swiper
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><img src="../../public/images/placeholder-restaurant.png" alt=""></swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
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
    width: 200px;
    height: 200px;
    margin: 20px auto;

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
      background-color: $background-secondary-color;
    }

    .swiper-slide:nth-child(3n) {
      background-color: $background-tertiary-color;
    }

    .swiper-slide:nth-child(4n) {
      background-color: $background-fourth-color;
    }
  }
  </style>