<template>
    <div class="typology-carousel">
      <button @click="scrollLeft" class="nav-button prev" v-show="canScrollLeft">&lt;</button>
      <div class="carousel-container" ref="container">
        <div class="carousel-slide" v-for="type in types" :key="type.id">
          <div class="type-card" 
               :class="{ selected: isSelected(type.id) }" 
               @click="selectType(type.id)">
            <img :src="store.imgBasePath + type.image" :alt="type.name" class="type-image">
            <span class="type-name">{{ type.name }}</span>
          </div>
        </div>
      </div>
      <button @click="scrollRight" class="nav-button next" v-show="canScrollRight">&gt;</button>
    </div>
  </template>
  
  <script>
  import { store } from '../store';
  export default {
    name: 'CarouselComponent',
    props: {
      types: {
        type: Array,
        required: true
      },
      selectedTypes: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        store,
        canScrollLeft: false,
        canScrollRight: false
      }
    },
    methods: {
      scrollLeft() {
        this.$refs.container.scrollBy({ left: -200, behavior: 'smooth' });
      },
      scrollRight() {
        this.$refs.container.scrollBy({ left: 200, behavior: 'smooth' });
      },
      selectType(typeId) {
        this.$emit('typeSelected', typeId);
      },
      isSelected(typeId) {
        return this.selectedTypes.includes(typeId);
      },
      updateScrollButtons() {
        const container = this.$refs.container;
        this.canScrollLeft = container.scrollLeft > 0;
        this.canScrollRight = container.scrollLeft < container.scrollWidth - container.clientWidth;
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.updateScrollButtons();
        this.$refs.container.addEventListener('scroll', this.updateScrollButtons);
      });
    },
    beforeUnmount() {
      this.$refs.container.removeEventListener('scroll', this.updateScrollButtons);
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .typology-carousel {
    position: relative;
    width: 100%;
    height: 300px; // Adjust as needed
    display: flex;
    align-items: center;
  }
  
  .carousel-container {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    -ms-overflow-style: none;  // IE and Edge
    scrollbar-width: none;  // Firefox
    &::-webkit-scrollbar {
      display: none;  // Chrome, Safari and Opera
    }
  }
  
  .carousel-slide {
    flex: 0 0 auto;
    margin: 0 10px;
  }
  
  .type-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    width: 200px; // Adjust as needed
  
    &:hover {
      transform: scale(1.05);
    }
  
    &.selected {
      border: 3px solid #007bff;
    }
  }
  
  .type-image {
    width: 100%;
    height: 150px; // Adjust as needed
    object-fit: cover;
    border-radius: 10px;
  }
  
  .type-name {
    margin-top: 10px;
    font-size: 1rem;
    font-weight: bold;
  }
  
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 15px;
    font-size: 24px;
    cursor: pointer;
    z-index: 1;
  
    &.prev {
      left: 10px;
    }
  
    &.next {
      right: 10px;
    }
  }
  </style>