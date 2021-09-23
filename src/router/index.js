import { createRouter, createWebHistory } from 'vue-router'
import AppMainBlock from "../views/AppMainBlock";


const routes = [
  {
    path: '/',
    name: 'main',
    component: AppMainBlock
  },
  {
    path: '/fav-heroes',
    name: 'heroes',
    component: () => import('../views/AppFavoriteHeroes.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
