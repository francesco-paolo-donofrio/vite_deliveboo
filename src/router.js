import { createRouter, createWebHistory } from 'vue-router';
import HomePageComponent from "./pages/HomePageComponent.vue";
import RestaurantDetailComponent from "./pages/RestaurantDetailComponent.vue";
import ShoppingCartComponent from "./pages/ShoppingCartComponent.vue";
import NotFoundComponent from "./pages/NotFoundComponent.vue";
import TypologiesListComponent from './components/TypologiesListComponent.vue';
import CustomerFormComponent from './pages/CustomerFormComponent.vue';


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
            path: '/typologies-list',
            name: 'typologies-list',
            component: TypologiesListComponent
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundComponent
        },
        {
            path: '/customer-form',
            name: 'customer-form',
            component: CustomerFormComponent
        }

        
    ],
});
export { router };