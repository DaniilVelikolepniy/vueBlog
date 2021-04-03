import { createRouter, createWebHistory } from 'vue-router'
import image from '../views/image.vue'
import LogIn from '../views/LogIn'
import chekIn from '../views/chekIn'
import recovery from '../views/recovery'

const routes = [
  {
    path: '/',
    name: 'image',
    component: image
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/chekIn',
    name: 'chekIn',
    component: chekIn
  },
  {
    path: '/recovery',
    name: 'recovery',
    component: recovery
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
