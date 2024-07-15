<template>
    <div class="f-d-background-gradient">
        <div class="f-d-bg-title">
            <h1 class="gradientColorTitle">Deliveboo <p class="gradientColorMini f-d-text-d-none">la ristorazione a
                        portata di mano</p>
            </h1>
        </div>
        <div class="container">
            <div class="row ">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div class="about-us-container">
                            <p class="gradientColorMini-homepage align-self-start text-start">Benvenuti nella nostra applicazione di food
                                delivery!</p>
                            <p class="gradientColorSmall-text-left text-start p-3"> Deliveboo
                                offre un servizio rapido e affidabile per
                                la
                                consegna di cibo dai migliori ristoranti di Roma. <br> <strong>Ordina</strong> online
                                i tuoi piatti
                                preferiti e attendi l'ordine comodamente dal divano</p>
                            <!-- <p class="d-flex align-items-center flex-column justify-content-center"><em
                                class="fw-bold gradientColor-3times">Scegli...</em> <em
                                class="fw-bold gradientColor-3times">Ordina...</em> <em
                                class="fw-bold gradientColor-3times">Clicca....!</em></p> -->
                        

                        <!-- <div class="f-d-flag d-flex align-items-center justify-content-between gap-5 display-none-newClass">
                        <div class="f-d-mini-container ">
                            <h4 class="gradientColorSmall-payment">Pagamento sicuro con</h4>
                            <img class="f-d-img-payment" src="../../public/images/braintree.png" alt="">
                        </div>
                        <a href="#types-title" id="typesLink" class="f-d-mini-container-choose">
                            <h5 class="f-d-bounce-choose">
                                <span class="fa-solid fa-arrow-down fa-fade"></span> Scegli <span
                                    class="fa-solid fa-arrow-down fa-fade"></span>

                            </h5><br>
                            <h5 class="f-d-bounce-choose">
                                un 
                            </h5><br>
                            <h5 class="f-d-bounce-choose">
                                Ristorante
                            </h5><br>
                        </a>

                    </div> -->
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div class="maps-container">
                        <!-- <div>
                        <h2 class="gradientColor-orange">Il corriere..</h2>
                        <p class="gradientColorSmall-text-right">Non temere! <br> Ogni consegna viene trattata con cura,
                            assicurando che i tuoi piatti arrivino puntualmente e in perfette condizioni. </p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="f-d-mini-container-ristoratore f-d-text-d-none">
                        </div>
                    </div> -->
                    </div>

                </div>
                <!-- <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="maps-container">
                    <h2 class="gradientColor-orange">Chi siamo</h2>
            <CardAboutUsComponent />
            <p class="gradientColorSmall-text-right">Fondata dall'idea di 4 studenti di Informatica e appassionati di cucina, <em
                    class="fw-bold gradientColorSmall">Deliveboo</em> entra in scena nelle piazze romane più affamata che mai </p>
                </div>
            </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import CardAboutUsComponent from './CardAboutUsComponent.vue';
import CardDescriptionComponent from './CardDescriptionComponent.vue';

