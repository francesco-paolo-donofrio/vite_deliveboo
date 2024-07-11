import { createRouter, createWebHistory } from 'vue-router';
import HomePageComponent from "./pages/HomePageComponent.vue";
import RestaurantDetailComponent from "./pages/RestaurantDetailComponent.vue";
import ShoppingCartComponent from "./pages/ShoppingCartComponent.vue";
import ThankYouComponent from "./pages/ThankYouComponent.vue";
import FailOrderComponent from "./pages/FailOrderComponent.vue";
import NotFoundComponent from "./pages/NotFoundComponent.vue";
import TypologiesListComponent from './components/TypologiesListComponent.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePageComponent
        },
        {
            path: '/restaurant/:id',
            name: 'restaurant-detail',
            component: RestaurantDetailComponent,
            props: true
        },
        {
            path: '/shopping-cart',
            name: 'shopping-cart',
            component: ShoppingCartComponent
        },
        {
            path: '/thank-you',
            name: 'thank-you',
            component: ThankYouComponent
        },
        {
            path: '/oh-no',
            name: 'oh-no',
            component: FailOrderComponent
        },
        {
            path: '/typologies-list',
            name: 'typologies-list',
            component: TypologiesListComponent
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundComponent
        }
        
    ],
});
export { router };