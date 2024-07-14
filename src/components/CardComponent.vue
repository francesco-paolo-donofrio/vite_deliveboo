<template>
    <section class="card-container">
      <div class="card">
        <img class="card-img-top" :src="getImage" :alt="item.name">
        <div class="card-body">
          <h5 class="card-title single-line fw-bold">{{ item.name }}</h5>
          <div class="d-flex align-items-center justify-content-center">              
              <small class="card-text " v-for="(type, index) in item.types" :key="index"> {{ type.name }}<span v-if="index < item.types.length - 1">,&nbsp;</span>
              </small>
          </div>
          <RouterLink :to="{ name: 'restaurant-detail', params: { id: item.slug } }" class="btn f-d-button-confirm-homepage">Clicca qui</RouterLink>
        </div>
      </div>
    </section>
  </template>

<script>
import { store } from '../store';
export default {
    name: 'CardComponent',
    props: ['item'],
    data() {
        return {
            store
        }
    },
    computed: {
        getImage() {
            return this.item.image ? store.imgBasePath + this.item.image : '/images/placeholder.png';
        }
    }
}
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/_variables' as *;
//     .card{
//         width: 250px;
//     .card-body{
//         border: 1px solid grey;
//     }
//     img {
//         aspect-ratio: 1/1;
//         width: 100%;
// }
// }
// css per troncare la parola e farla rimanere all'interno del contenitore senza che vada a capo
.single-line {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.card {
  width: 250px; /* Fissa la larghezza delle card */
  height: 300px; /* Fissa l'altezza delle card */
  border: none;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  background-color: #fff;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  width: 100%;
  height: 220px; /* Fissa l'altezza dell'immagine */
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

.card-body {
  padding: 20px;
  text-align: center;
  height: calc(100% - 220px); /* Compensa l'altezza dell'immagine */
  background-image: url('../../public/images/sfondo-card.jpg');
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
  transition: color 0.3s ease;
}

.card:hover .card-title {
  color: $background-fourth-color;
}

.card-text {
  display: block;
  margin-bottom: 20px;
  color: #555;
  font-weight: bold;
}

.btn {
  display: block;
  width: 100%;
  text-align: center;
  background: linear-gradient(to right, $background-primary-color, $background-secondary-color, $background-primary-color, $background-secondary-color, $background-primary-color);
  border: none;
  color: white;
  padding: 12px;
  border-radius: 5px;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: auto;
}

.btn:hover {
  transform: scale(1.05);
}

.f-d-button-confirm-homepage{
    color: white;
    font-weight: bold;
    background: linear-gradient(to right, $background-primary-color, $background-secondary-color, $background-primary-color, $background-secondary-color, $background-primary-color);
    width: 100%;
    height: auto;
    border-radius: 5px;
    a {
        text-decoration: none;
        color: white;
    }
  }
  .card-img-top {
    width: 100%;
    height: 80px; /* Fissa l'altezza dell'immagine */
    object-fit: cover;
    transition: transform 0.3s ease;
  }

@media screen and (min-width: 1200px) {
  .card {
  width: 250px; /* Fissa la larghezza delle card */
  height: 250px; /* Fissa l'altezza delle card */
  border: none;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  background-color: #fff;
}
}

@media screen and (min-width: 1024px) {
  .card {
  width: 250px; /* Fissa la larghezza delle card */
  height: 250px; /* Fissa l'altezza delle card */
  border: none;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  background-color: #fff;
}
}

@media screen and (max-width: 768px) {
  .card {
  width: 250px; /* Fissa la larghezza delle card */
  height: 250px; /* Fissa l'altezza delle card */
  border: none;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  background-color: #fff;
}
}


@media screen and (max-width: 576px) {
    .card {
  width: 250px; /* Fissa la larghezza delle card */
  height: 280px; /* Fissa l'altezza delle card */
  border: none;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  background-color: #fff;
}
}

.card-img-top {
  width: 100%;
  height: 80px; /* Fissa l'altezza dell'immagine */
  object-fit: cover;
  transition: transform 0.3s ease;
}
@media screen and (max-width: 425px) {
    .card {
  width: 250px; /* Fissa la larghezza delle card */
  height: 280px; /* Fissa l'altezza delle card */
  border: none;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  background-color: #fff;
}

.single-line {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
}
.card-img-top {
  width: 100%;
  height: 100px; /* Fissa l'altezza dell'immagine */
  object-fit: cover;
  transition: transform 0.3s ease;
}
}

@media screen and (max-width: 375px) {
    .card {
  width: 250px; /* Fissa la larghezza delle card */
  height: 280px; /* Fissa l'altezza delle card */
  border: none;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  background-color: #fff;
}

.single-line {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
}
.card-img-top {
  width: 100%;
  height: 100px; /* Fissa l'altezza dell'immagine */
  object-fit: cover;
  transition: transform 0.3s ease;
}
}

@media screen and (max-width: 320px) {
    .card {
  width: 250px; /* Fissa la larghezza delle card */
  height: 280px; /* Fissa l'altezza delle card */
  border: none;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  background-color: #fff;
}

.single-line {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
}
.card-img-top {
  width: 100%;
  height: 100px; /* Fissa l'altezza dell'immagine */
  object-fit: cover;
  transition: transform 0.3s ease;
}
}
</style>