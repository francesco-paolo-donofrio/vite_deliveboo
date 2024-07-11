<template>
  <section id="hero" class="hero-video">
    <video autoplay muted loop class="hero-video-background">
      <source src="../../public/video/food.mp4" type="video/mp4" />
      Your browser does not support the video tag.
      <div class="hero-video__content">
      </div>
    </video>
    <div class="hero-video-content">
      <img class="f-d-img-logo-hero" src="../../public/images/logo_deliveboo.png" alt="logo.hero">
      <p class="f-d-gradientTitle">Deliveboo</p>
      <h4 class="fst-italic"><em>La ristorazione di Roma a casa tua</em></h4>
      
      <div class="d-flex gap-5 align-items-center justify-content-center w-50 mt-5">
        <div class="d-flex flex-column align-items-center justify-content-center gap-2">
          <a class="text-white text-decoration-none fs-5" href="#restaurants">Ristoranti</a>
          <a href="#restaurants" id="restaurantsLink" class="fa-solid fa-arrow-down fa-beat f-d-gradientTitle text-decoration-none"></a>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center gap-2">
          <a class="text-white text-decoration-none fs-5" href="#types-title">Tipologie</a>
          <a href="#types" id="typesLink" class="fa-solid fa-arrow-down fa-beat f-d-gradientTitle text-decoration-none"></a>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'HeroComponent',

  data() {
    return {
      
    }
  },
  methods: {
    scrollToTypes(event) {
      event.preventDefault();
      const typesTitle = document.getElementById('types-title');
      const yOffset = -100; // 100px above the element
      const y = typesTitle.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    },
    scrollToRestaurants(event) {
      event.preventDefault();
      const restaurantsTitle = document.getElementById('restaurants-title');
      const yOffset = -100; // 100px above the element
      const y = restaurantsTitle.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    },
    },
    mounted() {
      const typesLink = document.getElementById('typesLink');
    typesLink.addEventListener('click', this.scrollToTypes);

    const restaurantsLink = document.getElementById('restaurantsLink');
    restaurantsLink.addEventListener('click', this.scrollToRestaurants);
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#hero {
  width: 100%;
  position: relative;

  video {
    width: 100%;
  }

  .f-d-gradientTitle {
    background: linear-gradient(to right, $background-fourth-color, $background-secondary-color, $background-fourth-color, $background-secondary-color, $background-fourth-color);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 60px;
    text-transform: uppercase;
  }

  .hero-video-content {
    position: absolute;
    width: 1000px;
    height: 550px;
    background-color: #223440ce;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    z-index: 1;
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.f-d-img-logo-hero {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
}


@media screen and (max-width: 576px) {

  .f-d-img-logo-hero {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-bottom: 20px;
}
  .hero-video-content {
    width: 400px !important;
    height: 300px !important;
    position: absolute;
    background-color: #223440c2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    z-index: 1;
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .f-d-gradientTitle {
      font-size: 25px !important;
    }
    .f-d-display-none {
  display: flex !important;
}
  }
}

@media screen and (max-width: 320px) {
  .f-d-img-logo-hero {
  display: none;
}
  #hero {
    width: 100%;
    position: relative;

    video {
      width: 100%;
    }
  }

  .hero-video-content {
    width: 250px !important;
    height: 170px !important;
    position: absolute;
    background-color: #223440c2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    z-index: 1;
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .f-d-gradientTitle {
      font-size: 25px !important;
    }
    .f-d-display-none {
  display: flex !important;
}
  }

.fst-italic {
  display: none !important;
}



}
</style>