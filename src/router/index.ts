import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/particules',
    name: 'Particules',
    component: () => import(/* webpackChunkName: "about" */ '../views/Particule.vue')
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import(/* webpackChunkName: "about" */ '../views/Timeline.vue')
  },
  {
    path: '/streaming',
    name: 'Streaming',
    component: () => import(/* webpackChunkName: "about" */ '../views/Streaming.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
