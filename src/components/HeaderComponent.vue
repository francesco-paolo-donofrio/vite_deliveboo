<template>
    <div>
        <li v-for="(item, index) in menuItems" :key="index">
            <router-link :to="{ name: item.routeName }" class="nav-link">
                {{ item.label }}
            </router-link>
        </li>
        <p>ciao</p>
    </div>
</template>

<script>
    
    export default {
        name: 'HeaderComponent',
        data(){
            return {
                menuItems: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Ristoranti',
                    routeName: 'restaurant-detail'
                },
            ],
            show: false
        }
    }
}
</script>


<style lang="scss" scoped></style>