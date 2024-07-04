<template>
    <div class="f-d-container-typologies">
        <div class="f-d-container-img"><img class="f-d-img-fluid" src="../../public/images/pizza.png" alt="Pizza"></div>
        <div class="f-d-container-img"><img class="f-d-img-fluid" src="../../public/images/chinese.png" alt="Pizza"></div>
        <div class="f-d-container-img"><img class="f-d-img-fluid" src="../../public/images/pasta.png" alt="Pizza"></div>
        <div class="f-d-container-img"><img class="f-d-img-fluid" src="../../public/images/sushi.png" alt="Pizza"></div>
        <div class="f-d-container-img"><img class="f-d-img-fluid" src="../../public/images/pizza.png" alt="Pizza"></div>
        <div class="f-d-container-img"><img class="f-d-img-fluid" src="../../public/images/pizza.png" alt="Pizza"></div>
        <div class="f-d-container-img"><img class="f-d-img-fluid" src="../../public/images/pizza.png" alt="Pizza"></div>
        <div class="f-d-container-img"><img class="f-d-img-fluid" src="../../public/images/taco.png" alt="Pizza"></div>
        <div class="f-d-container-img"><img class="f-d-img-fluid" src="../../public/images/pizza.png" alt="Pizza"></div>
        <div class="f-d-container-img"><img class="f-d-img-fluid" src="../../public/images/sushi.png" alt="Pizza"></div>
    </div>
</template>

<script>
    export default {
        name: 'TypologiesListComponent',
    }
</script>

<style lang="scss" scoped>
    .f-d-container-typologies {
        margin-top: 20px;
        padding: 20px;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .f-d-container-img {
        width: calc(100% / 10 - 40px);
        height: 100px;
        cursor: pointer;

        &:hover {
            opacity: 0.4;
        }
    }

    .f-d-img-fluid {
        width: 80%;
        height: 80%;
    }
</style>