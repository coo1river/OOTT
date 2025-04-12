import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import OOTDView from '@/views/OOTDView.vue'
import ThisWeekView from '@/views/ThisWeekView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/ootd',
    name: 'ootd',
    component: OOTDView,
  },
  {
    path: '/thisweek',
    name: 'thisweek',
    component: ThisWeekView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
