import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/all',
    name: 'All',
    component:()=> import('../views/All.vue')
  },
  {
    path:'/promise',
    name:'promise',
    component:()=> import('../views/promise.vue')
  },
  {
    path:'/nodeList',
    name:'nodeList',
    component:()=> import('../views/nodeList.vue')
  },
  {
    path:'/async',
    name:'async',
    component:()=> import('../views/async.vue')
  },
  {
    path:'/class',
    name:'class',
    component:()=>import('../views/class.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
