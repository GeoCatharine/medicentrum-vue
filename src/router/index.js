import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/find-doctor',
    name: 'Find a doctor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FindDoctor.vue')
  },
  {
    path: '/apps',
    name: 'Apps',
    component: () => import('../views/Apps.vue')
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: () => import('../views/Testimonials.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
