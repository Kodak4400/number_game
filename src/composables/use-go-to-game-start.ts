import { useRouter } from 'vue-router'

export function useGoToGameStart() {
  console.log('router')
  const router = useRouter()
  return router.push('/start')
}
