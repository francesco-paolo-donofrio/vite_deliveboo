<template>
    <div class="f-d-bg-title">
    <h1 class="gradientColorTitle">Deliveboo, <em class="gradientColorMini">una cucina online a Roma, solo per te</em></h1>
</div>
    <div class="container">
        <div class="row ">
            <div class="col-lg-4">
                <div class="f-d-admin-show">
                    <h2 class="gradientColor">Ordina Online</h2>
                    <p class="gradientColorSmall-text"><em class="fw-bold">Ordina</em> online i tuoi piatti preferiti e attendi l'ordine direttamente dal divano di casa</p>
                    <CardDescriptionComponent />
                    <p>Fondata dall'idea di 4 studenti di Informatica e appassionati di cucina, <em
                            class="fw-bold gradientColorSmall">Deliveboo</em> è pronta ad entrare in scena a Roma,
                        provando ad
                        accontentare
                        e aiutando a sfamare i clienti della Capitale italiana.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="maps-container">
                    <h2 class="gradientColor">Ristoratore</h2>
                    <p class="gradientColorSmall-text"><em class="fw-bold">Gestisci</em> e controlla i tuoi ordini grazie al servizio di email offerto da Deliveboo</p>
                    <p>Fondata dall'idea di 4 studenti di Informatica e appassionati di cucina, <em
                            class="fw-bold gradientColorSmall">Deliveboo</em> è pronta ad entrare in scena a Roma,
                        provando ad
                        accontentare
                        e aiutando a sfamare i clienti della Capitale italiana.</p>
                </div>
                
            </div>
            <div class="col-lg-4">
                <div class="about-us-container">
                    <div>
                        <h2 class="gradientColor">Offerte</h2>
                        <p class="gradientColorSmall-text"><em class="fw-bold">Approfitta</em> delle numerose offerte di Deliveboo per ordinare i piatti amati dalla tua famiglia</p>
                        
                    </div>
                    <div class="f-d-flag d-flex align-items-center justify-content-between">
                        <div class="f-d-mini-container">
                            <h4 class="gradientColorSmall">Pagamento con</h4>
                            <img class="f-d-img-payment" src="../../public/images/braintree.png" alt="">
                        </div>
                        <div class="f-d-mini-container ">
                            <h4 class="f-d-bounce "><a href="http://localhost:8000/login">Registrati</a></h4>
                            <ul class="align-items-start">
                                <li class="text-start">
                                    Registrati e accedi
                                </li>
                                <li class="text-start">
                                    Crea ristorante
                                </li>
                                <li class="text-start">
                                    Aggiungi prodotti
                                </li>
                                <li class="text-start">
                                    Vendi i tuoi prodotti!
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <div class="container">



    </div>

</template>

<script>
import CardDescriptionComponent from './CardDescriptionComponent.vue';

export default {
    name: 'DescriptionComponent',
    components: {
        CardDescriptionComponent
    },
    mounted() {
        console.log('DescriptionComponent montato');
    }
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables' as *;

.container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 40px;
}

.f-d-img-payment {
    width: 150px;
    height: 100px;
}

.f-d-admin-show{
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border: 2px solid black;
    animation: borderAnimation 5s infinite;
    padding: 10px;
    border-radius: 10px;
    background-image: url('../../public/images/sfondo-card.jpg');
}

.about-us-container {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border: 2px solid black;
    animation: borderAnimation 5s infinite;
    padding: 10px;
    border-radius: 10px;
    background-image: url('../../public/images/sfondo-card.jpg');
}

.maps-container {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
    padding: 10px;
    border: 2px solid black;
    animation: borderAnimation 5s infinite;
    border-radius: 10px;
    background-image: url('../../public/images/sfondo-card.jpg');
}
@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-30px);
    }

    60% {
        transform: translateY(-15px);
    }
}

@keyframes borderAnimation {
    0% {
        border-color: $background-primary-color;
    }

    25% {
        border-color: $background-secondary-color;
    }

    50% {
        border-color: $background-primary-color;
    }

    75% {
        border-color: $background-fourth-color;
    }

    100% {
        border-color: $background-primary-color;
    }
}

.f-d-bg-title {
    background-image: url('../../public/images/sfondo-card.jpg');
}

