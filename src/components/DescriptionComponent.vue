gradientColor-gr<template>
    <div class="f-d-bg-title ">
        <h1 class="gradientColorTitle">Deliveboo, <em class="gradientColorMini">la ristorazione a portata di mano</em>
        </h1>
    </div>
    <div class="container mt-5">
        <div class="row ">
            <div class="col-lg-6">
                <div class="about-us-container">
                    <div class="d-flex flex-column align-items-center justify-content-center">
                        <h2 class="gradientColor-green">Ordina Online</h2>
                        <p class="gradientColorSmall-text-left"><em class="fw-bold">Ordina</em> online i tuoi piatti
                            preferiti e attendi l'ordine comodamente dal divano</p>
                        <p class="d-flex align-items-center flex-column justify-content-center"><em
                                class="fw-bold gradientColor-3times">Scegli...</em> <em
                                class="fw-bold gradientColor-3times">Ordina...</em> <em
                                class="fw-bold gradientColor-3times">Clicca....!</em></p>
                    </div>
                    <div class="f-d-flag d-flex align-items-center justify-content-between gap-5">
                        <div class="f-d-mini-container">
                            <h4 class="gradientColorSmall-payment">Pagamento sicuro con</h4>
                            <img class="f-d-img-payment" src="../../public/images/braintree.png" alt="">
                        </div>
                        <a href="#types-title" id="typesLink" class="f-d-mini-container-choose">
                            <h4 class="f-d-bounce-choose">
                                <span class="fa-solid fa-arrow-down fa-fade"></span> Scegli <span
                                    class="fa-solid fa-arrow-down fa-fade"></span>

                            </h4><br>
                            <h4 class="f-d-bounce-choose">
                                una 
                            </h4><br>
                            <h4 class="f-d-bounce-choose">
                                Tipologia
                            </h4><br>
                        </a>

                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="maps-container">
                    <div>
                        <h2 class="gradientColor-orange">Il corriere è in arrivo..</h2>
                        <p class="gradientColorSmall-text-right">Non temere! <br> Ogni consegna viene trattata con cura,
                            assicurando che i tuoi piatti arrivino puntualmente e in perfette condizioni. </p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="f-d-mini-container-ristoratore">
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-lg-12">
                <div class="maps-container-ristoratore mt-4">
                    <div>
                        <h2 class="gradientColor-brown">Ristoratore?</h2>
                        <p class="gradientColorSmall-text-down"><em class="fw-bold">Controlla</em> e <em
                                class="fw-bold">Gestisci</em> i tuoi ordini grazie al servizio di EMail offerto da <em
                                class="fw-bold">Deliveboo</em><br>Inizia a guadagnare anche tu grazie alla
                            collaborazione
                            con <em class="fw-bold">Deliveboo</em></p>
                    </div>
                    <div class="d-flex align-items-start justify-content-between gap-5">
                        <div class="f-d-mini-container-ristoratore-great">
                            <CardDescriptionComponent />
                        </div>
                        <div class="f-d-mini-container-ristoratore-small ">
                            <h4 class="f-d-bounce "><a href="http://localhost:8000/login">Registrati</a></h4>
                            <ul class="align-items-start">
                                <li class="text-start f-d-primary-color fw-bold">
                                    <em class="fw-bold">Registrati</em> alla tua area riservata
                                </li>
                                <li class="text-start f-d-primary-color fw-bold">
                                    <em class="fw-bold">Crea</em> il tuo ristorante
                                </li>
                                <li class="text-start f-d-primary-color fw-bold">
                                    <em class="fw-bold">Aggiungi</em> i piatti al tuo ristorante
                                </li>
                                <li class="text-start f-d-primary-color fw-bold">
                                    <em class="fw-bold">Vendi</em> i tuoi prodotti!
                                </li>
                                <li class="text-start f-d-primary-color fw-bold">
                                    <em class="fw-bold">Controlla</em> gli ordini in tempo reale
                                </li>
                                <li class="text-start f-d-primary-color fw-bold">
                                    <em class="fw-bold">Analizza</em> i profitti tramite i grafici
                                </li>
                                <li class="text-start f-d-primary-color fw-bold">
                                    <em class="fw-bold">Gestisci</em> le Email e i relativi ordini
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <!-- <div class="col-lg-4">
                <div class="about-us-container">
                    <div>
                        <h2 class="gradientColor">Ristoratore</h2>
                        <p class="gradientColorSmall-text"><em class="fw-bold">Gestisci</em> e <em class="fw-bold">Controlla</em> i tuoi ordini grazie al servizio di email offerto da <em class="fw-bold">Deliveboo</em></p>
                        
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
                
            </div> -->
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
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border: 5px solid $background-secondary-color;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    background-image: url('../../public/images/sfondo-card.jpg');
}

.maps-container {
    width: 100%;
    height: 500px;
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
    height: 180px;
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
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    border: 2px solid $background-primary-color;
    border-radius: 10px;
    animation: 1s borderAnimation infinite;
    background-color: white;
    cursor: pointer;
    padding: 5px;
    text-decoration: none;
        color: inherit;

    &:hover {
        border: 2px solid $background-fourth-color;
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
    width: 500px;
    height: 263px;
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

    border-radius: 5px;
    cursor: pointer;
    padding: 0 10px 0 10px;

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
        border: 2px solid $background-tertiary-color;
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