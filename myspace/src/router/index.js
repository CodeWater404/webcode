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
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFoundView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: UserListView
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: UserProfileView
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
