import { createRouter, createWebHistory } from 'vue-router';
import HomePageComponent from "./pages/HomePageComponent.vue";
import RestaurantDetailComponent from "./pages/RestaurantDetailComponent.vue";
import ShoppingCartComponent from "./pages/ShoppingCartComponent.vue";
import NotFoundComponent from "./pages/NotFoundComponent.vue";


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
        {
            path: '/shopping-cart',
            name: 'shopping-cart',
            component: ShoppingCartComponent
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundComponent
        }
        
    ],
});
export { router };