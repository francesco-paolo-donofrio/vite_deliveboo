<template>
    <section id="hero" class="hero-video">
        <video autoplay muted loop class="hero-video-background">
        <source src="../../public/video/food.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        <div class="hero-video__content">
    </div>
        </video>
        <div class="hero-video-content">
          <h1 class="ms-4">Deliveboo</h1>
        <p class="ms-4 fst-italic">La ristorazione a casa tua</p>
        </div>
        
  </section> 
</template>

<script>
    export default {
        name: 'HeroComponent',
    }
</script>

<style lang="scss" scoped>
  #hero{
    width: 100%;
    position: relative;
    video{
      width: 100%;
     
    }
  .hero-video-content {
  position: absolute;
  top: 90%;
  left: 10%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 1;
  }
}
</style>