import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {title: 'meta中的参数'},
    component: HomeView,
    props: {pro:100},
    children: [
      {
        path: 'hello',
        component: () => import('../components/HelloWorld.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/guard',
    name: 'guard',
    component: () => import(/* webpackChunkName: "about" */ '../views/GuardView.vue')
  },
  // {
  //   path: '*',
  //   redirect: '/'
  // }
]

const router = new VueRouter({
  routes,
  // mode: 'history' // 路径中可以没有#号
  mode: "hash" // 地址中默认带上一个#号
})

export default router
