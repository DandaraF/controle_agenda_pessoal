
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/meu_cadastro',
    name: 'myuser',
    component: () => import(/* webpackChunkName: "myuser" */ '../views/MyUser.vue')
  },
  {
    path: '/usuarios',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
  },
  {
    path: '/pessoas',
    name: 'people',
    component: () => import(/* webpackChunkName: "people" */ '../views/People.vue')
  },
  {
    path: '/contatos',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
