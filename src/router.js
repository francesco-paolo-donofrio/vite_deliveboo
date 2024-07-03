import { createRouter, createWebHistory } from 'vue-router';
import HomePageComponent from "./pages/HomePageComponent.vue";
import RestaurantDetailComponent from "./pages/RestaurantDetailComponent.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePageComponent
        },
        {
            path: '/',
            name: 'restaurant-detail',
            component: RestaurantDetailComponent
        },
        
    ],
});
export { router };