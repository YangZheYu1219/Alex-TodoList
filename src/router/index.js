import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/all',
    name: 'all',
  },
  {
    path: '/active',
    name: 'active',
  },
  {
    path: '/complete',
    name: 'complete',
  },
  {
    path: '/*',
    redirect:'/all'
    //如果沒有找到符合的網址，重新導向到/all裡面
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
