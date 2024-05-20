import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthorizationView from '../views/AuthorizationView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import InfoView from '../views/InfoView.vue'
import CatalogView from '../views/CatalogView.vue'
import SushiView from '../views/SushiView.vue'
import CartView from '../views/CartView.vue'
import OrdersView from '../views/OrdersView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import ProductView from '../views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/authorization',
      name: 'authorization',
      component: AuthorizationView
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView
    },
    {
      path: '/info',
      name: 'info',
      component: InfoView
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView
    },
    {
      path: '/sushi',
      name: 'sushi',
      component: SushiView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    }
  ]
})

export default router
