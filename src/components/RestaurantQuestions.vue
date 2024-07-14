<template>
    <div class="f-d-bg-title d-flex flex-column align-items-center justify-content-center">
    <h1 class="gradientColorTitle">Registrati <p class="gradientColorMini"><em>gestisci il tuo ristorante</em></p></h1>
</div>
    <div>
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
    </div>
</template>

<script>
    import CardDescriptionComponent from './CardDescriptionComponent.vue';
    export default {
        name: 'RestaurantQuestions',
        components: {
            CardDescriptionComponent
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables' as *;
.f-d-bg-title {
    background-image: url('../../public/images/sfondo-card.jpg');
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}
.gradientColorTitle {
    background: linear-gradient(to right, $background-fourth-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-primary-color,  $background-fourth-color, $background-fourth-color); /* Gradient colors */
    -webkit-background-clip: text; /* For Safari */
    -webkit-text-fill-color: transparent; /* For Safari */
    background-clip: text;
    color: transparent;
    font-size: 3rem; /* Font size */
    font-weight: bold; /* Font weight */
    text-align: center; /* Center alignment */
    padding: 10px 20px; /* Padding */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Box shadow */
    text-transform: uppercase; /* Uppercase text */
    letter-spacing: 2px; /* Spacing between letters */
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
</style>