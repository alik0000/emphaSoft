import { createRouter, createWebHistory } from 'vue-router'
import Users from "../views/Users";
import Main from "../views/Main";
import About from "../views/About";
import Login from "../views/Login";
import User from "../views/User.vue";


const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
