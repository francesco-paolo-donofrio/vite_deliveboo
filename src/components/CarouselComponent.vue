<template>
  <!-- Div invisibile per il posizionamento dell'ancora -->
  <div id="anchor-types-title" class="anchor-spacer"></div>
  <div id="types-title">
    <h1 class="gradientColor text-center">Tipologie <p class="gradientColorMini f-d-text-d-none">scegli la tua tipologia preferita</p></h1>
  </div>
  <div id="types" class="d-flex justify-content-center align-items-center">
    <div class="typology-carousel">
      <button @click="scrollLeft" class="nav-button prev" v-show="canScrollLeft">&lt;</button>

      <div class="carousel-container" ref="container">
        <div class="carousel-slide" v-for="type in types" :key="type.id">
          <div class="type-card" :class="{ selected: isSelected(type.id) }" @click="selectType(type.id)">
            <img :src="store.imgBasePath + type.image" :alt="type.name" class="type-image">
            <span class="type-name">{{ type.name }}</span>
          </div>
        </div>
      </div>
      <button @click="scrollRight" class="nav-button next">&gt;</button>
    </div>
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
@use '../assets/styles/partials/_variables' as *;

.typology-carousel {
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  background: linear-gradient(to top, $background-primary-color, $background-secondary-color, $background-primary-color);
  color: white;
}

.carousel-container {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox

  &::-webkit-scrollbar {
    display: none; // Chrome, Safari and Opera
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
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 200px; // Adjust as needed

  &:hover {
    transform: scale(1.05);
  }

  &.selected {
    border: 3px solid $background-fourth-color;
  }
}


  #types-title {
    scroll-margin-bottom: 150px;
    background-image: url('../../public/images/sfondo-card.jpg');
  }

.type-image {
  width: 50%;
  height: 100px; // Adjust as needed
  object-fit: cover;
  border-radius: 20%;
}

.type-name {
  margin-top: 10px;
  font-size: 1rem;
  font-weight: bold;
}

.gradientColorMini {
    background: linear-gradient(to right, $background-primary-color, $background-primary-color);
    /* Gradient colors */
    -webkit-background-clip: text;
    /* For Safari */
    -webkit-text-fill-color: transparent;
    /* For Safari */
    background-clip: text;
    color: transparent;
    font-size: 23px;
    /* Font size */
    font-weight: bold;
    /* Font weight */
    text-align: center;
    /* Center alignment */
    padding: 10px 20px;
    /* Padding */
    border-radius: 10px;
    /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* Box shadow */
    text-transform: uppercase;
    /* Uppercase text */
    letter-spacing: 2px;
    /* Spacing between letters */

}

.gradientColor {
  background: linear-gradient(to right, $background-fourth-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-fourth-color);
  /* Gradient colors */
  -webkit-background-clip: text;
  /* For Safari */
  -webkit-text-fill-color: transparent;
  /* For Safari */
  background-clip: text;
  color: transparent;
  font-size: 3rem;
  /* Font size */
  font-weight: bold;
  /* Font weight */
  text-align: center;
  /* Center alignment */
  padding: 10px 20px;
  /* Padding */
  border-radius: 10px;
  /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* Box shadow */
  text-transform: uppercase;
  /* Uppercase text */
  letter-spacing: 2px;
  /* Spacing between letters */
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #223440;
  color: $background-fourth-color;
  border: none;
  padding: 15px;
  margin: 0 15px;
  font-size: 24px;
  cursor: pointer;
  z-index: 10000;
  border-radius: 10px;

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
}

/* Stile per il div di ancoraggio invisibile */
.anchor-spacer {
  position: relative;
  top: -50px;
  
  /* Altezza dello spazio di ancoraggio */
  visibility: hidden;
  /* Nasconde il div */
}

//   mediaqueries

@media screen and (max-width: 576px) {
  .typology-carousel {
    border-radius: 0 !important;
    width: 100%;
    height: 200px;
  }

  .f-d-text-d-none {
    display: none;
  }
}

@media screen and (max-width: 425px) {
  .typology-carousel {
    border-radius: 0 !important;
    width: 100%;
    height: 200px;
  }

  #types-title {
    h1 {
        font-size: 25px;
    }
}

.f-d-text-d-none {
    display: none;
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #223440;
    color: $background-fourth-color;
    border: none;
    padding: 15px;
    margin: 0 15px;
    font-size: 24px;
    cursor: pointer;
    z-index: 10000;
    border-radius: 10px;
  
    &.prev {
      left: 10px;
    }
  
    &.next {
      right: 10px;
    }
  }
}

@media screen and (max-width: 375px) {
  .typology-carousel {
    border-radius: 0 !important;
    width: 100%;
    height: 200px;
  }

  #types-title {
    h1 {
        font-size: 25px;
    }
}
.f-d-text-d-none {
    display: none;
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #223440;
    color: $background-fourth-color;
    border: none;
    padding: 15px;
    margin: 0 15px;
    font-size: 24px;
    cursor: pointer;
    z-index: 10000;
    border-radius: 10px;
  
    &.prev {
      left: 10px;
    }
  
    &.next {
      right: 10px;
    }
  }
}

@media screen and (max-width: 320px) {
  .typology-carousel {
    border-radius: 0 !important;
    width: 100%;
    height: 200px;
  }

  #types-title {
    h1 {
      font-size: 25px;
    }
  }

  .f-d-text-d-none {
    display: none;
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #223440;
    color: $background-fourth-color;
    border: none;
    padding: 15px;
    margin: 0 15px;
    font-size: 24px;
    cursor: pointer;
    z-index: 10000;
    border-radius: 10px;

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }
  }
}
</style>