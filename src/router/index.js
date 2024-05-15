import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthorizationView from '../views/AuthorizationView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import InfoView from '../views/InfoView.vue'
import CatalogView from '../views/CatalogView.vue'
import SushiView from '../views/SushiView.vue'

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
    }
  ]
})

export default router
