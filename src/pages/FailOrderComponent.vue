<template>
    <h2 class="text-center container my-3">Il tuo ordine non è andato a buon fine </h2>
    <div class="container my-3 text-center">
        A breve verrai reindirizzato alla pagina del carrello: prova ad effettuare nuovamente il pagamento, assicurati
        di avere credito sufficiente sulla carta di credito.
    </div>
    <div class="pulse-container">
        <div class="ball" v-for="n in 3" :key="n"></div>
    </div>
    <div class="countdown container my-3 text-center">
        Reindirizzamento tra {{ countdown }} secondi...
        <br>
        Oppure clicca <a href="/shopping-cart">qui</a>
    </div>
    <FooterComponent id="footer"></FooterComponent>
</template>

<script>
import { store } from '../store';
import HeroComponent from '../components/HeroComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
    name: 'FailOrderComponent',
    components: {
        HeroComponent,
        FooterComponent
    },
    data() {
        return {
            store,
            countdown: 10
        }
    },
    mounted() {
        this.startCountdown();
    },
    methods: {
        startCountdown() {
            const interval = setInterval(() => {
                if (this.countdown > 0) {
                    this.countdown--;
                } else {
                    clearInterval(interval);
                    // Redirigi alla pagina del carrello
                    window.location.href = '/shopping-cart';
                }
            }, 1000);
        }
    }
}
</script>

<style lang="scss" scoped>
ul {
    padding: 0;
}

li {
    list-style: none;
}

.table.borderless th,
.table.borderless td {
    border: none;
}

// #footer {
//     position: absolute;
//     bottom: 0;
//     width: 100%;
// }

.pulse-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    height: 100px;
    /* Altezza della sezione contenente l'animazione */
}

.ball {
    width: 20px;
    height: 20px;
    background-color: #3498db;
    border-radius: 50%;
    margin: 0 5px;
    /* Spaziatura tra le palline */
    animation: pulse 1s linear infinite;
}

.ball:nth-child(2) {
    animation-delay: 2.33s;
}

.ball:nth-child(3) {
    animation-delay: 4.66s;
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.5);
    }
}
</style>