export default {
    name: 'DescriptionComponent',
    components: {
        CardDescriptionComponent,
        CardAboutUsComponent
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
    border-radius: 10px;
}

.f-d-admin-show {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border: 2px solid black;
    animation: borderAnimation 20s infinite;
    padding: 10px;
    border-radius: 10px;
    background-image: url('../../public/images/sfondo-card.jpg');
}

.maps-container-ristoratore {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    font-size: 20px;
    padding: 10px;
    border: 5px solid $background-secondary-color;
    border-radius: 10px;
    background-image: url('../../public/images/sfondo-card.jpg');
}

.about-us-container {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    color: white;
    
}

.maps-container {
    width: 100%;
    height: 100%;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    background-image: url('../../public/images/healthy-food.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}

.gradientColorMini-homepage {
    
    background: linear-gradient(to right, $background-secondary-color, $background-fourth-color, $background-secondary-color, $background-fourth-color, $background-secondary-color);
    -webkit-background-clip: text;
    /* For Safari */
    -webkit-text-fill-color: transparent;
    /* For Safari */
    background-clip: text;
    color: transparent;
    font-size: 2.5rem;
    /* Font size */
    font-weight: bold;
    /* Font weight */
    text-align: center;
    /* Center alignment */
    padding: 10px 20px;
    /* Padding */
    border-radius: 10px;
    /* Box shadow */
    text-transform: uppercase;
    /* Uppercase text */
    letter-spacing: 2px;
    /* Spacing between letters */
}

.gradientColor-choose-restaurant {
    background: linear-gradient(to right, $background-fifth-color, $background-tertiary-color, $background-fifth-color, $background-tertiary-color, $background-fifth-color);
    color: $background-primary-color;
    font-size: 1, 5rem;
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

.f-d-background-gradient {
    background-color: $background-primary-color;
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
    height: 145px;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    border-radius: 10px;
    background-color: white;
}

.f-d-mini-container-choose {
    text-align: center;
    width: 50%;
    height: 145px;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    border: 2px solid $background-primary-color;
    border-radius: 10px;
    padding: 5px;
    animation: 1s borderAnimation infinite;
    background-color: white;
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    &:hover {
        border: 2px solid white;
        background-color: rgba(255, 166, 0, 0.151);
        animation: none;

        & span {
            animation: none;
        }
    }
}

.f-d-mini-container-ristoratore-small {
    text-align: center;
    margin-left: 50px;
    width: 400px;
    height: 300px;
    background-color: white;
    border: 5px solid $background-primary-color;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
}

.f-d-mini-container-ristoratore {
    text-align: center;
    width: 355px;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    border-top: none;
    background-image: url('../../public/images/corriere1.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.f-d-mini-container-ristoratore-great {
    text-align: center;
    width: 500px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    border-radius: 10px;
    border-top: none;
}

.gradientColor-orange {
    color: $background-primary-color;
    background-color: $background-fourth-color;
    /* Font weight */
    text-align: center;
    /* Padding */
    border-radius: 10px;
    /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-weight: bold;

    font-size: 1, 5rem;
    padding: 10px 20px;
    text-transform: uppercase;
    /* Uppercase text */
    letter-spacing: 2px;
    /* Spacing between letters */
    border: 2px solid $background-primary-color;
}

.gradientColor-green {
    color: $background-primary-color;
    /* Font weight */
    text-align: center;
    /* Padding */
    border-radius: 10px;
    /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-weight: bold;

    font-size: 2,5rem;
    padding: 10px 20px;
    text-transform: uppercase;
    /* Uppercase text */
    letter-spacing: 2px;
    /* Spacing between letters */
    border: 2px solid $background-primary-color;
}

.gradientColor-brown {
    color: $background-primary-color;
    background-color: $background-fourth-color;
    /* Font weight */
    text-align: center;
    /* Padding */
    border-radius: 10px;
    /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-weight: bold;

    font-size: 1, 5rem;
    padding: 10px 20px;
    text-transform: uppercase;
    /* Uppercase text */
    letter-spacing: 2px;
    /* Spacing between letters */
    border: 2px solid $background-primary-color;
}

.gradientColor-3times {
    color: $background-primary-color;
    background-color: white;
    /* Font size */
    font-weight: bold;
    /* Font weight */
    text-align: center;
    /* Center alignment */
    padding: 5px 10px;
    /* Padding */
    border-radius: 10px;
    /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* Box shadow */
    text-transform: uppercase;
    /* Uppercase text */
    letter-spacing: 2px;
    /* Spacing between letters */
    border: 1px solid $background-primary-color;
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
    font-size: 1, 5rem;
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

.f-d-bounce-choose {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    background-color: $background-primary-color;
    margin: 0;
    padding: 0;

    border-radius: 5px;
    cursor: pointer;

    text-decoration: none;
    color: $background-fourth-color;
    text-transform: uppercase;
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

.gradientColorSmall-payment {
    color: white;
    background-color: $background-primary-color;
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
    border: 2px solid $background-primary-color;
}

.gradientColorSmall-text-right {
    color: $background-primary-color;

    font-size: 18px;
    /* Font weight */
    text-align: center;
    /* Padding */
    border-radius: 10px;
    /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    /* Uppercase text */
    letter-spacing: 2px;
    /* Spacing between letters */
}

.gradientColorSmall-text-left {
    color: white;
    font-weight: light;
    font-size: 22px;
    /* Font weight */
    text-align: center;
    /* Padding */
    border-radius: 10px;
    /* Uppercase text */
    letter-spacing: 2px;
    /* Spacing between letters */
}

.gradientColorSmall-text-down {
    color: $background-primary-color;

    font-size: 18px;
    /* Font weight */
    text-align: center;
    /* Padding */
    border-radius: 10px;
    /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-weight: bold;
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

    .about-us-container {
        width: 100%;
        display: flex;
        height: auto;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        padding: 10px;
        border-radius: 10px;
    }

    .f-d-text-d-none {
        display: none;
    }

    .maps-container {
        width: 100%;
        display: flex;
        height: 635px;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        text-align: center;
        padding: 10px;
        border: 2px solid black;
        animation: borderAnimation 5s infinite;
        border-radius: 10px;
    }

    .f-d-img-payment {
        width: 10cap;
        height: 50px;
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
        height: 500px;
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
        height: 450px;
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
        height: 350px;
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
        margin: 0 auto;
        height: auto;
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

    .f-d-text-d-none {
        display: none;
    }

    .f-d-img-payment {
        width: 10cap;
        height: 50px;
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

    .f-d-text-d-none {
        display: none;
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
        height: 330px;
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
        margin: 0 auto;
        height: auto;
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

    .f-d-text-d-none {
        display: none;
    }

    .f-d-img-payment {
        width: 10cap;
        height: 50px;
    }

    .f-d-text-d-none {
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
    .f-d-text-d-none {
        display: none;
    }

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
        height: auto;
        margin: 0 auto;
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
        margin: 0 auto;
        height: auto;
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

    .f-d-text-d-none {
        display: none;
    }

    .gradientColorSmall-text-right {
        font-size: 14px;
    }

    .f-d-mini-container-choose {
        text-align: center;
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        border: 2px solid $background-primary-color;
        border-radius: 10px;
        padding: 5px;
        animation: 1s borderAnimation infinite;
        background-color: white;
        cursor: pointer;
        text-decoration: none;
        color: inherit;

        &:hover {
            border: 2px solid white;
            background-color: rgba(255, 166, 0, 0.151);
            animation: none;

            & span {
                animation: none;
            }
        }
    }
}
</style>