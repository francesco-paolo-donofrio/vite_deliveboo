<template>
    <div class="f-d-bg-title">
    <h1 class="gradientColorTitle">Chi siamo, <em class="gradientColorMini">La Nostra Storia e Visione</em></h1>
</div>
    <div class="container">
        
        <div class="about-us-container">
            <div>
                <h2 class="gradientColor">Ristoratore?</h2>
                
            </div>
            <!-- <div class="f-d-flag d-flex align-items-center justify-content-between"> -->
                <!-- <div class="f-d-mini-container">
                    <h4 class="gradientColorSmall">Pagamento con</h4>
                    <img class="f-d-img-payment" src="../../public/images/braintree.png" alt="">

                </div> -->
                <h4 class="f-d-mini-cta f-d-bounce"><a href="http://localhost:8000/login">Registrati</a>
                    <!-- <h4 class="gradientColorSmall f-d-bounce "><a href="http://localhost:8000/login">Registrati</a></h4> -->
                    <!-- <ul class="align-items-start">
                        <li>

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
                        
                    </ul> -->
                </h4>
            <!-- </div> -->
        </div>
        <div class="maps-container">
            <h2 class="gradientColor">Amministratori</h2>
            <CardAboutUsComponent />
            <p>Fondata dall'idea di 4 studenti di Informatica e appassionati di cucina, <em
                    class="fw-bold gradientColorSmall">Deliveboo</em> è pronta ad entrare in scena a Roma, provando ad accontentare
                e aiutando a sfamare i clienti della Capitale italiana.</p>
        </div>
    </div>
</template>

<script>
import CardAboutUsComponent from '../components/CardAboutUsComponent.vue';

export default {
    name: 'AboutUsComponent',
    components: {
        CardAboutUsComponent,
    },
    mounted() {
        console.log('AboutUsComponent montato');
    }
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables' as *;

.f-d-bg-title {
    background-image: url('../../public/images/sfondo-card.jpg');
}

.container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 40px;
}

.f-d-img-payment {
    width: 180px;
    height: 130px;
    border-radius: 10px;
}

.about-us-container {
    width: calc(100% / 2 - 40px);
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    align-items: center;
    text-align: center;
    border: 2px solid black;
    animation: borderAnimation 5s infinite;
    padding: 10px;
    border-radius: 10px;
    background-image: url('../../public/images/sfondo-card.jpg');
}

@keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
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
      0% { border-color: $background-primary-color; }
      25% { border-color: $background-secondary-color; }
      50% { border-color: $background-primary-color;}
      75% { border-color: $background-fourth-color; }
      100% { border-color:$background-primary-color; }
    }


.maps-container {
    width: calc(100% / 2 - 40px);
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

.f-d-mini-cta{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    border: 2px solid black;
    animation: borderAnimation 5s infinite;
    border-radius: 10px;
    margin-top: 30px;
    background-color: #223440;
    border-radius: 10px;
    /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    a{
        padding: 20px 40px;
        border-radius: 10px;
        color: white;  
        text-decoration: none;
        text-transform: uppercase;
    }
    :hover{
        background-color: white;
        color: #223440;   
    }
}

.gradientColor {
    background: linear-gradient(to right, $background-primary-color, $background-secondary-color, $background-primary-color, $background-secondary-color, $background-primary-color);
    /* Gradient colors */
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
      &:hover {
        color: $background-fifth-color;
      }
      
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
    background: linear-gradient(to right, $background-tertiary-color, $background-fourth-color, $background-tertiary-color, $background-fourth-color, $background-tertiary-color);
    /* Gradient colors */
    -webkit-background-clip: text;
    /* For Safari */
    -webkit-text-fill-color: transparent;
    /* For Safari */
    background-clip: text;
    color: transparent;
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
    background: linear-gradient(to right, $background-fourth-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-primary-color,  $background-fourth-color, $background-fourth-color); /* Gradient colors */
    -webkit-background-clip: text; /* For Safari */
    -webkit-text-fill-color: transparent; /* For Safari */
    background-clip: text;
    color: transparent;
    font-size: 25px;
    font-weight: bold; /* Font weight */
    text-align: center; /* Center alignment */
    padding: 10px 20px; /* Padding */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Box shadow */
    text-transform: uppercase; /* Uppercase text */
    letter-spacing: 2px; /* Spacing between letters */
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
    background: linear-gradient(to right, $background-fourth-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-primary-color,  $background-fourth-color, $background-fourth-color); /* Gradient colors */
    -webkit-background-clip: text; /* For Safari */
    -webkit-text-fill-color: transparent; /* For Safari */
    background-clip: text;
    color: transparent;
    font-size: 25px;
    font-weight: bold; /* Font weight */
    text-align: center; /* Center alignment */
    padding: 10px 20px; /* Padding */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Box shadow */
    text-transform: uppercase; /* Uppercase text */
    letter-spacing: 2px; /* Spacing between letters */
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
    background: linear-gradient(to right, $background-fourth-color, $background-fourth-color, $background-primary-color, $background-fourth-color, $background-primary-color,  $background-fourth-color, $background-fourth-color); /* Gradient colors */
    -webkit-background-clip: text; /* For Safari */
    -webkit-text-fill-color: transparent; /* For Safari */
    background-clip: text;
    color: transparent;
    font-size: 25px;
    font-weight: bold; /* Font weight */
    text-align: center; /* Center alignment */
    padding: 10px 20px; /* Padding */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Box shadow */
    text-transform: uppercase; /* Uppercase text */
    letter-spacing: 2px; /* Spacing between letters */
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