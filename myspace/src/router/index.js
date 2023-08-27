//如果是带hash的，浏览器地址路由会带有#，如：http://localhost:8080/#/
// import { createRouter, createWebHashHistory } from 'vue-router'
// 如果不需要带有#，去掉hash
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
