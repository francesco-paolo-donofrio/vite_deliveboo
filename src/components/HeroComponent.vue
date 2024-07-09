<template>
  <section id="hero" class="hero-video">
    <video autoplay muted loop class="hero-video-background">
      <source src="../../public/video/food.mp4" type="video/mp4" />
      Your browser does not support the video tag.
      <div class="hero-video__content">
      </div>
    </video>
    <div class="hero-video-content">
      <p class="f-d-gradientTitle">Deliveboo</p>
      <h4 class="fst-italic">La ristorazione di Roma a casa tua</h4>
      <div class="d-flex gap-5 align-items-center justify-content-between w-50 mt-5">
        <div class="d-flex flex-column align-items-center justify-content-center gap-2">
          <a class="text-white text-decoration-none" href="#restaurants">Ristoranti di Roma</a>
          <a href="#restaurants" class="fa-solid fa-arrow-down fa-beat text-white text-decoration-none"></a>

        </div>
        <div class="d-flex flex-column align-items-center justify-content-center gap-2">
          <a class="text-white text-decoration-none" href="#types">Filtra per tipologie</a>
          <a href="#types" class="fa-solid fa-arrow-down fa-beat text-white text-decoration-none"></a>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'HeroComponent',
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
    -webkit-text-fill-color: transparent;
    font-size: 60px;
    text-transform: uppercase;
  }

  .hero-video-content {
    position: absolute;
    width: 1000px;
    height: 500px;
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
  }
}

@media screen and (max-width: 320px) {
  #hero {
    width: 100%;
    position: relative;

    video {
      width: 100%;
    }
  }

  .f-d-gradientTitle {
    background: linear-gradient(to right, $background-fourth-color, $background-secondary-color, $background-fourth-color, $background-secondary-color, $background-fourth-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    font-size: 5px;
  }

  .hero-video-content {
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
  }
}
</style>