.gradientColorMini {
    background: linear-gradient(to right, $background-primary-color, $background-primary-color, $background-primary-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-primary-color);
    /* Gradient colors */
    -webkit-background-clip: text;
    /* For Safari */
    -webkit-text-fill-color: transparent;
    /* For Safari */
    background-clip: text;
    color: transparent;
    font-size: 1rem;
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


.gradientColorTitle {
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

.f-d-mini-container {
    text-align: center;
    width: 50%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    border: 2px solid black;
    animation: borderAnimation 5s infinite;
    border-radius: 10px;
    border-top: none;
}

.gradientColor {
    background: linear-gradient(to right, $background-primary-color, $background-primary-color, $background-primary-color, $background-primary-color, $background-primary-color);
    /* Gradient colors */
    -webkit-background-clip: text;
    /* For Safari */
    -webkit-text-fill-color: transparent;
    /* For Safari */
    background-clip: text;
    color: transparent;
    font-size: 1,5rem;
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

.f-d-bounce {
    display: inline-block;
    animation: bounce 4s infinite;
    text-decoration: none;
    color: inherit;
    background-color: $background-primary-color;

    border-radius: 5px;
    cursor: pointer;
    padding: 0 10px 0 10px;

    a {
        text-decoration: none;
        color: $background-fourth-color;
        text-transform: uppercase;
    }
}

.gradientColorSmall {
    background: linear-gradient(to right, $background-primary-color, $background-primary-color, $background-primary-color, $background-primary-color, $background-primary-color);
    /* Gradient colors */
    -webkit-background-clip: text;
    /* For Safari */
    -webkit-text-fill-color: transparent;
    /* For Safari */
    background-clip: text;
    color: transparent;
    font-size: 18px;
    /* Font size */
    font-weight: bold;
    /* Font weight */
    text-align: center;
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

.gradientColorSmall-text {
    background: linear-gradient(to right, $background-primary-color, $background-primary-color, $background-primary-color, $background-primary-color, $background-primary-color);
    /* Gradient colors */
    -webkit-background-clip: text;
    /* For Safari */
    -webkit-text-fill-color: transparent;
    /* For Safari */
    background-clip: text;
    color: transparent;
    /* Font weight */
    text-align: center;
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

@media screen and (max-width: 1024px) {
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .maps-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        text-align: center;
        padding: 10px;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        border-radius: 10px;
    }

    .about-us-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        padding: 10px;
        border-radius: 10px;
    }

    .f-d-img-payment {
        width: 10cap;
        height: 50px;
    }

    .f-d-mini-container {
        text-align: center;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        border-radius: 10px;
        border-top: none;
    }



}

@media screen and (max-width: 768px) {
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .maps-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        text-align: center;
        padding: 10px;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        border-radius: 10px;
    }

    .about-us-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        padding: 10px;
        border-radius: 10px;
    }

    .f-d-img-payment {
        width: 10cap;
        height: 50px;
    }

    .f-d-mini-container {
        text-align: center;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        border-radius: 10px;
        border-top: none;
    }



}

@media screen and (max-width: 576px) {
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .maps-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        text-align: center;
        padding: 10px;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        border-radius: 10px;
    }

    .about-us-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        padding: 10px;
        border-radius: 10px;
    }

    .f-d-img-payment {
        width: 10cap;
        height: 50px;
    }

    .f-d-mini-container {
        text-align: center;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        border-radius: 10px;
        border-top: none;
    }



}

@media screen and (max-width: 425px) {
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .f-d-flag {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 20px;
    }

    .maps-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        text-align: center;
        padding: 10px;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        border-radius: 10px;
    }

    .gradientColorTitle {
        background: linear-gradient(to right, $background-fourth-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-fourth-color);
        /* Gradient colors */
        -webkit-background-clip: text;
        /* For Safari */
        -webkit-text-fill-color: transparent;
        /* For Safari */
        background-clip: text;
        color: transparent;
        font-size: 25px;
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

    .about-us-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        padding: 10px;
        border-radius: 10px;
    }

    .f-d-img-payment {
        width: 10cap;
        height: 50px;
    }

    .f-d-mini-container {
        display: none;
    }

    .gradientColor {
        background: linear-gradient(to right, $background-primary-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-primary-color);
        /* Gradient colors */
        -webkit-background-clip: text;
        /* For Safari */
        -webkit-text-fill-color: transparent;
        /* For Safari */
        background-clip: text;
        color: transparent;
        font-size: 18px;
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

}

@media screen and (max-width: 375px) {
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .f-d-flag {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 20px;
    }

    .maps-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        text-align: center;
        padding: 10px;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        border-radius: 10px;
    }

    .gradientColorTitle {
        background: linear-gradient(to right, $background-fourth-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-fourth-color);
        /* Gradient colors */
        -webkit-background-clip: text;
        /* For Safari */
        -webkit-text-fill-color: transparent;
        /* For Safari */
        background-clip: text;
        color: transparent;
        font-size: 25px;
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

    .about-us-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        padding: 10px;
        border-radius: 10px;
    }

    .f-d-img-payment {
        width: 10cap;
        height: 50px;
    }

    .f-d-mini-container {
        display: none;
    }

    .gradientColor {
        background: linear-gradient(to right, $background-primary-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-primary-color);
        /* Gradient colors */
        -webkit-background-clip: text;
        /* For Safari */
        -webkit-text-fill-color: transparent;
        /* For Safari */
        background-clip: text;
        color: transparent;
        font-size: 18px;
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

}

@media screen and (max-width: 320px) {
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .f-d-flag {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 20px;
    }

    .maps-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        text-align: center;
        padding: 10px;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        border-radius: 10px;
    }

    .gradientColorTitle {
        background: linear-gradient(to right, $background-fourth-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-fourth-color);
        /* Gradient colors */
        -webkit-background-clip: text;
        /* For Safari */
        -webkit-text-fill-color: transparent;
        /* For Safari */
        background-clip: text;
        color: transparent;
        font-size: 25px;
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

    .about-us-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        padding: 10px;
        border-radius: 10px;
    }

    .f-d-img-payment {
        width: 10cap;
        height: 50px;
    }

    .f-d-mini-container {
        display: none;
    }

    .gradientColor {
        background: linear-gradient(to right, $background-primary-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-primary-color);
        /* Gradient colors */
        -webkit-background-clip: text;
        /* For Safari */
        -webkit-text-fill-color: transparent;
        /* For Safari */
        background-clip: text;
        color: transparent;
        font-size: 18px;
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

}
</style>