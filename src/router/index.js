
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
    path: '/usuarios/editar',
    name: 'user_edit',
    component: () => import(/* webpackChunkName: "user_edit" */ '../views/users/EditUser.vue')
  },
  {
    path: '/usuarios/cadastrar',
    name: 'user_register',
    component: () => import(/* webpackChunkName: "user_register" */ '../views/users/RegisterUser.vue')
  },
  {
    path: '/pessoas',
    name: 'people',
    component: () => import(/* webpackChunkName: "people" */ '../views/People.vue')
  },
  {
    path: '/pessoas/editar',
    name: 'person_edit',
    component: () => import(/* webpackChunkName: "person_edit" */ '../views/person/EditPerson.vue')
  },
  {
    path: '/pessoas/cadastrar',
    name: 'person_register',
    component: () => import(/* webpackChunkName: "person_register" */ '../views/person/RegisterPerson.vue')
  },
  {
    path: '/contatos',
    name: 'contacts',
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue')
  },
  {
    path: '/contatos/editar',
    name: 'contact_edit',
    component: () => import(/* webpackChunkName: "contact_edit" */ '../views/contact/EditContact.vue')
  },
  {
    path: '/contatos/cadastrar',
    name: 'contact_register',
    component: () => import(/* webpackChunkName: "contact_register" */ '../views/contact/RegisterContact.vue')
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
