import GamePlay from '@/pages/GamePlay.vue'
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
  {
    path: '/play',
    component: GamePlay,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
