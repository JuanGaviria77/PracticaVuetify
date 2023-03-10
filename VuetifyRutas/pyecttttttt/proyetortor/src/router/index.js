import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/InicioView.vue'
import InfoView from '../views/InfoView.vue'
import ContactView from '../views/Contac.vue'
import HelpView from '../views/HelpView.vue'
import QuienView from '../views/QuienView.vue'
import AccederView from '../views/AcceView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: MainView
  },
  {
    path: '/info',
    name: 'info',
    component: InfoView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactView
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  },
  {
    path: '/QuienesSomos',
    name: 'quienes',
    component: QuienView
  },
  {
    path: '/Acceso',
    name: 'Acceso',
    component: AccederView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
