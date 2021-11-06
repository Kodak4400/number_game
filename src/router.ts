import GameStart from '@/pages/GameStart.vue'
import Main from '@/pages/Main.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/start',
    component: GameStart,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
