//如果是带hash的，浏览器地址路由会带有#，如：http://localhost:8080/#/
// import { createRouter, createWebHashHistory } from 'vue-router'
// 如果不需要带有#，去掉hash
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import RegisterView from '../views/RegisterView.vue';
import UserListView from '../views/UserListView.vue';
import UserProfileView from '../views/UserProfileView.vue';

//路由，就是地址那里的地址
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // 好习惯：链接后面以/结尾
    path: '/login/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/404/',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/register/',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/userlist/',
    name: 'userlist',
    component: UserListView
  },
  {
    // :表示是一个链接上面的参数
    path: '/userprofile/:userId/',
    name: 'userprofile',
    component: UserProfileView
  },
  {
    // 访问不存在的页面的是否会自动重定向到404
    path:'/:catchAll(.*)',
    redirect:'/404/'
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
